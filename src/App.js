import React, { Component } from 'react';
import Search from './components/Search'
import Results from './components/Result'
import axios from 'axios'


class App extends Component 
{
  constructor()
  {
    super();
    this.state=(
    {
      entry:'',
      results:[],
      selected:{}
    })
    this.input=this.input.bind(this);
    this.search=this.search.bind(this);

  }
  // url="http://www.omdbapi.com/?i=tt3896198&apikey=dcac5260";
  
  input=(event)=>
  {
    let entry= event.target.value; 
    this.setState((prevState)=>({entry:entry}));
    console.log(entry);
    
  }
  search=(event)=>
  {
    if(event.key==="Enter")
    {
      axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=dcac5260&s="+this.state.entry).then((response)=>
      {
        let r=response.data.Search
        this.setState((prevState)=>({results:r}));
        });
        console.log(typeof(response.data.Search));
        console.log(typeof(this.state.results));
        console.log((this.state.results[0]));//string
        
        
        
      };
    }
  }
}
  
  render() 
  {
    console.log((this.state.results));
    
    return(
        <div className="App">
          <header>
            <h1> MOVIE SEARCH</h1>
          </header>
          <main>
           <Search input={this.input} search={this.search}/>
           <Results res={this.state.results}/>
          </main>
        </div>
    );
  }
}

// 
export default App
