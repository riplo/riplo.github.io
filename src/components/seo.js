import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO ({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={`${data.site.siteMetadata.title} | %s`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: `https://s3.amazonaws.com/riploventures/bg.png`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                property: `twitter:image`,
                content: `https://s3.amazonaws.com/riploventures/bg.png`,
              },
            ]
              .concat(
                (keywords.length > 0) ? {
                  name: `keywords`,
                  content: keywords.join(`, `),
                } : []
              )
              .concat(meta)}
          >
            <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700|PT+Serif:400,700" rel="stylesheet" />
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
