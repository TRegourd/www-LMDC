import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import imgL1FeatureOval from "../../assets/image/png/l1-feature-oval.png";
import imgL1FeatureCurve from "../../assets/image/svg/l1-curve-feature.svg";
import { StaticImage } from "gatsby-plugin-image";

const ShapeTopRight = styled(Box)`
  position: absolute;
  top: 0;
  right: 0px;
`;

const ShapeBottmRight = styled(Box)`
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  img {
    min-width: 100%;
  }
`;

const CryptoIcon = styled.img`
  max-width: 64px;
`;

const CryptoCard = ({ color = "primary", icon, title, children, ...rest }) => (
  <Box bg="light" py="25px" px="30px" borderRadius={10} mb={4} {...rest}>
    <Box
      size={69}
      borderRadius="50%"
      color={color}
      fontSize="28px"
      className="d-flex justify-content-center align-items-center"
      css={`
        background-color: ${({ theme, color }) =>
          rgba(theme.colors[color], 0.1)};
      `}
    >
      <CryptoIcon src={icon} alt={title} />
    </Box>
    <div>
      <Text
        color="heading"
        as="h3"
        fontSize={4}
        fontWeight={500}
        letterSpacing={-0.75}
        my={3}
      >
        {title}
      </Text>
      <Text fontSize={2} lineHeight={1.75}>
        {children}
      </Text>
    </div>
  </Box>
);

const Crypto = ({ list }) => {
  console.log(list);
  return (
    <>
      {/* <!-- Feature section --> */}
      <Section bg="secondary" className="position-relative">
        <ShapeTopRight
          data-aos="fade-left"
          data-aos-duration="750"
          data-aos-once="true"
        >
          <img src={imgL1FeatureOval} alt="" className="img-fluid" />
        </ShapeTopRight>
        <ShapeBottmRight>
          <img src={imgL1FeatureCurve} alt="" className="img-fluid" />
        </ShapeBottmRight>
        <Container>
          <Col lg="12" className="pl-lg-5 mb-3 order-lg-2">
            <div className="feature-content section-title">
              <Title color="light">Build a perfect landing page.</Title>
              <Text color="light" opacity={0.7} mb={4}>
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without coding.
              </Text>

              <Button variant="outline">Check all features</Button>
            </div>
          </Col>
          <Row className="align-items-center">
            <Col lg="12" className="order-lg-1 mt-5 mt-lg-0">
              <Row>
                {list &&
                  list.map((crypto) => {
                    console.log(crypto.image);
                    return (
                      <Col md="3" key={crypto.id}>
                        <CryptoCard
                          color="primary"
                          icon={crypto.image}
                          title={crypto.name}
                        >
                          {crypto.current_price} €
                        </CryptoCard>
                      </Col>
                    );
                  })}
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Crypto;
