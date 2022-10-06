import CardBlog from "components/CardBlog";
import { Grid, Text, Modal, Button, Pagination } from "@nextui-org/react";
import AddBlog from "components/AddBlog";
import { useState } from "react";

export default function BlogContainer({ posts }) {
  const [visible, setVisible] = useState(false);
  const [post, setPost] = useState(posts);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 8;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <Text
        h2
        size={30}
        className={"text-center text-6xl font-bold text-gray-800"}
        showIn="sm"
      >
        Blog
      </Text>
      <Text
        className="
            text-center
        text-xl
        font-bold
        text-gray-900
        mb-4
        mt-4
          "
      >
        Aquí encontraras los últimos articulos de nuestro blog, dónde
        compartimos conocimiento y experiencias.
      </Text>
      <Button
        className="relative z-10 w-1/2 max-w-md hover:scale-110 transform transition duration-500 ease-in-out"
        color="success"
        flat
        auto
        bordered
        onClick={() => setVisible(true)}
      >
        Escribir un nuevo blog
      </Button>
      <Modal open={visible} onClose={closeHandler} closeButton blur>
        <AddBlog closeHandler={closeHandler} />
      </Modal>

      <Grid.Container gap={2} className="mt-8" justify="center">
        {currentPosts.map((post) => (
          <Grid xs={6} sm={6} md={4} lg={3} key={`blog-id-${post.id}`}>
            <CardBlog post={post} />
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
