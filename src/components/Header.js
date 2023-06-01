import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

export default ({ className, text, subtext }) => {
    /* Step 2: Use the useStaticQuery hook and
  graphql tag to query for data
  (The query gets run at build time) */
    const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    siteBuildMetadata {
      buildTime
    }
  }
`)
    return (
        <div>
            <h3 className={className}>{text}</h3>
            <h4>{subtext}</h4>
        </div>
    );
}