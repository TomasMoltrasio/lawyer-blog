import { Image, Grid } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="bg-emerald-900/50 h-max w-full mt-10 shadow md:flex md:items-center md:justify-between">
      <Grid.Container justify="space-between" className="w-full p-2 px-6">
        <Grid xs={4} md={4} lg={4} className="w-full">
          <span className="text-xs font-semibold text-black md:text-sm lg:text-sm xl:text-sm">
            © 2022 Germán González Campaña. Todos los derechos reservados.
          </span>
        </Grid>
        <Grid xs={4} md={4} lg={4} justify="center" className="w-full">
          <span className="text-xs font-semibold text-black md:text-sm lg:text-sm xl:text-sm">
            Developed by{" "}
            <a
              href="https://github.com/TomasMoltrasio"
              target="_blank"
              className="text-base"
            >
              Tomás Moltrasio
            </a>
          </span>
        </Grid>
        <Grid
          xs={4}
          md={4}
          lg={4}
          className="w-full flex-wrap"
          justify="flex-end"
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/germ%C3%A1n-gonz%C3%A1lez-campa%C3%B1a-4b1b3b1b9/"
          >
            <Image
              src="/in-logo.png"
              alt="Linkedin"
              width={30}
              height={30}
              className="rounded-full ml-4 hover:scale-110"
              loading="lazy"
            />
          </a>
          <a target="_blank" href="tel:+5491165681418">
            <Image
              src="/tel-icon.png"
              alt="Teléfono"
              width={30}
              height={30}
              className="rounded-full ml-4 hover:scale-110"
              loading="lazy"
            />
          </a>
          <a target="_blank" href="mailto:gonzalez.campana@gmail.com">
            <Image
              src="/gmail-icon.png"
              alt="Gmail"
              width={30}
              height={30}
              className="rounded-full ml-4 hover:scale-110"
              loading="lazy"
            />
          </a>
          <a target="_blank" href="https://wa.me/5491165681418">
            <Image
              src="/wp-logo.png"
              alt="Whatsapp"
              width={30}
              height={30}
              className="rounded-full ml-4 hover:scale-110"
              loading="lazy"
            />
          </a>
        </Grid>
      </Grid.Container>
    </footer>
  );
}
