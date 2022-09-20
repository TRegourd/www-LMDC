import React from "react";
import { Link } from "gatsby";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Section from "../components/Section";
import PageWrapper from "../components/PageWrapper";

import imgIcon from "../assets/image/png/thumbs-shape.png";
import { Title, Text } from "../components/Core";

const ContentIcon = styled.div`
  width: 118px;
  height: 118px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 500px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`;

const ButtonStyled = styled.button`
  min-width: 250px;
  min-height: 60px;
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 21px;
  font-weight: 500;
  letter-spacing: -0.66px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  box-shadow: none;
  outline: none;
  padding-left: 20px;
  padding-right: 20px;
  transition: 0.4s;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    box-shadow: none;
    outline: none;
  }
`;

const NotFoundPage = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <div className="pt-5"></div>
          <Container>
            <div className="text-center">
              <ContentIcon>
                <img src={imgIcon} alt="" className="img-fluid" />
              </ContentIcon>
              <div>
                <Title variant="hero">Merci</Title>
                <Text>
                  Votre message a bien été envoyé,
                  <br className="d-none d-md-block" /> Nous y repondrons au plus
                  vite!
                </Text>
              </div>
              <div className="mt-5">
                <Link to="/">
                  <ButtonStyled>Retour à l'accueil</ButtonStyled>
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};

export default NotFoundPage;
