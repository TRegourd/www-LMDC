import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

import { Title, Box, Text } from "../Core";
import { breakpoints } from "../../utils";

const SliderStyled = styled(Slider)`
  .slick-dots {
    position: relative;
    margin-top: 10px;
    margin-bottom: 10px;
    display: none !important;
    li {
      font-size: 0;
      width: 17px;
      height: 8px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.shadow};
      margin-left: 5px;
      margin-right: 5px;
      transition: 0.5s;
      &.slick-active {
        width: 45px;
        height: 8px;
        border-radius: 4px;
        background-color: ${({ theme }) => theme.colors.secondary};
      }
      button {
        width: 100%;
        height: 100%;
        &:before {
          content: none;
        }
      }
    }
  }
`;
const CryptoIcon = styled.img`
  max-width: 64px;
  padding-right: 10px;
`;

const ContentCard = ({ crypto, children, ...rest }) => (
  <Box
    bg="light"
    p="30px"
    mx="20px"
    borderRadius={10}
    {...rest}
    css={`
      &:focus {
        outline: none;
      }
    `}
  >
    <Text color="dark" mb={4}>
      {children}
    </Text>
    <Box className={`d-flex justify-content-between`}>
      <Box
        size={69}
        borderRadius="50%"
        fontSize="28px"
        className="d-flex justify-content-center align-items-center"
      >
        <CryptoIcon
          src={crypto.image}
          alt={crypto.name}
          className="img-fluid"
        />
      </Box>
      <div className="flex-grow-1">
        <Title variant="card" mb={0}>
          {crypto.name}
        </Title>
        <Text fontSize={2}>{crypto.current_price} €</Text>
      </div>
    </Box>
  </Box>
);

const CryptoSlider = ({ list }) => {
  const slickSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: breakpoints.md,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col lg="11">
            <SliderStyled {...slickSettings}>
              {list &&
                list.map((crypto) => {
                  return (
                    <Box
                      key={crypto.id}
                      css={`
                        &:focus {
                          outline: none;
                        }
                      `}
                    >
                      <ContentCard crypto={crypto}></ContentCard>
                    </Box>
                  );
                })}
            </SliderStyled>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CryptoSlider;
