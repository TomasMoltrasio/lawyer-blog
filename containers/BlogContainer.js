import CardBlog from "components/CardBlog";
import {
  Grid,
  Text,
  Modal,
  Button,
  Pagination,
  Input,
} from "@nextui-org/react";
import AddBlog from "components/AddBlog";
import { useState } from "react";
import { getPostByTitle } from "services/post";
import Link from "next/link";
import { SearchIcon } from "public/SearchIcon";
import { IoAddCircleOutline } from "react-icons/io5";

export default function BlogContainer({ posts }) {
  const [visible, setVisible] = useState(false);
  const [post, setPost] = useState(posts);
  const [title, setTitle] = useState("");
  const [postSearch, setPostSearch] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 4;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

  const closeHandler = () => {
    setVisible(false);
  };

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setTitle("");
    } else {
      e.preventDefault();
      const titulo = e.target.value;
      setTitle(e.target.value);
      getPostByTitle(titulo).then((res) => {
        setPostSearch(res);
      });
    }
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
        font-normal
        text-gray-900
        mb-4
        mt-4
          "
      >
        Aquí encontraras los últimos articulos de mi blog, dónde comparto
        conocimiento y experiencias.
      </Text>
      <Grid.Container gap={2} justify="space-between" className="w-full">
        <Grid xs={6} md={6} lg={4} justify="center" className="w-full">
          <Button
            className="relative z-10 w-1/2 max-w-md hover:scale-105"
            color="success"
            flat
            auto
            bordered
            onClick={() => setVisible(true)}
          >
            <IoAddCircleOutline size={25} className="mr-2" />
            Nuevo blog
          </Button>
          <Modal open={visible} onClose={closeHandler} closeButton blur>
            <AddBlog closeHandler={closeHandler} />
          </Modal>
        </Grid>
        <Grid xs={6} md={6} lg={4} justify="flex-end" className="w-full">
          <Input
            clearable
            contentLeft={
              <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
            }
            contentLeftStyling={false}
            css={{
              w: "100%",
              "@xsMax": {
                mw: "300px",
              },
              "& .nextui-input-content--left": {
                h: "100%",
                ml: "$4",
                dflex: "center",
              },
            }}
            placeholder="Buscar por título..."
            onChange={(e) => handleSearch(e)}
            className="border-2 border-emerald-500"
          />
        </Grid>
      </Grid.Container>

      <Grid.Container gap={2} className="mt-8 w-full" justify="space-between">
        {title.length > 0 ? (
          <>
            {postSearch.length > 0 ? (
              postSearch.map((post) => (
                <Grid xs={12} md={6} lg={6} className="w-full">
                  <CardBlog key={`card-blog-${post.id}`} post={post} />)
                </Grid>
              ))
            ) : (
              <Grid xs={12} md={12} lg={12} className="w-full" justify="center">
                <Text className="text-center text-xl font-semibold text-gray-900">
                  No se encontraron resultados, intenta con otro título.
                </Text>
              </Grid>
            )}
          </>
        ) : (
          <>
            {currentPosts.map((post) => (
              <Grid xs={12} md={6} lg={6} className="w-full">
                <CardBlog key={`current-blog-${post.id}`} post={post} />
              </Grid>
            ))}
          </>
        )}
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
