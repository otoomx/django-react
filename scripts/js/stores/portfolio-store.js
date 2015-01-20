var AppDispatcher = require("../dispatchers/app-dispatcher");
var EventEmitter = require('events').EventEmitter;
var PortfolioConstants = require('../constants/portfolio-constants');
var assign = require('object-assign');


var CHANGE_EVENT = 'change';

var portfolios = [];

var PortfolioStore = assign({},EventEmitter.prototype,{

	emmitChange : function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback);
	},
	getPortfolio:function(){
		if(portfolios.length > 0){
			return portfolios[0]
		}

		return [];
	

	},
	dispatchToken : AppDispatcher.register(function(payload){
		switch(payload.action.actionType){
			case PortfolioConstants.SET_PORTFOLIOS:
				console.log("new portfolio in receieved")
				portfolios = payload.action.data;
				PortfolioStore.emmitChange(CHANGE_EVENT);
			default:
				//noop
		}


	})
});
module.exports =PortfolioStore