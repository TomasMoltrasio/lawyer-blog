import Head from "next/head";
import { User, Grid, Text } from "@nextui-org/react";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto</title>
      </Head>
      <Grid.Container
        alignItems="center"
        direction="column"
        gap={3}
        justify="flex-start"
        className="m-0 p-0"
      >
        <Grid xs={12} md={12} lg={12} className="flex flex-col items-center">
          <Text h2 size={30} className="text-center">
            Contacto
          </Text>
          <Text p className="text-center">
            Si querés contactar conmigo, podés hacerlo a través de cualquiera de
            los siguientes medios:
          </Text>
        </Grid>
        <Grid className="flex flex-row items-center justify-center w-full h-1/ bg-lime-200">
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
        </Grid>
        <Grid className="flex flex-row items-center justify-center w-full h-1/2  bg-slate-400">
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
        </Grid>
        <Grid className="flex flex-row items-center justify-center w-full h-1/2  bg-lime-200">
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
        </Grid>
        <Grid className="flex flex-row items-center justify-center w-full h-1/2  bg-slate-400">
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
        </Grid>
        <Grid className="flex flex-row items-center justify-center w-full h-1/2  bg-lime-200">
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
        </Grid>
      </Grid.Container>
    </>
  );
}
