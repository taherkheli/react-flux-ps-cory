"use strict";
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');
var Dispatcher = require('../dispatcher/appDispatcher');

var InitializeActions = {
  initApp: function() {      //in reality this would have asynchronous calls to web api for app initialization
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors()
      }
    });

  }
};
module.exports = InitializeActions;
