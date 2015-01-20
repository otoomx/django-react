var React = require('react');
var Portfolio = require('./app-portfolios');
var PortfolioActions = require('../actions/portfolio-actions');
var PortfolioStore = require("../stores/portfolio-store");
var webApi = require('../utils/web-api-utils');

webApi.initPortfolios();

var APP = React.createClass({
	handleClick: function(){
		PortfolioActions.getPortfolios();
	},
	render:function(){
		return (
			<div>
				<h1 onClick={this.handleClick}>Django React Flux Portfolio App</h1>
				<Portfolio/>
			</div>
		)

	}
});

module.exports = APP;