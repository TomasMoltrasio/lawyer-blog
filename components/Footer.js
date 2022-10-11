import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 bg-emerald-900/50 h-10 w-full mt-10 rounded-tr-lg rounded-tl-lg shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-black sm:text-center">
        © 2022 Germán González Campaña. Todos los derechos reservados.
      </span>
      <ul className="flex flex-row justify-center items-center text-sm text-black sm:mt-0">
        <li>
          <a
            href="https://github.com/TomasMoltrasio"
            className="hover:underline mr-4"
            target={"_blank"}
          >
            Desarollador
          </a>
        </li>
        <li>
          <Link href="/contacto">
            <a className="hover:underline mr-4">Contacto</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
