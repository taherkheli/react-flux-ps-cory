"use strict";
var React = require('react');
var Link = require('react-router').Link;
var AuthorActions = require('../../actions/authorActions');
var Toastr = require('toastr');

var AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },

  //in a neater and proper implementation this should probably be in the parent componet and passed down via props
  deleteAuthor: function(id, event) {
    event.preventDefault();
    //debugger;
    AuthorActions.deleteAuthor(id);
    Toastr.success('Author Deleted');
  },

  render: function(){
    var createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
          <td><Link to="editAuthor" params={{id: author.id}}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table">
          <thead>
            <th></th>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = AuthorList;
