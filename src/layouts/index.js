import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Transition from '../components/transition'
import Header from '../components/header'
import './layout.css'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'A recipe blog' },
            { name: 'keywords', content: 'gatsby, react, cookbook, recipes' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <Header />
        <div className="layout">
          {children}
        </div>

        <Transition location={location}>
          {children}
        </Transition>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
