import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider  store={store}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);