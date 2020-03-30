
import React, {Component} from 'react'
import axios from 'axios'

class Search extends Component
{
    constructor()
    {

        super();
        this.state=
        {
            entry:'',
            results:[],
            selected:{}
        };
    }
    search= (event)=>
    {
        if(event.key==="Enter")
        { 
            console.log(this.state.entry);
            axios("http://www.omdbapi.com/?i=tt3896198&apikey=dcac5260&s="+this.state.entry).then((data)=>
        {
        let result= data.Search;
        this.setState((prevSate)=>({results:result}));
        console.log(data);
    });
    }
    }

    changeHandler =(event) => 
    {
        let entry = event.target.value;
        this.setState((prevSate)=>({entry:entry}));
        console.log(entry);//asynchronous works same with this.state.entry
    }
    render()
    {
        return(
            <div>
                <h1>Hello {this.state.entry}</h1>
                <input 
                    className='searchbox' 
                    type='text' 
                    placeholder='Browse'
                    value={this.state.entry}
                    onChange={this.changeHandler}
                    onKeyPress={this.search}
                />
            </div>
        );
    }
}

export default Search
