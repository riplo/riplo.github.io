import React from 'react'

export default () => (
  <section className="light-gray" id="technologies">
    <div className="lines right"></div>
    <div className="container">
      <h2 className="serif bold center marg-bot-1">Technologies</h2>

      <div className="lists">
        <div className="list">
          <h5 className="bold">Web</h5>
          <ul>
            <li>HTML/CSS/SCSS</li>
            <li>React/Redux</li>
            <li>Ruby on Rails</li>
          </ul>
        </div>

        <div className="list">
          <h5 className="bold">Mobile</h5>
          <ul>
            <li>React Native</li>
            <li>Firebase</li>
            <li>Android/iOS</li>
          </ul>
        </div>

        <div className="list">
          <h5 className="bold">Everywhere</h5>
          <ul>
            <li>JavaScript, Node, Express</li>
            <li>MongoDB, PostgreSQL</li>
            <li>Heroku, AWS</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="lines left"></div>
  </section>
)
