"use strict";
var React = require('react');
var Router = require('react-router');
var AuthorApi = require('../../api/authorApi');
var AuthorForm = require('./authorForm');
var Toastr = require('toastr');

var ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  getInitialState: function() {
    return {
      author: { id: '', firstName: '', lastName: '' }
    };
  },

  setAuthorState: function(event) {                          //will be called on each keypress on the react form as long as its wired correctly
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({ author: this.state.author });
  },

  saveAuthor: function(event) {
    event.preventDefault();
    AuthorApi.saveAuthor(this.state.author);
    Toastr.success('Author saved.');
    this.transitionTo('authors');
  },

  render: function(){
    return (
      <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState}
        onSave={this.saveAuthor} />
    );
  }
});

module.exports = ManageAuthorPage;
