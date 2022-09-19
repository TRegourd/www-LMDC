import dayjs from "dayjs";

export const sortArticlesByDate = (array) => {
  let sortedArticles = [];
  array?.map((category) => {
    category?.articles.map((article) => {
      sortedArticles.push(article);
    });
  });
  sortedArticles.sort((a, b) => dayjs(b.date) - dayjs(a.date));
  return sortedArticles;
};
