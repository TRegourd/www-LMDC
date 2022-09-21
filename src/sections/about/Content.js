import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgContent1 from "../../assets/image/jpeg/easy-image-2-1.jpg";
import imgContent2 from "../../assets/image/jpeg/easy-image-2-2.jpg";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ContentImg = styled(Box)`
  box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  overflow: hidden;
  max-height: 515px;
`;

const Content = ({ content, images }) => {
  const image1 = getImage(
    images.find((el) => {
      return el.relativePath === content.descImage1;
    })?.childrenImageSharp[0]
  );
  const image2 = getImage(
    images.find((el) => {
      return el.relativePath === content.descImage2;
    })?.childrenImageSharp[0]
  );

  return (
    <>
      <Section>
        <Container>
          <Row className="justify-content-center pb-4">
            <Col lg="6">
              <Title variant="hero">{content.descTitle}</Title>
            </Col>
            <Col lg="6" className="pl-lg-5">
              <Text>{content.descSubtitle}</Text>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg="4" sm="5" className="mb-4 ">
              <ContentImg>
                <GatsbyImage
                  image={image1}
                  alt="imageAbout1"
                  className="img-fluid"
                />
              </ContentImg>
            </Col>
            <Col lg="8" sm="7" className="mb-4">
              <ContentImg>
                <GatsbyImage
                  image={image2}
                  alt="imageAbout2"
                  className="img-fluid"
                />
              </ContentImg>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Content;
