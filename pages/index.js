import HomeContainer from "../containers/HomeContainer";
import Head from "next/head";
import { getAllPost } from "services/post";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <HomeContainer posts={posts} />
    </>
  );
}

export async function getStaticProps(context) {
  const posts = await getAllPost().then((res) => res);
  const latestPost = posts?.reverse().slice(0, 3) || [];

  return {
    props: {
      posts: latestPost || [],
    },
  };
}
