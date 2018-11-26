import React from 'react'
import { graphql } from 'gatsby'
import { Link } from '@reach/router'

export default function Template ({data}) {
  const recipe = data.markdownRemark

  return (
    <div className="recipePost">
      <h1 className="recHeader"> {recipe.frontmatter.title} </h1>
      <small> Recipe by {recipe.frontmatter.author} published on {recipe.frontmatter.date} </small>
      <div dangerouslySetInnerHTML={{ __html: recipe.html }} className="text"/>
      <Link to="/recipes"> Go back </Link>
    </div>
  )
}

export const postQuery = graphql`
  query RecipeByPath($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path} }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`