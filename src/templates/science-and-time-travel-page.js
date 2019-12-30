import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ScienceTimeTravelRoll from '../components/ScienceTimeTravelRoll'

export const ScienceAndTimeTravelPageTemplate = ({ title, content, contentComponent }) => {
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
        <ScienceTimeTravelRoll />
      </div>
    </div>
  )
}

ScienceAndTimeTravelPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ScienceAndTimeTravelPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ScienceAndTimeTravelPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

ScienceAndTimeTravelPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ScienceAndTimeTravelPage

export const theatrePageQuery = graphql`
  query ScienceAndTimeTravelPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
