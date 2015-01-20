var React = require('react');

var component = React.createClass({
	 propTypes: {
    	data: React.PropTypes.object,
  	},
	render: function(){
		var position = this.props.data;
		return (
		  <tr>
          	<td>{position.symbol}</td>
         	 <td>{position.quantity}</td>
         	 <td>{position.cost_per_share}</td>
           </tr>
		)
	}

});


module.exports = component;