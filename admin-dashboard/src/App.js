import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import ReviewDashboard from './components/ReviewDashboard';
import './App.css';

function App() {
	return (
		<div className="App">
       		<Router>
				<div>
					<Route exact path='/' component={Home} />
					<Route exact path='/review' component={ReviewDashboard} />
				</div>
			</Router>
		</div>
  );
}

export default App;
