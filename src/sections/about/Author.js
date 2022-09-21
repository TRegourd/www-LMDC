import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Span } from "../../components/Core";
import { device } from "../../utils";
import imgAuthor from "../../assets/image/jpeg/author.jpg";
import Markdown from "markdown-to-jsx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Author = styled(Box)`
  min-width: 271px;
  max-width: 271px;
  min-height: 271px;
  max-height: 271px;
  border-radius: 500px;
  overflow: hidden;
  margin-bottom: 30px;
  @media ${device.lg} {
    margin-bottom: 0;
  }
`;

const Fact = ({ content, images }) => {
  const image = getImage(
    images.find((el) => {
      return el.relativePath === content.authorImage;
    })?.childrenImageSharp[0]
  );
  return (
    <>
      {/* <!-- Fact section 1 --> */}

      <Container className="mb-5">
        <Row>
          <Col xs="12" className="mb-5">
            <div className="text-center">
              <Title>{content.authorTitle}</Title>
            </div>
          </Col>
          <Col lg="4" className="offset-lg-1 mb-4 mb-lg-0">
            <Author>
              <GatsbyImage
                image={image}
                alt="imageAuthor"
                className="img-fluid"
              />
            </Author>
          </Col>
          <Col lg="7" className="pr-lg-5">
            <div className="author-text">
              <Title variant="card" fontSize="24px">
                {content.authorName}
              </Title>
              <Markdown>{content.authorDesc}</Markdown>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Fact;
