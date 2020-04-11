
 
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
    let e= event.target.value; 
    this.setState(prevState=> {
      return { ...prevState, entry:e }
    });
    console.log(e);
    
  }
  search=(event)=>
  {
    if(event.key==="Enter")
    {
      axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=dcac5260&s="+this.state.entry).then((response)=>
      {
        let r=response.data.Search

        this.setState(prevState=>{
          return{ ...prevState, results:r}
        });
        //console.log(typeof(Object.entries(Object.entries(Object.entries(r)))));
        //console.log((r)["0"].Title);
        //console.log(typeof((this.state.results)));
        //console.log((this.state.results[0]));//string
        //const list = Object.entries(r);
        //console.log(Object.entries(list[0]))
        
        
      });
    }
  }
  
  
  render() 
  {
    (this.state.results).map((c)=>(console.log("Hola")));//prints hola 10 times
    
    return (
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