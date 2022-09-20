import React from "react";

import {
  CardSidebar,
  Block,
  TitleSidebar,
  TitlePost,
  Date,
  CatList,
  CatListItem,
} from "../../components/Sidebar";

import InputSearch from "../../components/InputSearch";
import { sortArticlesByDate } from "../../utils/sortArticlesByDate";
import dayjs from "dayjs";
import slugify from "slugify";

const Sidebar = ({ list }) => {
  return (
    <>
      <CardSidebar p="15px" pl="20px">
        <InputSearch />
      </CardSidebar>
      <CardSidebar>
        <TitleSidebar>Articles Récents</TitleSidebar>
        {sortArticlesByDate(list)
          .slice(0, 4)
          .map((article) => {
            return (
              <Block key={article.title + article.date}>
                <TitlePost link={`/articles/${slugify(article.title)}`}>
                  {article.title}
                </TitlePost>
                <Date>{dayjs(article.date).format("DD MMM YYYY")}</Date>
              </Block>
            );
          })}
      </CardSidebar>

      <CardSidebar>
        <TitleSidebar mb="28px">Catégories</TitleSidebar>
        <CatList>
          {list &&
            list.map((category) => {
              return (
                <CatListItem
                  key={category.name}
                  numPosts={category?.articles.length}
                >
                  {category.name}
                </CatListItem>
              );
            })}
        </CatList>
      </CardSidebar>
    </>
  );
};
export default Sidebar;
