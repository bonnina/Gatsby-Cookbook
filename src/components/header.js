import React from 'react'
import { Link } from 'gatsby'
import './layout.css'

const Header = ({ siteTitle }) => (
  <div id="header"
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, color: 'white' }}>
        <Link
          to="/"
          style={{
            color: '#b8defa',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
