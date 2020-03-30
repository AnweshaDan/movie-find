import React, { Component } from 'react';
import Search from './components/Search'

class App extends Component {
  render() {
    const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=dcac5260";
    return (
        <div className="App">
          <header>
            <h1> MOVIE SEARCH</h1>
          </header>
        <main>
          <Search />
        </main>
        </div>
    );
  }
}

export default App;
