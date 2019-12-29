import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ArtArtistsRoll from '../components/ArtArtistsRoll'

export const ArtAndArtistsPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="container">
      <div className="section">
        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
          {title}
        </h2>

        <PageContent className="content" content={content} />
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
      }
    }
  }
`
