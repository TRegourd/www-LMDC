import dayjs from "dayjs";

export const sortArticlesByDate = (array) => {
  let sortedArticles = [];
  array?.map((category) => {
    category?.articles.map((article) => {
      if (article.tags.some((item) => item.tag === category.name)) {
        sortedArticles.push(article);
      } else {
        let articleWithCategoryTag = {
          ...article,
          tags: [{ tag: category.name }].concat(article.tags),
        };
        sortedArticles.push(articleWithCategoryTag);
      }
    });
  });
  sortedArticles.sort((a, b) => dayjs(b.date) - dayjs(a.date));
  return sortedArticles;
};
