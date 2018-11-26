import React from 'react'
import { Link } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import './layout.css'

library.add(faHome)

const menuStyle = {
  listStyleType: 'none', 
  margin: '0', 
  display: 'flex', 
  justifyContent:'space-between', 
  paddingRight:'14vw'
}

const ItemLink = (props) => (
  <li>
    <Link to={props.to} style={{color: '#b8defa', fontSize: '3.5vw'}}>
      {props.children}
    </Link>
  </li>
);

const Header = () => (
  <div id="header">
      <ul id="menu" style={menuStyle}> 
        <ItemLink to="/">
          <FontAwesomeIcon icon="home" style={{fontSize: '2.8vw', paddingBottom: '0.3vh'}}/> 
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

 