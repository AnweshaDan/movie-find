import React from 'react'

import Result from './Result'

function Results ({ results }) 
{
	const list = Object.entries(results);
    console.log(list.length);
	return (
		<section className="results">
			{list.map((c) => (
				<Result result={c}/>
			))}
		</section>
	)
}
//{results.map(result => (
	//<Result result={result} />
	//))}
export default Results