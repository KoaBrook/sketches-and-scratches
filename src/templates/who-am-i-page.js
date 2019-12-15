import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Headshot from '../img/headshot.png'

export const WhoAmIPageTemplate = ({ title, content, contentComponent, imageCaption }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">

      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
          <div className="column is-4">
            <div className="section">
              <img src={Headshot} alt="Jack Owen" />
              <div>
              <p>{imageCaption}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

WhoAmIPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  imageCaption: PropTypes.string,  
}

const WhoAmIPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WhoAmIPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.image}
      />
    </Layout>
  )
}

WhoAmIPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WhoAmIPage

export const whoAmIPageQuery = graphql`
  query WhoAmIPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 240, quality: 64) {
              ...GatsbyImageSharpFluid
            }
      }
      
    }
  }
}
}
`
