import React, { Component } from 'react';

// style
import './App.css';

// redux
import { Provider } from 'react-redux'
import store from './store'

// components
import Header from './components/header/header.jsx';
import Search from './components/search/search.jsx'
import Table from './components/table/table.jsx';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Search />
          <Table />
        </div>
      </Provider>
    );
  }
}

export default App;
