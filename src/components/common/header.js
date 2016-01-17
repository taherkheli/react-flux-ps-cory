"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function(){
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Link to="app" className="navbar-brand">
            <img src="images/pluralsight-logo.png" />
          </Link>
          <ul className="nav navbar-nav">
            <li><Link id="home" to="app">Home</Link></li>
            <li><Link id="about" to="about">About</Link></li>
            <li><Link id="authors" to="authors">Authors</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
