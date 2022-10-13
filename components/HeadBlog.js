import Head from "next/head";
import { Grid, Text, Col, Row, Button } from "@nextui-org/react";
import { deletePost } from "services/post";
import Sweet from "sweetalert2";
import { useRouter } from "next/router";
import { MdDelete } from "react-icons/md";

export default function HeadBlog({ post }) {
  const { title, _id } = post;
  const router = useRouter();
  const postDelete = "Post deleted";

  const handleDelete = () => {
    Sweet.fire({
      title: "¿Estas seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deletePost(_id).then((res) => res);
        Sweet.fire("Eliminado", postDelete, "success");
        router.push("/blog");
      }
    });
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Grid.Container
        className="bg-emerald-900/50 p-4 rounded-lg shadow-lg border-b-2 border-b-black mt-0"
        gap={2}
        justify="space-around"
      >
        <Grid xs={12} md={8} justify="center">
          <Text
            h2
            size={40}
            className={"text-center text-6xl font-bold text-gray-800"}
          >
            {title}
          </Text>
        </Grid>
        <Grid justify="flex-end" alignItems="flex-end">
          <Button
            className="relative z-10 w-1/2 max-w-md hover:scale-110 transform transition duration-500 ease-in-out"
            color="error"
            flat
            auto
            bordered
            onClick={handleDelete}
          >
            <MdDelete size={20} />
          </Button>
        </Grid>
      </Grid.Container>
    </>
  );
}
