/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allShowsJson {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      const showTemplate = path.resolve("./src/templates/show.js");
      result.data.allShowsJson.edges.map(edge => edge.node).forEach(show => {
        createPage({
          path: `/shows/${show.slug}/`,
          component: showTemplate,
          context: {
            slug: show.slug,
          },
        });
      });
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
};
