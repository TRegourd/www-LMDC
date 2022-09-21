import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Content from "../sections/about/Content";
import CTA from "../sections/about/CTA";
import Fact from "../sections/about/Author";
import { graphql } from "gatsby";

const About = ({ data }) => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero content={data.about.frontmatter?.aboutHeader}></Hero>
        <Content
          content={data.about.frontmatter?.aboutDesc}
          images={data?.images.nodes}
        />
        <Fact
          content={data.about.frontmatter?.aboutAuthor}
          images={data?.images.nodes}
        />
        <CTA content={data.about.frontmatter?.aboutCTA} />
      </PageWrapper>
    </>
  );
};
export default About;

export const query = graphql`
  query {
    about: markdownRemark(fields: { slug: { eq: "/about" } }) {
      frontmatter {
        aboutHeader {
          title
          subtitle
        }
        aboutDesc {
          descTitle
          descSubtitle
          descImage1
          descImage2
        }
        aboutAuthor {
          authorTitle
          authorImage
          authorName
          authorDesc
        }
        aboutCTA {
          CTATitle
          CTASubtitle
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
