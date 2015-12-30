"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');

var AuthorsPage = React.createClass({
  getInitialState: function() {
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },

  render: function() {
    return (
      <div>
        <h1>Authors</h1>
        <AuthorList authors={this.state.authors}/>
        <Link to="addAuthor" className="btn btn-default">Add Author</Link>
      </div>
    );
  }
});

module.exports = AuthorsPage;
