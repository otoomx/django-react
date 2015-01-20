var AppConstants = require('../constants/portfolio-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');


var PortfolioActions = {

	getPortfolios: function(){
		AppDispatcher.handleViewAction({
			actionType:AppConstants.GET_PORTFOLIO
		})
	},
	setPortfolios: function(data){
		AppDispatcher.handleViewAction({
			actionType:AppConstants.SET_PORTFOLIOS,
			data:data
		})
	}
}

module.exports = PortfolioActions;
