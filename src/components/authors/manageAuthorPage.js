"use strict";
var React = require('react');
var Router = require('react-router');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var AuthorForm = require('./authorForm');
var Toastr = require('toastr');

var ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  statics: {
    willTransitionFrom: function(transition, component) {
      if (component.state.dirty && !confirm('Leave without saving?')) {
        transition.abort();
      }
    }
  },

  getInitialState: function() {
    return {
      author: { id: '', firstName: '', lastName: '' },
      errors: {},
      dirty: false
    };
  },

  componentWillMount: function() {    //good place to call setState() as here it won't result in rendering whereas in calling it in componentDidMount would have caused rendering
    var authorId = this.props.params.id;  //from the path '/author:id'

    if (authorId) {
      this.setState( {author: AuthorStore.getAuthorById(authorId)} );
    }
  },

  authorFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {};  //initialize i.e. clear any previous errors
    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    }

    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({errors: this.state.errors});
    return formIsValid;
  },

  setAuthorState: function(event) {                          //will be called on each keypress on the react form as long as its wired correctly
    this.setState({ dirty: true });
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({ author: this.state.author });
  },

  saveAuthor: function(event) {
    event.preventDefault();
    if (!this.authorFormIsValid()) {
      return;
    }
    AuthorActions.createAuthor(this.state.author);
    this.setState({ dirty: false });
    Toastr.success('Author saved.');
    this.transitionTo('authors');
  },

  render: function(){
    return (
      <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState}
        onSave={this.saveAuthor}
        errors={this.state.errors} />
    );
  }
});

module.exports = ManageAuthorPage;
