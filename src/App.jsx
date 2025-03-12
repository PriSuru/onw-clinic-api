import React from 'react';
import './App.css';
import Index from './Layouts/Index';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Index />
      </Provider>
    </>
  );
}

export default App;
