import React from 'react'

import Result from './Result'

function Results ({res}) 
{      
	//const list = Object.entries(results); 
	//console.log(res["1"].Title);//doesnt log anything
	console.log(res);//doesnt log anything
	return (
		<section className="results">
			{res.map((c) => (
				<Result result={c}/>
			))}
		</section>
	)
}
//{results.map(result => (
	//<Result result={result} />
	//))}
export default Results 