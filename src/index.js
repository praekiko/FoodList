import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FoodList from './FoodList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FoodList />, document.getElementById('food-list'));
registerServiceWorker();
