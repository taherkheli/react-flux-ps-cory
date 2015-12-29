"use strict";
var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({
  getInitialState: function() {
    return {
      author: { id: '', firstName: '', lastName: '' }
    };
  },

  setAuthorState: function(event) {                          //will be called on each keypress on the react form as long as its wired correctly
    var field = this.event.field;
    var value = this.event.value;
    this.state.author[field] = value;
    return this.setState({ author: this.state.author });
  },

  render: function(){
    return (
      <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState} />
    );
  }
});

module.exports = ManageAuthorPage;
