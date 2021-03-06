$ = jQuery = require('jquery');
const React = require('react');
const Home = require('./components/homePage');
const About = require('./components/about/aboutPage');
const Header = require('./components/common/header');

const App = React.createClass({
  render: function() {
    let Child;

    console.log('rendering')

    switch(this.props.route) {
      case 'about': Child = About; break;
      default: Child = Home;
    }

    return (
      <div>
        <Header/>
        <Child/>
      </div>
    );
  }
});

console.log('DOESN MATTER');

const render = () => {
  let route = window.location.hash.substr(1);
  console.log(route);
  React.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();
