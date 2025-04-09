import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Provider } from 'react-redux';
import store from './store/store';
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
      <App />
      </AuthProvider>
    </Provider>
  </BrowserRouter>
);
