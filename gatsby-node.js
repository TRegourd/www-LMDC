exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/sign|reset|coming/)) {
    page.context.layout = "bare";
    createPage(page);
  }
};

const path = require("path");
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);
const { default: slugify } = require("slugify");
const dayjs = require("dayjs");

const sortArticlesByDate = (array) => {
  let sortedArticles = [];
  array.map((category) => {
    category?.articles.map((article) => {
      sortedArticles.push(article);
    });
  });
  sortedArticles.sort((a, b) => dayjs(b.date) - dayjs(a.date));
  return sortedArticles;
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query {
          markdownRemark(fields: { slug: { eq: "/articles" } }) {
            frontmatter {
              title
              subtitle
              category {
                name
                articles {
                  title
                  text
                  thumbnail
                  date
                }
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          return reject(result.errors);
        }

        const articleTemplate = path.resolve(
          "./src/templates/article-details.js"
        );

        sortArticlesByDate(
          result.data?.markdownRemark.frontmatter.category
        ).forEach((article) => {
          const slug = slugify(article.title);
          createPage({
            path: `articles/${slug}`,
            component: articleTemplate,
            context: {
              slug: `articles/${slug}`,
            },
          });
        });

        return;
      })
    );
  });
};
