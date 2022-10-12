import { Text, User } from "@nextui-org/react";

export default function NetworkContact() {
  return (
    <div className="flex flex-col w-full border-2 border-slate-900 rounded-md">
      <div className="bg-emerald-900/50 p-4 w-full flex">
        <User src="tel-icon.png" squared zoomed size="xl" bordered>
          <Text size={20} className="text-center font-semibold" h2>
            (011) 15 6568 1418
          </Text>
          <User.Link
            href="tel:+5491165681418"
            className="font-bold text-black hover:text-lime-900"
          >
            Llamar
          </User.Link>
        </User>
      </div>
      <div className="bg-cyan-900/50 p-4 w-full flex">
        <User src="gmail-icon.png" squared zoomed size="xl" bordered>
          <Text size={20} className="text-center font-semibold" h2>
            gonzalez.campana@gmail.com
          </Text>

          <User.Link
            href="mailto:gonzalez.campana@gmail.com"
            className="font-bold text-black hover:text-lime-900"
          >
            Enviar correo
          </User.Link>
        </User>
      </div>
      <div className="bg-emerald-900/50 p-4">
        <User src="in-logo.png" squared zoomed size="xl" bordered>
          <Text size={20} className="text-center font-semibold" h2>
            @GermanGonzalezCampaña
          </Text>
          <User.Link
            href="https://www.linkedin.com/in/germán-gonzález-campaña-55586034/"
            className="font-bold text-black hover:text-lime-900"
          >
            Ir al perfil
          </User.Link>
        </User>
      </div>
      <div className="bg-cyan-900/50 p-4">
        <User src="wp-logo.png" squared zoomed size="xl" bordered>
          <Text size={20} className="text-center font-semibold" h2>
            (011) 15 6568 1418
          </Text>
          <User.Link
            href="https://wa.me/5491165681418"
            className="font-bold text-black hover:text-lime-900"
          >
            Enviar mensaje
          </User.Link>
        </User>
      </div>
      <div className="bg-emerald-900/50 p-4">
        <User src="twitter-logo.png" squared zoomed size="xl" bordered>
          <Text size={20} className="text-center font-semibold" h2>
            @GermanCampaña
          </Text>
          <User.Link
            href="https://twitter.com/GermanCampa%C3%B1a"
            className="font-bold text-black hover:text-lime-900"
          >
            Ir al perfil
          </User.Link>
        </User>
      </div>
    </div>
  );
}
