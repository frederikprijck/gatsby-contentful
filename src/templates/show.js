import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Show from "../components/show";
import SEO from "../components/seo";

const ShowPage = ({ data }) => {
  const show = {
    name: data.contentfulShow.name,
    slug: data.contentfulShow.slug,
    description: data.contentfulShow.description.description,
  };

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
    contentfulShow(slug: { eq: $slug }) {
      slug
      name
      description {
        description
      }
    }
  }
`;
