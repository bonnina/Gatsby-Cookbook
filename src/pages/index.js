import React from 'react'
import Credit from '../components/credit'

const IndexPage = () => (
  <React.Fragment>
    <h1 id="welcome">welcome to our cookbook</h1>
    <div className="box">
      <div className="pan">
        <div className="handle">
          <div className="hole"></div>
        </div>
        <div className="egg">
          <div className="yolk"></div>
        </div>
      </div>
    </div>
    <Credit word="emoji" link="https://codepen.io/mikemang" name="Mike Mangialardi" />
  </React.Fragment>
)

export default IndexPage
