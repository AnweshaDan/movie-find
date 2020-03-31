import React, { Component } from 'react'
import Result from './Result'

function Results({res})
{
   
        return(
            <div className="results">
                {res.map(result => (
                    <Result result={res}/>
                ))}
            </div>
        )
}


export default Results