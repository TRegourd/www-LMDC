import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Title, Box, Text, Span } from "../Core";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Card = styled(Box)`
  border-radius: 10px 10px;
  border: 1px solid #eae9f2;
  transition: 0.4s;
  overflow: hidden;

  &:hover {
    box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  }
`;

const CardText = styled(Box)`
  padding: 30px;
`;

const TitleStyled = styled(Title)`
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const PostCard = ({
  img,
  preTitle,
  title,
  link,
  children,
  readMore,
  ...rest
}) => {
  const image = getImage(img);
  return (
    <Card {...rest}>
      <Box className="position-relative">
        <Link to={`/articles/${link}`} className="w-100 h-100 d-flex">
          {image && (
            <GatsbyImage
              className="w-100 img-fluid"
              image={image}
              alt={title}
            />
          )}
        </Link>
      </Box>

      <CardText>
        {preTitle && (
          <Text fontSize={2} lineHeight={1.75} mb="14px">
            {preTitle}
          </Text>
        )}

        <Link to={`/articles/${link}`}>
          <TitleStyled variant="card" mb="14px">
            {title}
          </TitleStyled>
        </Link>
        <Text fontSize={2} lineHeight={1.75} mb="16px">
          {children}
        </Text>
        {readMore && (
          <Box>
            <Link to={`/articles/${link}`}>
              <Span color="primary">Lire la suite</Span>
            </Link>
          </Box>
        )}
      </CardText>
    </Card>
  );
};

export default PostCard;
