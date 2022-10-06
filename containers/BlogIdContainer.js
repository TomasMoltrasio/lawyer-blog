import HeadBlog from "components/HeadBlog";
import BodyBlog from "components/BodyBlog";

export default function BlogIdContainer({ post }) {
  return (
    <div
      className="
        flex flex-col
        justify-start
        items-center
        w-full
        h-screen"
    >
      <HeadBlog post={post} />
      <BodyBlog post={post} />
    </div>
  );
}
