import { Card, Text, Button, Row, Col } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function CardBlog({ post }) {
  const { title, description, id, date } = post;
  const images = [
    "images-fondo/libro-2.jpg",
    "images-fondo/libro-3.jpg",
    "images-fondo/libro-4.jpg",
    "images-fondo/libro-5.jpg",
    "images-fondo/libro-6.jpg",
    "images-fondo/libro-7.jpg",
    "images-fondo/libro-8.jpg",
    "images-fondo/libro-9.jpg",
    "images-fondo/libros.jpg",
  ];
  const router = useRouter();

  const toBlog = () => {
    router.push(`/blog/${id}`);
  };

  return (
    <div
      onClick={toBlog}
      className="cursor-pointer hover:-translate-y-1 hover:scale-105 transition-all duration-300 w-11/12"
    >
      <Card className="h-52 mx-10">
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text
              size={20}
              weight="bold"
              transform="uppercase"
              color="white"
              className="text-3xl"
            >
              {title}
            </Text>
            <Text h3 color="white" className="text-xl mt-8">
              {description}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={images[Math.floor(Math.random() * images.length)]}
            objectFit="cover"
            width="100%"
            height="100%"
            alt="imagen de libros"
            className="brightness-50"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#0f111466",
            borderTop: "$borderWeights$light solid $gray800",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Row>
                <Col>
                  <Text color="#d1d1d1" size={20} className="font-bold">
                    {date.split("T")[0].split("-").reverse().join("/")}
                  </Text>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button auto rounded color="success" onClick={toBlog}>
                  <Text
                    css={{ color: "$success" }}
                    size={15}
                    weight="bold"
                    transform="uppercase"
                  >
                    ir al post
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
}