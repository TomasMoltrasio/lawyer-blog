import Head from "next/head";
import PostContainer from "containers/PostContainer";
import fs from "fs";

export default function Publicaciones({ data }) {
  return (
    <>
      <Head>
        <title>Publicaciones</title>
      </Head>
      <PostContainer posts={data} />
    </>
  );
}

export async function getStaticProps() {
  const data = fs.readFileSync("./pdf/pdfs.json", "utf8");
  const posts = JSON.parse(data);

  return {
    props: {
      data: posts,
    },
  };
}
