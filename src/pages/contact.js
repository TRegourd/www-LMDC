import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Input } from "../components/Core";

import PageWrapper from "../components/PageWrapper";
import { device } from "../utils";
import { graphql } from "gatsby";

const FormStyled = styled.form``;

const WidgetWrapper = styled(Box)`
  border-radius: 10px;
  background-color: #f7f7fb;
  padding-top: 80px;
  padding-bottom: 30px;
  padding-left: 50px;
  padding-right: 50px;
  @media ${device.lg} {
    padding-left: 140px;
    padding-right: 150px;
  }
  @media ${device.xl} {
    padding-left: 150px;
    padding-right: 150px;
  }
`;

const ContactDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contact = ({ data }) => {
  console.log(data);

  const { title, subtitle, phone, email } = data?.markdownRemark?.frontmatter;

  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <div className="banner-content">
                  <Title variant="hero">{title}</Title>
                  <Text>{subtitle}</Text>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center mt-5 pt-lg-5">
              <Col xl="10">
                <WidgetWrapper>
                  <Row>
                    <Col sm="6">
                      <Box className="mb-5">
                        <ContactDetailWrapper>
                          <Title variant="card" fontSize="24px">
                            <i className="fas fa-phone"></i> Téléphone
                          </Title>
                          <Text>{phone}</Text>
                        </ContactDetailWrapper>
                      </Box>
                    </Col>
                    <Col sm="6">
                      <Box className="mb-5">
                        <ContactDetailWrapper>
                          <Title variant="card" fontSize="24px">
                            <i className="fas fa-mail-bulk"></i> Email
                          </Title>
                          <Text>{email}</Text>
                        </ContactDetailWrapper>
                      </Box>
                    </Col>
                  </Row>
                </WidgetWrapper>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={6} className="order-lg-1 pt-5 mt-4">
                <div>
                  <Title
                    variant="card"
                    fontSize="24px"
                    className="mb-5 text-center"
                  >
                    Nous envoyer un message
                  </Title>
                  <FormStyled
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    {/* You still need to add the hidden input with the form name to your JSX form */}
                    <input type="hidden" name="form-name" value="contact" />
                    <Box mb={4}>
                      <Title
                        variant="card"
                        fontSize="18px"
                        as="label"
                        htmlFor="nameput"
                      >
                        Nom
                      </Title>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        id="nameput"
                        name="name"
                        required
                      />
                    </Box>
                    <Box mb={4}>
                      <Title
                        variant="card"
                        fontSize="18px"
                        as="label"
                        htmlFor="emailput"
                      >
                        Email
                      </Title>
                      <Input
                        type="email"
                        placeholder="john@doe.com"
                        id="emailput"
                        name="email"
                        required
                      />
                    </Box>

                    <Box mb={4}>
                      <Title
                        variant="card"
                        fontSize="18px"
                        as="label"
                        htmlFor="messageput"
                      >
                        Message
                      </Title>
                      <Input
                        type="text"
                        as="textarea"
                        placeholder="Votre message"
                        rows={4}
                        id="messageput"
                        name="message"
                        required
                      />
                    </Box>

                    <Button width="100%" type="submit" borderRadius={10}>
                      Envoyer
                    </Button>
                  </FormStyled>
                </div>
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Contact;

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/contact" } }) {
      frontmatter {
        title
        subtitle
        email
        phone
      }
    }
  }
`;
