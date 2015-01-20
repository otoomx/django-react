React = require('react');


var component = React.createClass({

	handleAdd: function(event){
		event.preventDefault();
		console.log(event);
		console.log(this.refs.symbol.getDOMNode().value);
	},
	render: function(){
return(
	<form>
	<div className="col-md-4">

	  <div className="form-group">
	    <label htmlFor="symbol">Symbol </label>
	    <input type="text" className="form-control" ref="symbol" placeholder="ZZDR" width="80px"/>
	  </div>
	  <div className="form-group">
	    <label htmlFor="quantity">Quantity </label>
	    <input type="text" className="form-control" ref="quantity" placeholder="0" width="30px"/>
	  </div>
	  <div className="form-group">
	    <label htmlFor="cost">Cost Per Share </label>
	    <input type="text"  className="form-control" ref="cost" placeholder="0" />
	  </div>
  		<button type="submit" className="btn btn-default" onClick={this.handleAdd}>Add Symbol</button>

	</div>
	</form> )
	}
})

module.exports = component;