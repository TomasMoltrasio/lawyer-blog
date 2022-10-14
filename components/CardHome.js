import Image from "next/image";

export default function CardHome() {
  return (
    <div className="flex flex-col items-center flex-start w-full h-full">
      <div className="flex flex-col w-full items-center justify-around bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-900 border-b-2 border-black p-6">
        <div className="relative w-60 h-60 md:w-72 md:h-72">
          <div className="absolute w-full h-full ring-offset-2 ring-4 ring-white ring-offset-slate-300 drop-shadow-2xl rounded-full hover:scale-110 transition ease-in-out duration-150 ">
            <Image
              src="/foto-german.jpg"
              alt="Foto de perfil de German"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col w-full md:w-3/4 lg:w-3/4 xl:w-3/4">
          <h1 className="mt-4 text-2xl font-semibold text-center text-white md:text-7xl lg:text-7xl xl:text-7xl">
            Germán González Campaña
          </h1>
          <p className="text-base text-center font-semibold mt-2 text-slate-400 md:text-3xl">
            Abogado constitucionalista
          </p>
        </div>
      </div>
    </div>
  );
}
