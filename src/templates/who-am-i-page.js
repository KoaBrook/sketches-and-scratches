import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Headshot from '../img/headshot.png'
import ContactForm from '../components/ContactForm'

export const WhoAmIPageTemplate = ({ title, content, contentComponent, imageCaption }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column">
            <img src={Headshot} alt="Jack Owen" className="headshot"/>
            <p>{imageCaption}</p>
          </div>
          <div>
              
            </div>
          <div className="column">
            <h2 className="title has-text-weight-bold is-bold-light">
              {title}
            </h2>
            <PageContent className="content" content={content} />
            </div>
            </div>
            <br />
            <div className="columns">
              <div className="column">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
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
