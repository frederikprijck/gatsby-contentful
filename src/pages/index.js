import React from "react";

import Layout from "../components/layout";
import Shows from "../components/shows";
import SEO from "../components/seo";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Tv Shows</h1>
    <Shows shows={data.allContentfulShow.edges.map(edge => edge.node)} />
  </Layout>
);

export default IndexPage;
export const pageQuery = graphql`
  query {
    allContentfulShow {
      edges {
        node {
          slug
          name
        }
      }
    }
  }
`;