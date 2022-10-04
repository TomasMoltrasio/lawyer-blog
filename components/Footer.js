import { Grid, Col, Row, Text } from "@nextui-org/react";

export default function Footer() {
  return (
    <Grid.Container
      className="bg-lime-100/50 mt-10 border-2 border-t-slate-900 p-0"
      justify="space-between"
      direction="row"
    >
      <Grid xs={4} justify="flex-start">
        <Text h4 size={12} weight="semibold">
          German Gonzalez Campaña@2022
        </Text>
      </Grid>
      <Grid xs={4} justify="center">
        <Text h4 size={12} weight="semibold">
          Powered by Next.js
        </Text>
      </Grid>
      <Grid xs={4} justify="flex-end">
        <Text h6 size={12} weight="semibold">
          Developed by{" "}
          <a href="https://github.com/TomasMoltrasio" target="_BLANK">
            Tomas Moltrasio
          </a>
        </Text>
      </Grid>
    </Grid.Container>
  );
}
