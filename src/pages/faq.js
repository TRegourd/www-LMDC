import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box } from "../components/Core";
import { graphql } from "gatsby";
import Markdown from "markdown-to-jsx";

const NavStyled = styled(Nav)`
  border-radius: 10px;
  border: 1px solid #eae9f2;
  background-color: #f7f7fb;
  padding-top: 15px;
  padding-bottom: 15px;
  a {
    color: ${({ theme }) => theme.colors.dark} !important;
    &:hover,
    &:active,
    &:visited {
      color: ${({ theme }) => theme.colors.secondary} !important;
    }
  }
`;

const Faq = ({ data }) => {
  const categories = data?.markdownRemark.frontmatter.category;
  const title = data?.markdownRemark.frontmatter.title;
  const subtitle = data?.markdownRemark.frontmatter.subtitle;

  function uniqueQuestionsCategory(array) {
    var out = [];
    for (var i = 0, len = array.length; i < len; i++)
      if (out.indexOf(array[i].name) === -1) out.push(array[i].name);
    return out;
  }

  const questionsCategory = uniqueQuestionsCategory(categories);

  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="9">
                <Title variant="hero">{title}</Title>
                <Text>{subtitle}</Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="Général">
              <Row>
                <Col md="4" className="mb-5 mb-md-0">
                  <NavStyled className="flex-column mr-md-5">
                    {questionsCategory &&
                      questionsCategory.map((category) => {
                        return (
                          <Nav.Link eventKey={category} key={category}>
                            {category}
                          </Nav.Link>
                        );
                      })}
                  </NavStyled>
                </Col>
                <Col md="8">
                  {categories &&
                    categories.map((category) => {
                      return (
                        <Tab.Content key={category.name}>
                          {category.questions &&
                            category.questions.map((question) => {
                              return (
                                <Tab.Pane
                                  key={question.title}
                                  eventKey={category.name}
                                >
                                  <Box mb={4}>
                                    <Title
                                      variant="card"
                                      mb={3}
                                      fontSize="24px"
                                    >
                                      {question.title}
                                    </Title>
                                    <Markdown>{question.text}</Markdown>
                                  </Box>
                                </Tab.Pane>
                              );
                            })}
                        </Tab.Content>
                      );
                    })}
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Faq;

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/faq" } }) {
      frontmatter {
        title
        subtitle
        category {
          name
          questions {
            title
            text
          }
        }
      }
    }
  }
`;
