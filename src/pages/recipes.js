import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from '@reach/router'

const Recipes = ({data}) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(recipe => (
      <div key={recipe.node.id} className="recList">
        <h2 className="recHeader"> {recipe.node.frontmatter.title} </h2>
        <small> Recipe by {recipe.node.frontmatter.author} published on {recipe.node.frontmatter.date} </small>
        <br/>
        <br/>
        <Link to={recipe.node.frontmatter.path}>Read more</Link>
        <br/>
        <hr/>
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            author
            date
          }
        }
      }
    }
  }
`

export default Recipes