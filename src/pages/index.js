import React from "react";

import Layout from "../components/layout";
import Shows from "../components/shows";
import SEO from "../components/seo";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Tv Shows</h1>
    <Shows shows={data.allShowsJson.edges.map(edge => edge.node)} />
  </Layout>
);

export default IndexPage;
export const pageQuery = graphql`
  query {
    allShowsJson {
      edges {
        node {
          slug
          name
        }
      }
    }
  }
`;