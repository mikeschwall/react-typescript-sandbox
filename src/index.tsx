import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ new import for React 18+
import App from './components/App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { createStore,applyMiddleware } from 'redux';

const store = createStore(rootReducer,applyMiddleware(thunk));
console.log(store.getState());

const rootElement = document.querySelector('#root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // ✅ React 18+
  root.render(
      <Provider store={store}>
        <App />
      </Provider>
  );
}
