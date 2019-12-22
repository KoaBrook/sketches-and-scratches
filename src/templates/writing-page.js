import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import WritingRoll from '../components/WritingRoll'

export const WritingPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
  )
}

WritingPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const WritingPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WritingPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
      <WritingRoll />
    </Layout>
  )
}

WritingPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WritingPage

export const writingPageQuery = graphql`
  query WritingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
