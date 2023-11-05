import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query siteMetadataTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
};

export default Seo;
