import { Container, Text } from "@nextui-org/react";
import CardLatestPost from "./CardLatestPost";

export default function LatestPost() {
  return (
    <Container direction="column" justify="center">
      <Text h3 size={20} weight="bold">
        Últimas publicaciónes
      </Text>
      <Container css={{ mt: 16 }}>
        <CardLatestPost />
        <CardLatestPost />
        <CardLatestPost />
      </Container>
    </Container>
  );
}
