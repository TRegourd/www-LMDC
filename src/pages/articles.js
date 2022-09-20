import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text } from "../components/Core";

import BlogList from "../sections/blog/BlogListSidebar";
import Sidebar from "../sections/blog/Sidebar";
import { graphql } from "gatsby";

const Articles = ({ data }) => {
  const title = data?.markdownRemark.frontmatter.title;
  const subtitle = data?.markdownRemark.frontmatter.subtitle;
  const list = data?.markdownRemark.frontmatter.category;
  const images = data?.images.nodes;

  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Title variant="hero">{title}</Title>
                <Text>{subtitle}</Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container>
            <Row>
              <Col lg="8" className="order-lg-2 mb-5">
                <BlogList list={list} images={images} />
              </Col>
              <Col lg="4" className="order-lg-1">
                <Sidebar list={list} />
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Articles;

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/articles" } }) {
      frontmatter {
        title
        subtitle
        category {
          name
          articles {
            title
            text
            thumbnail
            date
            description
            author
            tags {
              tag
            }
          }
        }
      }
    }
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
