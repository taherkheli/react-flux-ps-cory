"use strict";
var ActionTypes = require('../constants/actionTypes');
var Dispatcher = require('../dispatcher/appDispatcher');
var EventEmitter = require('events').EventEmitter;   //Node's event emitter
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _authors = [];   //private

var AuthorStore = assign( {}, EventEmitter.prototype, {     //basically this means that AuthorStore  inherits from EventEmitter class
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  getAllAuthors: function() {
    return _authors;
  },

  getAuthorById: function(id) {
    return _.find(_authors, {id: id} );
  }
});

//this is kind of a private member method not exposed outside
Dispatcher.register( function(action) {
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;

    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;

    default:
      //no op
  }
});

module.exports = AuthorStore;