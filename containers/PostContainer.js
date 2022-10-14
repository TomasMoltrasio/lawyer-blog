import CardPost from "components/CardPost";
import { Grid, Text, Pagination } from "@nextui-org/react";
import { useState } from "react";

export default function PostContainer({ posts }) {
  const [post, setPost] = useState(posts);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 8;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <Text
        h2
        size={30}
        className={"text-center text-6xl mt-2 font-bold text-gray-800"}
        showIn="sm"
      >
        Publicaciones
      </Text>
      <Text
        h2
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
        Aquí encontrará una serie de artículos propios y en coautoría,
        publicados en revistas especializadas.
      </Text>
      <Grid.Container gap={2} justify="center">
        {currentPosts.map((post) => (
          <Grid
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={`current-post-${post.number}`}
          >
            <CardPost post={post} />
          </Grid>
        ))}
      </Grid.Container>
      <Pagination
        color={"success"}
        total={Math.ceil(post.length / postsPerPage)}
        initialPage={1}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
