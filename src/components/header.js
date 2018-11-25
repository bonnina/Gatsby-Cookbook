import React from 'react'
import { Link } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import './layout.css'

library.add(faHome)

const ItemLink = (props) => (
  <li>
    <Link to={props.to} style={{color: '#b8defa', fontSize: '3.5vw', padding: '0 3vw 0 0'}}>
      {props.children}
    </Link>
  </li>
);

const Header = () => (
  <div id="header">
      <ul id="menu" style={{listStyleType: 'none',  margin: '0', display: 'flex'}}> 
        <ItemLink to="/">
          <FontAwesomeIcon icon="home"/> 
        </ItemLink>
        <ItemLink to="/about">
          about
        </ItemLink>
        <ItemLink to="/recipes">
          recipes
        </ItemLink>
      </ul>
  </div>
)

export default Header

 