
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/store";
import CounterContainer from "./Counter/CounterContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <CounterContainer />
      </Provider>
    </div>
  );
}

export default App;
