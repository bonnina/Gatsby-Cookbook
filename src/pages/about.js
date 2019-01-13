import React from 'react'
import Credit from '../components/credit'
import { navigate } from "gatsby"
import axios from "axios";
const API_URL = "http://localhost:3001";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: this.sanitize(e.target.value)
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    axios.post(`${API_URL}/signup`, {
      username: this.state.username,
      password: this.state.password
    })
    .then(res =>  {
      console.log(res.data);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate('/recipes');
      } else {
          alert('Sorry, this username alredy exists')
        }
    })
    .catch(err => {
      console.log(err);
      alert('Sorry, this username alredy exists')
    });
  }

  sanitize(string) {  
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    return string.replace(reg, (match) => (map[match]));
  }
  
  render() {
    return (
    <React.Fragment>
    <p id="about">
      We are passionate about cooking and sharing our recipes with the world.
    </p>
    <p id="logIn">
      Please log in to view the recipes.
    </p>

    <div className="grid">
      <div id="login">
        <form>
            <input 
                type="text" 
                name="username"
                id="name" 
                placeholder="username"
                required
                onChange={this.handleChange}
                />
            <input 
                type="password" 
                name="password"
                id="password" 
                placeholder="password"
                required
                onChange={this.handleChange}
                />
            <p><input type="submit" value="Sign In" onClick={this.handleFormSubmit} /></p>
        </form>
            <p id="or"> or </p>
            <button id="fb"><span className="iconFB"></span> continue with facebook </button>
            <button id="gp"><span className="iconGP">G+</span> continue with google </button>
      </div>
    </div>
  
    <div id="corner">
      <div className="pizza">
        <div className="crust"></div>
        <div className="slice">
          <div className="salami1"></div>
          <div className="salami2"></div>
          <div className="salami3"></div>
          <div className="basil1"></div>
          <div className="basil2"></div>
          <div className="basil3"></div>
          <div className="basil4"></div>
        </div>
      </div>
    </div>
    <Credit word="pizza" link="https://codepen.io/feuerbird29" name="Ana Toma" />
    </React.Fragment>
    )
  }
}

export default About