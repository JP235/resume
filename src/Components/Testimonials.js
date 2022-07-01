import React from "react";

function Achievements(props) {
	if (props.data) {
		var achievements = props.data.achievements.map(function (
			achievement
		) {
			return (
				<li key={Math.random().toString(36).substring(2,4)}>
					<blockquote>
						<p>{achievement.text}</p>
						{achievement.user && <cite>{achievement.user}</cite> }
					</blockquote>
          <hr></hr>
				</li>
			);
		});
	}

	return (
		<section id="achievements">
			<div className="text-container">
				<div className="row">
					<div className="two columns header-col"></div>

					<div className="ten columns flex-container">
						<ul className="slides">{achievements}</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Achievements;
