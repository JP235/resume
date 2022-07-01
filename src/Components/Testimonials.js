import React from "react";

function Achievements(props) {
	if (props.data) {
		var testimonials = props.data.testimonials.map(function (
			testimonials
		) {
			return (
				<li key={Math.random().toString(36).substring(2,4)}>
					<blockquote>
						<p>{testimonials.text}</p>
						<cite>{testimonials.user}</cite>
					</blockquote>
				</li>
			);
		});
	}

	return (
		<section id="testimonials">
			<div className="text-container">
				<div className="row">
					<div className="two columns header-col"></div>

					<div className="ten columns flex-container">
						<ul className="slides">{testimonials}</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Achievements;
