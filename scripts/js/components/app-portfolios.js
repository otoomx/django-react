var React = require('react');
var PortfolioStore = require("../stores/portfolio-store");
var Position = require('./app-position');
var NewPosition = require('./app-new-position');
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
   
    var positionItems = [];
    if(this.state.portfolio.positions){
      positionItems = this.state.portfolio.positions.map(function(position) {
        return (
          <Position data={position} key={position.id}/>
          )
      });
    }

		return (
      <div className="table-responsive">
        
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
        <NewPosition/>
      </div>
		)
	}
});

module.exports = component;