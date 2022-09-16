import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import { Box, Text } from "../../components/Core";
import { device } from "../../utils";
import CryptoSlider from "../../components/CryptoSlider/CryptoSlider";

const TitleContainer = styled(Box)`
  position: relative;
  &:after {
    content: "";
    height: 1px;
    position: absolute;
    right: 0;
    top: 50%;
    width: 32%;
    background: ${({ theme }) => theme.colors.border};
    margin-top: 0.5px;
    display: none;

    @media ${device.md} {
      width: 40%;
      display: block;
    }
    @media ${device.lg} {
      width: 52%;
    }
    @media ${device.xl} {
      width: 60%;
    }
  }
`;

const IndexCrypto = ({ list }) => {
  return (
    <>
      {/* <!-- Clients Brands Area --> */}
      <Box pb={"30px"}>
        <Container>
          <TitleContainer mb={"40px"}>
            <Text fontSize="18px" as="h4" className="">
              Cours des principales cryptomonnaies{" "}
            </Text>
          </TitleContainer>
        </Container>
        <Container>
          <Box
            className="d-flex justify-content-center justify-content-lg-between
         align-items-center flex-wrap"
            mx="-32px"
          >
            <CryptoSlider list={list} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default IndexCrypto;
