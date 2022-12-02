import Head from "next/head";
import BlogContainer from "containers/BlogContainer";
import { getAllPost } from "services/post";

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <BlogContainer posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const res = await getAllPost().then((res) => res);
  if (res === undefined) {
    res = [];
  }

  const data = res.reverse();

  return {
    props: {
      posts: data,
    },
    revalidate: 60 * 10,
  };
}
