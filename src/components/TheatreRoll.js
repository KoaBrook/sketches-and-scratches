import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class TheatreRoll extends React.Component {
    render() {
        const { data } = this.props
        const { edges: entries } = data.allMarkdownRemark

        return (
            <div className="rows">
                {entries &&
                    entries.map(({ node: entry }) => (
                        <div className="columns" key={entry.id}>
                            <div className="column is-6">
                            <Link className="" to={entry.fields.slug}>
                                {entry.frontmatter.featuredimage ? (
                                    <div className="featured-thumbnail surround">
                                        <PreviewCompatibleImage
                                            imageInfo={{
                                                image: entry.frontmatter.featuredimage,
                                                alt: `featured image thumbnail for entry ${entry.frontmatter.title}`,
                                            }}
                                        />
                                    </div>
                                ) : null}
                                </Link>
                            </div>
                            <div className="column is-6">
                                {entry.excerpt}
                                <br />
                                <br />
                                <Link className="" to={entry.fields.slug}>
                                    Click for more information →
                                    </Link>
                            </div>
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
          filter: { frontmatter: { templateKey: { eq: "theatre-post" } } }
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
                    fluid(maxWidth: 500, quality: 100) {
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
