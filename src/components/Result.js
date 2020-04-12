
import React from 'react'


function Result({ result }) {
	return (
		<div className="container" >
			
			<img src={result.Poster} className="image" />
			<div className="overlay">
				<div className="text">
					<h2>{result.Title}</h2>
					<h3>{result.Year}</h3>
					
				</div>
				<h3 ></h3>
			</div>

		</div>
	)
}

export default Result
//<img src={result.Poster} />

//<h3>{result.Title}</h3>