import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import Navbar from "./components/Navbar/navbar";
import Exchange from "./components/Exchange/exchange";
import store from './store/index'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Navbar />
          <Exchange />
      </Provider>
    </div> 
  );
}

export default App;
