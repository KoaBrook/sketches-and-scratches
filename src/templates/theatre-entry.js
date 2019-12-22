import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const TheatreEntryTemplate = ({ title, image, body }) => {

    return (
        <div className="container">
            <div className="row">
                <div className="column">
                    <img src={image} alt={title}></img>
                </div>
                <div className="column">
                    <p>{body}</p>
                </div>
            </div>
        </div>
    )
}

TheatreEntryTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    contentComponent: PropTypes.func,

}

const TheatreEntry = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <TheatreEntryTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                image={post.image}
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