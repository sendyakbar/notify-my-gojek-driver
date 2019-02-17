import React, { Component } from 'react';

// style
import './App.css';

// redux
import { Provider } from 'react-redux'
import store from './store'

// components
import Header from './container/header/header.jsx';
import Table from './container/table/table.jsx';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Table />
        </div>
      </Provider>
    );
  }
}

export default App;
