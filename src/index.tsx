import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { createStore,applyMiddleware } from 'redux';

const store = createStore(rootReducer,applyMiddleware(thunk));

console.log(store.getState());

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));
