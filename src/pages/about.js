import React from 'react'
import Layout from '../components/layout'
import Credit from '../components/credit'

const About = () => (
  <Layout>
    <p id="about">
      We are passionate about cooking and sharing our recipes with the world.
    </p>
    <p id="logIn">
      Please log in to view all recipes.
    </p>

    <div className="grid">
      <div id="login">
        <form>
            <p><label htmlFor="email"> e-mail address </label></p>
            <p><input type="email" id="email" placeholder="mail@address.com"/></p>
            <p><label htmlFor="password"> password </label></p>
            <p><input type="password" id="password" placeholder="password"/></p>
            <p><input type="submit" value="Sign In"/></p>
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
   </Layout>
)

export default About