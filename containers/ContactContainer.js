import FormContact from "components/FormContact";
import NetworkContact from "components/NetworkContact";
import { Grid, Text } from "@nextui-org/react";

export default function ContactContainer() {
  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-full">
      <Text
        h2
        size={30}
        className={"text-center text-6xl mt-2 font-bold text-gray-800"}
        showIn="sm"
      >
        Contacto
      </Text>
      <Text
        className="
            text-center
        text-xl
        font-normal
        text-gray-900
        mb-4
        mt-4
        sm:px-6
          "
      >
        Si tienes alguna duda o quieres contactarnos, puedes hacerlo a través de
        este formulario o a través de nuestras redes sociales.
      </Text>
      <Grid.Container gap={2} justify="center">
        <Grid
          xs={12}
          md={12}
          lg={6}
          className="flex flex-col items-center justify-start h-full"
        >
          <FormContact />
        </Grid>
        <Grid
          xs={12}
          md={12}
          lg={6}
          className="flex flex-col items-center justify-start h-full"
        >
          <NetworkContact />
        </Grid>
      </Grid.Container>
    </div>
  );
}
