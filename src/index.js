import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<Router>
		<div>
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</div>
	</Router>

), document.getElementById('root'));
registerServiceWorker();
