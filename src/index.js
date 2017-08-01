import React from 'react';
import ReactDOM from 'react-dom';
import './containers/index.css';
import App from './containers/App';
import Header from './containers/Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<div>
			<App />
			<Header/>
</div>



	, document.getElementById('root'));
registerServiceWorker();
