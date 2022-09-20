import React, { useEffect, useState } from "react";
import Hero from "../sections/landing1/Hero";
import IndexCrypto from "../sections/landing1/IndexCrypto";
import Content1 from "../sections/landing1/Content1";
import Content2 from "../sections/landing1/Content2";
import Testimonial from "../sections/landing1/Testimonial";
import CTA from "../sections/landing1/CTA";
import PageWrapper from "../components/PageWrapper";
import { graphql, Link } from "gatsby";

const IndexPage = ({ data }) => {
  const [crypto, setCrypto] = useState();
  const images = data?.images.nodes;

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=false
    `)
      .then((response) => response.json())
      .then((resuultData) => {
        setCrypto(resuultData);
      });
  }, []);

  return (
    <>
      <PageWrapper footerDark>
        <Hero content={data?.hero.frontmatter} images={images} />
        <Link to="https://www.coingecko.com/" target="_blank">
          <IndexCrypto list={crypto} />
        </Link>
        <Content1 />
        <Content2 />
        <Testimonial />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;

export const query = graphql`
  query {
    hero: markdownRemark(fields: { slug: { eq: "/hero" } }) {
      frontmatter {
        title
        subtitle
        hero_img
        topCard
        botCard
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
