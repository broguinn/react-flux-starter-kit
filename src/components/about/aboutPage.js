'use strict';

const React = require('react');

const About = React.createClass({
  render: () => (
    <div>
      <h1>About</h1>
      <p>
        This App Blows
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Flux</li>
          <li>Node</li>
          <li>Gulp</li>
          <li>Browserify</li>
          <li>Bootstrap</li>
        </ul>
      </p>
    </div>
  )
});

module.exports = About;
