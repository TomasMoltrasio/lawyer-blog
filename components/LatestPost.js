import { Container, Text } from "@nextui-org/react";
import CardLatestPost from "./CardLatestPost";

export default function LatestPost({ posts }) {
  return (
    <>
      {posts?.length >= 3 && (
        <Container direction="column" justify="center">
          <Text h3 size={20} weight="bold">
            Últimas publicaciónes
          </Text>
          <Container className="flex flex-col w-full">
            <CardLatestPost posts={posts[0]} />
            <CardLatestPost posts={posts[1]} />
            <CardLatestPost posts={posts[2]} />
          </Container>
        </Container>
      )}
    </>
  );
}
