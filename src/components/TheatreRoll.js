import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class TheatreRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: entries } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {entries &&
          entries.map(({ node: entry }) => (
            <div className="is-parent column is-6" key={entry.id}>
              <article
                className={`theatre-list-item tile is-child box notification ${
                  entry.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {entry.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: entry.frontmatter.featuredimage,
                          alt: `featured image thumbnail for entry ${entry.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="entry-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={entry.fields.slug}
                    >
                      {entry.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {entry.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {entry.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={entry.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

TheatreRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query TheatreRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "theatre-entry" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <TheatreRoll data={data} count={count} />}
  />
)
