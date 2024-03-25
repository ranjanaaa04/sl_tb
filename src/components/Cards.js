import React from 'react';


export default function Cards(props) {
	return (
		
			<div className='card'>
           
			
			<section className='column-right'>
				<span className="card-country">{props.item.country} </span>
                <p><img src={props.item.coverImg} alt='t'
                /></p>
				<a href={props.item.googleMapLink}>View on Google Maps</a>
				<h3 className="card-country-title">{props.item.title}</h3>

				<p>{props.item.description}</p>
				
			</section>

		</div>
	)
}