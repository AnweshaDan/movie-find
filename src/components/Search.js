
import React from 'react'



function Search (props)
{
    
    
    return(
        <div>
            <h1>Hello </h1>
            <input 
                    className='searchbox' 
                    type='text' 
                    placeholder='Browse'
                    onChange={props.input}
                    onKeyPress={props.search}
             />
                
        </div>
    );
}


export default Search
