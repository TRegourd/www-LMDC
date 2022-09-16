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

const Sidebar = ({ list }) => {
  console.log(list);
  return (
    <>
      <CardSidebar p="15px" pl="20px">
        <form>
          <InputSearch />
        </form>
      </CardSidebar>
      <CardSidebar>
        <TitleSidebar>Recent Posts</TitleSidebar>
        <Block>
          <TitlePost>
            How To Blow Through Capital At An Incredible Rate
          </TitlePost>
          <Date>Jan 14, 2020</Date>
        </Block>
        <Block>
          <TitlePost>Design Studios That Everyone Should Know About?</TitlePost>
          <Date>Jan 14, 2020</Date>
        </Block>
        <Block>
          <TitlePost>
            How did we get 1M+ visitors in 30 days without anything!
          </TitlePost>
          <Date>Jan 14, 2020</Date>
        </Block>
        <Block borderBottom="none" pb="0">
          <TitlePost>
            Figma On Figma: How We Built Our Website Design System
          </TitlePost>
          <Date>Jan 14, 2020</Date>
        </Block>
      </CardSidebar>
      <CardSidebar>
        <TitleSidebar>Popular Posts</TitleSidebar>
        <Block>
          <TitlePost>
            How To Blow Through Capital At An Incredible Rate
          </TitlePost>
          <Date>Jan 14, 2020</Date>
        </Block>
        <Block>
          <TitlePost>Design Studios That Everyone Should Know About?</TitlePost>
          <Date>Jan 14, 2020</Date>
        </Block>
        <Block>
          <TitlePost>
            How did we get 1M+ visitors in 30 days without anything!
          </TitlePost>
          <Date>Jan 14, 2020</Date>
        </Block>
        <Block borderBottom="none" pb="0">
          <TitlePost>
            Figma On Figma: How We Built Our Website Design System
          </TitlePost>
          <Date>Jan 14, 2020</Date>
        </Block>
      </CardSidebar>
      <CardSidebar>
        <TitleSidebar mb="28px">Categories</TitleSidebar>
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
