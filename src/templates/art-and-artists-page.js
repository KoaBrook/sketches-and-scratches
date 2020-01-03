import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ArtArtistsRoll from '../components/ArtArtistsRoll'

export const ArtAndArtistsPageTemplate = ({ title, featuredImage, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="container">
      <div className="section">
        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
          {title}
        </h2>
        <div className="columns">
          <div className="column is-8">
            <PageContent className="content" content={content} />
          </div>
          <div className="column is-4">
          {featuredImage ? (
                    <div className="featured-thumbnail surround">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: featuredImage,
                          alt: `featured image thumbnail for entry ${title}`,
                        }}
                      />
                    </div>
                  ) : null}
          </div>
        </div>
      </div>
      <div className="roll">
        <ArtArtistsRoll />
      </div>
    </div>
  )
}

ArtAndArtistsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ArtAndArtistsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ArtAndArtistsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        featuredImage={post.frontmatter.featuredImage}
      />
    </Layout>
  )
}

ArtAndArtistsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ArtAndArtistsPage

export const theatrePageQuery = graphql`
  query ArtAndArtistsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
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
`
