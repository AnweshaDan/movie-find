import React, { Component } from 'react'
import Result from './Result'

class Results extends Component
{
    render()
    {
        return(
            <div color ="black">
                {props.res[0].Title}
            </div>
        )
    }
}

export default Results