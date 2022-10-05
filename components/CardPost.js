import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export default function CardPost({ post }) {
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

  const toPost = () => {
    window.open(url, "_blank");
  };

  const { title, publisher, url } = post;

  return (
    <div className="p-4 cursor-pointer hover:scale-110" onClick={toPost}>
      <Card css={{ w: "100%", h: "300px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text size={20} weight="bold" transform="uppercase" color="white">
              {title}
            </Text>
            <Text h3 color="white">
              {`Publicado en ${publisher}`}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={images[Math.floor(Math.random() * images.length)]}
            width="100%"
            height="100%"
            objectFit="cover"
            alt="Card example background"
            className="brightness-50"
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
            <Col>
              <Row justify="flex-end">
                <Button
                  auto
                  rounded
                  color="success"
                  onClick={() => {
                    window.open(url, "_blank");
                  }}
                >
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Ver más
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
