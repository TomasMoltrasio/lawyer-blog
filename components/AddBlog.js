import { Container, Button, Input, Textarea, Spacer } from "@nextui-org/react";
import { useState } from "react";
import { createPost } from "services/post";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

export default function AddBlog({ closeHandler }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const submitHandler = async () => {
    const post = {
      title,
      description,
      content,
    };
    createPost(post).finally(() => {
      closeHandler(true);
      Swal.fire({
        icon: "success",
        title: "Entrada de blog creada",
        showConfirmButton: false,
        confirmButtonText: "Ok",
        showConfirmButton: true,
        confirmButtonColor: "#0f1114",
      }).then(() => {
        router.reload();
      });
    });
  };

  return (
    <Container className="flex flex-col items-center justify-center h-max w-full bg-lime-300/50 p-8 border-2 border-slate-900 rounded-xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Agregar Blog</h1>
      <div className="flex flex-col items-center justify-center w-full h-max p-12">
        <form className="flex flex-col items-center justify-center h-max w-full max-w-md p-6 space-y-4 rounded-md">
          <Input
            clearable
            underlined
            labelPlaceholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Spacer y={1} />
          <Input
            clearable
            underlined
            labelPlaceholder="Descripción"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Spacer y={1} />
          <Textarea
            clearable
            underlined
            labelPlaceholder="Contenido"
            onChange={(e) => setContent(e.target.value)}
          />
          <Spacer y={1} />
          <Button
            color={"suceess"}
            bordered
            borderWeight={0.5}
            className="w-full text-black mt-8"
            onPress={submitHandler}
          >
            Agregar
          </Button>
        </form>
      </div>
    </Container>
  );
}
