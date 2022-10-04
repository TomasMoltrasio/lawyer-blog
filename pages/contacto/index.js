import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto</title>
      </Head>

      {/* link to linkedin */}
      <a
        href="https://www.linkedin.com/in/germ%C3%A1n-gonz%C3%A1lez-campa%C3%B1a-0b1b3b1b3/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/linkedin.png"
          alt="linkedin"
          className="w-10 h-10 mx-auto mt-10"
        />
      </a>
    </>
  );
}
