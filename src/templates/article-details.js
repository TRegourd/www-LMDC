import React from "react";
import { graphql, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box } from "../components/Core";

import PostDetails from "../sections/blog/PostDetails";
import Comments from "../sections/blog/Comments";
import Sidebar from "../sections/blog/Sidebar";
import dayjs from "dayjs";
import { getImage } from "gatsby-plugin-image";

const ArticleDetails = ({ pageContext, data }) => {
  const { content } = pageContext;
  const images = data?.images.nodes;

  const articleImage = getImage(
    images.find((el) => {
      return el.relativePath === content.thumbnail;
    })?.childrenImageSharp[0]
  );

  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="12">
                <Title variant="hero">{content.title}</Title>
                <Box className="d-flex justify-content-center">
                  <Text mr={3}>
                    {dayjs(content.date).format("DD MMM, YYYY")}
                  </Text>

                  <Text>{content.author}</Text>
                </Box>
              </Col>
            </Row>
          </Container>
        </Section>

        <Container className="pt-5">
          <Row>
            <Col lg="12" className="mb-5">
              <PostDetails
                image={articleImage}
                text={content.text}
                tags={content.tags}
              />
            </Col>
          </Row>
        </Container>
      </PageWrapper>
    </>
  );
};
export default ArticleDetails;

export const query = graphql`
  query {
    images: allFile(
      filter: {
        relativeDirectory: { eq: "" }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
    ) {
      nodes {
        relativePath
        childrenImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;
