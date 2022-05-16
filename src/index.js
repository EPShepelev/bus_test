import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { fetchPosts } from './api/fetchPosts';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

store.dispatch(fetchPosts)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={ <App />  } />
          <Route path="*" element={<Navigate to="/pages/1" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
