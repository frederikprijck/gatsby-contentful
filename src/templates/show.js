import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Show from "../components/show";
import SEO from "../components/seo";

const ShowPage = ({ data }) => {
  const show = data.allShowsJson.edges.map(edge => edge.node)[0];

  return (
    <Layout>
        <SEO title={show.name} />
        <Show show={show}></Show>
        <Link to="/">Back to Home</Link>
    </Layout>
  )
};
export default ShowPage;
export const pageQuery = graphql`
  query($slug: String!) {
    allShowsJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          name
          description
        }
      }
    }
  }
`;
