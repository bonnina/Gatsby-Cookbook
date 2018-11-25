import React from 'react'
import Layout from '../components/layout'
import Credit from '../components/credit'

const NotFoundPage = () => (
  <Layout>
    <div className="page">
      <span>4</span>
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
       <span>4</span>
    </div>
    <Credit word="emoji" link="https://codepen.io/mikemang" name="Mike Mangialardi" />
  </Layout>
)

export default NotFoundPage
