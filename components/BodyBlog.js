import { Container, Row, Col, Text } from "@nextui-org/react";

export default function BodyBlog({ post }) {
  return (
    <Container justify="flex-start" className="pt-8" fluid>
      <Row>
        <Col>
          <Text
            h2
            className={
              "text-start text-xl font-medium first-letter:uppercase text-gray-800"
            }
          >
            {post.content}
          </Text>
        </Col>
      </Row>
    </Container>
  );
}
