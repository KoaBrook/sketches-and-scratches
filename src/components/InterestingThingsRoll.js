import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class InterestingThingsRoll extends React.Component {
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
                        </div>
                    ))}
            </div>
        )
    }
}

InterestingThingsRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
    query InterestingThingsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "interesting-thing" } } }
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
        render={(data, count) => <InterestingThingsRoll data={data} count={count} />}
    />
)
