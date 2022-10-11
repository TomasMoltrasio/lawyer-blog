import { Container, Button } from "@nextui-org/react";
import { useState } from "react";
import { createPost } from "services/post";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

export default function AddBlog({ closeHandler }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const submitHandler = async () => {
    const post = {
      title,
      description,
      content,
    };
    createPost(post).finally(() => {
      closeHandler(true);
      Swal.fire({
        icon: "success",
        title: "Entrada de blog creada",
        showConfirmButton: false,
        confirmButtonText: "Ok",
        showConfirmButton: true,
        confirmButtonColor: "#0f1114",
      }).then(() => {
        router.reload();
      });
    });
  };

  return (
    <Container className="flex flex-col items-center justify-center h-max w-full bg-lime-300/50 p-8 border-2 border-slate-900 rounded-xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Agregar Blog</h1>
      <div className="flex flex-col items-center justify-center w-full h-max p-12">
        <form className="flex flex-col items-center justify-center h-max w-full max-w-md p-6 space-y-4 rounded-md">
          <input
            type="text"
            placeholder="Título"
            className="w-full p-2 border-2 border-slate-900 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descripción"
            className="w-full p-2 border-2 border-slate-900 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Contenido"
            className="w-full p-2 border-2 border-slate-900 rounded-md"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            color={"suceess"}
            bordered
            borderWeight={0.5}
            className="w-full text-black mt-8 text-xl font-bold hover:scale-110 hover:text-lime-900 hover:bg-white"
            onPress={submitHandler}
          >
            Agregar
          </Button>
        </form>
      </div>
    </Container>
  );
}
