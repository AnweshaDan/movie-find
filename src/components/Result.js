import React from 'react'

function Result({result})
{
    return(
        <div className="result">
           <img src={result.Poster} alt = "Sorry"/>
        </div>
    );
}

export default Result;
// <img src={props.r.Poster}/>
//<h3> {props.r.Title}</h3>