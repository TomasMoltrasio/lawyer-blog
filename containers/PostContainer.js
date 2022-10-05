import CardPost from "components/CardPost";
import { Grid, Text, Pagination } from "@nextui-org/react";
import { useState } from "react";

export default function PostContainer({ posts }) {
  const [post, setPost] = useState(posts);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 4;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <Text
        h2
        size={30}
        showIn="xs"
        className="text-center
        text-9xl
        font-bold
        text-gray-900
        dark:text-gray-100
        mb-4"
      >
        Publicaciones
      </Text>
      <Text
        h2
        className=" 
        text-center
        text-4xl
        font-bold
        text-gray-900
        dark:text-gray-100
        mb-4
        mt-4
        
      "
      >
        Aquí encontrará una serie de artículos propios y en coautoría,
        publicados en los últimos años en la revista jurídica La Ley.
      </Text>
      <Grid.Container gap={2} justify="center">
        {currentPosts.map((post) => (
          <Grid xs={6} sm={6} md={4} lg={3} key={post.number}>
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
