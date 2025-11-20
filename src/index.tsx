import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ new import for React 18+
import App from './components/App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';


const rootElement = document.querySelector('#root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // ✅ React 18+
  root.render(
<App/>
  );
}
