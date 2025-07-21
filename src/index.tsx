import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ new import for React 18+
import App from './components/App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import combineReducers from './reducers';
const store = createStore(combineReducers,applyMiddleware(thunk));


const rootElement = document.querySelector('#root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // ✅ React 18+
  root.render(
   <Provider store={store}>
    <App/>
   </Provider>
  );
}
