import { getAllPost, getPost } from "services/post";
import BlogIdContainer from "containers/BlogIdContainer";

export default function BlogWithId({ post }) {
  return (
    <div
      className="
        flex flex-col
        justify-start
        items-center
        w-full
        h-screen"
    >
      <BlogIdContainer post={post} />
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await getAllPost().then((res) => res);
  const paths = posts.map((post) => ({
    params: { id: post._id?.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const post = await getPost(id).then((res) => res);
  return {
    props: {
      post,
    },
  };
}
