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
  }

};
module.exports = AuthorActions;
