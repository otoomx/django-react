
var AppDispatcher = require("../dispatchers/app-dispatcher");
var PortfolioConstants = require('../constants/portfolio-constants');
var PortfolioActions = require('../actions/portfolio-actions');
var request = require('superagent');

var assign = require('object-assign');
var Api = {

	initPortfolios :  function(){
		this.getPortfolios();
	},

	getPortfolios : function(){
		 request.get('/api/portfolio')
		   .end(function(res){
		   		if(res.ok){
		   			console.log("setting data from services");
		   			PortfolioActions.setPortfolios(res.body);
		   		}
		   		else{
		   			console.log("error calling portfolio ");
		   		}

   		});
	},


};
console.log(AppDispatcher)
AppDispatcher.register(function(payload){
		console.log(payload);
		switch(payload.action.actionType){
			case PortfolioConstants.GET_PORTFOLIO:
				Api.getPortfolios();
				break;
			default:
				console.log(payload.action.actionType + " noop")
				//noop
		}
});
module.exports  = Api;