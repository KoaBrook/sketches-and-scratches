import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import TheatreRoll from '../components/TheatreRoll'

export const TheatrePageTemplate = ({ title, content, contentComponent }) => {
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
            <div className="section">
              <TheatreRoll />
            </div>
          </div>
        </div>
      </div>
  )
}

TheatrePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const TheatrePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TheatrePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

TheatrePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TheatrePage

export const theatrePageQuery = graphql`
  query TheatrePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
