import { Card, Col, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import NextLink from "next/link";

export default function CardLatestPost({ posts }) {
  const router = useRouter();

  const { title, _id } = posts;
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

  return (
    <NextLink href={`/blog/${_id}`}>
      <div className="m-2 cursor-pointer hover:-translate-y-1 hover:scale-110 transition-all duration-300">
        <Card css={{ w: "100%", h: "200px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={20} weight="bold" transform="uppercase" color="#FFF">
                Nuevo
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={images[Math.floor(Math.random() * images.length)]}
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Imagen de libros"
              className="brightness-50"
              loading="lazy"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Text className="text-white" weight="semibold" size={20}>
                {title}
              </Text>
            </Row>
          </Card.Footer>
        </Card>
      </div>
    </NextLink>
  );
}
