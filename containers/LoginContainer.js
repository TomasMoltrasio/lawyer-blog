import { useState, useContext } from "react";
import UserContext from "context/AuthContext";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

export default function LoginContainer() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { logIn } = useContext(UserContext);
  const router = useRouter();
  const cookies = new Cookies();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Debe ingresar un usuario y contraseña");
      return;
    }
    setLoading(true);
    const user = {
      username,
      password,
    };
    const response = await logIn(user);
    if (cookies.get("user")) {
      router.push("/");
    } else {
      setError(response);
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="
        w-full
        max-w-sm
        flex
        flex-col
        justify-center
        items-center
        bg-white
        shadow-md
        rounded-lg
        py-12
        px-8
        space-y-4
        border-2
        border-gray-700
      "
      >
        <h1 className="text-3xl font-bold mb-4">Iniciar sesión</h1>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
          className="border w-full border-gray-300 rounded-md p-2 mb-2"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          className="border w-full border-gray-300 rounded-md p-2 mb-2"
        />
        <button
          className="
            bg-emerald-900/50
            text-white
            rounded-md
            p-2
            w-full
            hover:bg-emerald-900/75
            disabled:opacity-50
            disabled:cursor-not-allowed
            "
          disabled={loading || !username || !password}
          type="submit"
        >
          Iniciar sesión
        </button>
      </form>
      {error && (
        <p
          className="
        text-red-500
        text-center
        mt-2
        animate-pulse
        transition
        duration-500
        ease-in-out
      "
        >
          {error}
        </p>
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
}
