import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import { Box } from "../../components/Core";
import PostCard from "../../components/PostCard";
import Pagination, { PageItem } from "../../components/Pagination";

import imgB1 from "../../assets/image/jpeg/blog-post--img-10.jpg";
import imgB2 from "../../assets/image/jpeg/blog-post--img-7.jpg";
import imgB3 from "../../assets/image/png/blog-post-list--img-2.png";
import imgB4 from "../../assets/image/jpeg/blog-post--img-8.jpg";
import imgB5 from "../../assets/image/jpeg/blog-post--img-9.jpg";
import { sortArticlesByDate } from "../../utils/sortArticlesByDate";
import dayjs from "dayjs";

const BlogList = ({ list }) => (
  <>
    {/* <!-- Blog section --> */}

    <Row className="align-items-center justify-content-center">
      {sortArticlesByDate(list) &&
        sortArticlesByDate(list).map((article) => {
          return (
            <PostCard
              key={article.name + article.date}
              img={article.thumbnail}
              preTitle={dayjs(article.date).format("DD MMM YYYY")}
              title={article.title}
              readMore
            >
              {article.text}
            </PostCard>
          );
        })}
    </Row>
    <Box className="d-flex justify-content-start" mt={4}>
      <Pagination>
        <PageItem>
          <FaAngleLeft />
        </PageItem>
        <PageItem>1</PageItem>
        <PageItem>2</PageItem>
        <PageItem>3</PageItem>
        <PageItem>...</PageItem>
        <PageItem>9</PageItem>
        <PageItem>
          <FaAngleRight />
        </PageItem>
      </Pagination>
    </Box>
  </>
);

export default BlogList;
