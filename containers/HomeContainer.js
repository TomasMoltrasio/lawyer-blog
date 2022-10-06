import CardHome from "../components/CardHome";
import AboutMe from "../components/AboutMe";
import LatestPost from "components/LatestPost";
import { Grid } from "@nextui-org/react";

export default function HomeContainer({ posts }) {
  return (
    <>
      <div>
        <CardHome />
      </div>
      <Grid.Container gap={2} justify="space-around">
        <Grid xs={12} md={8}>
          <AboutMe />
        </Grid>
        <Grid xs>
          <LatestPost posts={posts} />
        </Grid>
      </Grid.Container>
    </>
  );
}
