import React from 'react'
import { graphql } from 'gatsby'
import { navigate } from "gatsby"
import Layout from '../components/layout'
import { Link } from '@reach/router'
import decode from 'jwt-decode'

class Recipes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      confirm: null,
      loaded: false
    };
  }
  
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!this.loggedIn(token)) {
      navigate('/about');
    } else {
      try {
        const confirm = decode(token);
        console.log("cofirmed: ", confirm);
        this.setState({
          confirm: confirm,
          loaded: true
        });
      } catch (err) {
        console.log(err);
        localStorage.removeItem("token");
        navigate('/about');
      }
    }
  }

  loggedIn = (token) => {
    return !!token && !this.isTokenExpired(token); 
  };

  isTokenExpired = (token) => {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      console.log("token invalid or expired");
      return false;
    }
  };

  render() {
    const { data } = this.props;
    return (
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
  }
}

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