import React, { Component } from "react";
import QrReader from "react-qr-reader";

class Scan extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		delay: 300,
      		result: "No result"
    	};
    	this.handleScan = this.handleScan.bind(this);
  	}
  	handleScan(data) {
    	if (data) {
      		this.setState({result: data});
    	}
  	}
  	handleError(err) {
    	console.error(err);
  	}
  	render() {
    	return (
      		<div style={{ textAlign: 'center' }}>
				  <h1>{this.state.result}</h1>
				  <div style={{ width: '80%',margin:'auto' }}>
						<QrReader
							delay={this.state.delay}
							onError={this.handleError}
							onScan={this.handleScan}
							style={{ width: "80%", margin: 'auto' }}
						/>
				  </div>
      		</div>
    	);
  	}
}

export default Scan;
