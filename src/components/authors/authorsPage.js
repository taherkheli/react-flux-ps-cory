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

  //This hooking up to author store was not deemed useful in ManageAuthorPage because it automatically re-directs to AuthorsPage
  //where the changes are reflected anyway (due to AuthorsPage getting latest info from store via getInitialState) so there was no need to explicitly
  //set up the "refresh UI based on the state/data change in the store"
  componentWillMount: function() {
    AuthorStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AuthorStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ authors: AuthorStore.getAllAuthors() });
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
