import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import ReviewDashboard from './components/ReviewDashboard';
import QRDashboard from './components/GenerateQRDashboard';

import './App.css';

function App() {
	return (
		<div className="App">
       		<Router>
				<div>
					<Route exact path='/' component={Home} />
					<Route exact path='/review' component={ReviewDashboard} />
                    <Route exact path='/qr' component={QRDashboard} />
				</div>
			</Router>
		</div>
  );
}

export default App;
