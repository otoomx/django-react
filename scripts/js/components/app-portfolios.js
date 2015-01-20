var React = require('react');
var PortfolioStore = require("../stores/portfolio-store");

function getStateFromStores(){

  return {
    portfolio: PortfolioStore.getPortfolio()
  }

}
var component = React.createClass({
  getInitialState: function() {
    return getStateFromStores();
  },
  componentDidMount: function() {
    PortfolioStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    PortfolioStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(getStateFromStores());
  },
	render: function(){
    console.log(this.state.portfolio)
    var positionItems = [];
    if(this.state.portfolio.positions){
      positionItems = this.state.portfolio.positions.map(function(position) {

      return (
        <tr>
          <td>{position.symbol}</td>
          <td>{position.quantity}</td>
          <td>{position.cost_per_share}</td>
        </tr>
      )
    });
    }

 

		return (
			<table className="table table-responsive table-hover">
  					<thead>
  						<th>Symbol</th>
  						<th>Quantity</th>
  						<th>Cost Per Share</th>
  					</thead>
  					<tbody>
              {positionItems}
  					</tbody>
			</table>
		)
	}
});

module.exports = component;