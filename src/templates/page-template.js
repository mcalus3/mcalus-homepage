// @flow strict
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import { useSiteMetadata } from "../hooks";
import type { Mdx } from "../types";
import { MDXRenderer } from "gatsby-plugin-mdx";

type Props = {
  data: {
    mdx: Mdx
  }
};

const PageTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const {
    body,
    frontmatter: { title: pageTitle, description: pageDescription, socialImage }
  } = data.mdx;
  const metaDescription =
    pageDescription !== null ? pageDescription : siteSubtitle;

  return (
    <Layout
      title={`${pageTitle} - ${siteTitle}`}
      description={metaDescription}
      socialImage={socialImage}
    >
      <Sidebar />
      <Page title={pageTitle}>
        <MDXRenderer>{body}</MDXRenderer>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date
        description
        socialImage
      }
    }
  }
`;

export default PageTemplate;
