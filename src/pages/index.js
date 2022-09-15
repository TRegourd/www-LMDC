import React, { useEffect, useState } from "react";
import Hero from "../sections/landing1/Hero";
import Clients from "../sections/landing1/Clients";
import Feature from "../sections/landing1/Feature";
import Content1 from "../sections/landing1/Content1";
import Content2 from "../sections/landing1/Content2";
import Testimonial from "../sections/landing1/Testimonial";
import CTA from "../sections/landing1/CTA";
import PageWrapper from "../components/PageWrapper";
import Crypto from "../sections/landing1/Crypto";

const IndexPage = () => {
  const [crypto, setCrypto] = useState();

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=12&page=1&sparkline=false
    `)
      .then((response) => response.json())
      .then((resuultData) => {
        setCrypto(resuultData);
      });
  }, []);

  return (
    <>
      <PageWrapper footerDark>
        <Hero />
        <Clients />
        <Feature />
        <Crypto list={crypto} />
        <Content1 />
        <Content2 />
        <Testimonial />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
