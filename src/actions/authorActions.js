"use strict";
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');
var Dispatcher = require('../dispatcher/appDispatcher');

var AuthorActions = {
  createAuthor: function(author) {
    //in reality, this would be a promise/asynchronous callback from the backend server/ web api
    var newAuthor = AuthorApi.saveAuthor(author);

    //Hey dispatcher, go tell all subscribed stores that an author was just created
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    });
  },

  updateAuthor: function(author) {
    var updatedAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor
    });
  },

  deleteAuthor: function(id) {
    //if this were real and we had an asynchronous call to the server we'd first immediately fire off a "DELETE_AUTHOR" action to kinda announce to the UI
    //that we are working on it, subequently "AUTHOR_DELETED" action would have been fired after receiving a callback/acknowledgement from server/webapi so
    //the UI is always aware where we are at any point in time
    //debugger;
    AuthorApi.deleteAuthor(id);

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id: id
    });
  }

};
module.exports = AuthorActions;
