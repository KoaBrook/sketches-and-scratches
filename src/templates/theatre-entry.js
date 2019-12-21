import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const TheatreEntryTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
      <div className="container">
        
      </div>
  )
}

TheatreEntryTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const TheatreEntry = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TheatreEntryTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

TheatreEntry.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TheatreEntry

export const theatreEntryQuery = graphql`
  query TheatreEntry($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
