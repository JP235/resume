import React, { Component } from "react";

const ListedThings = (props) => {
	if (props.elem.length > 0) {
		return (
			<ul>
				{props.elem.map((thing, index) => {
					return <li key={index}>{thing}</li>;
				})}
			</ul>
		);
	}
};

class Resume extends Component {
	render() {
		if (this.props.data) {
			var education = this.props.data.education.map(function (
				education,
				index
			) {
				return (
					<div key={index}>
						<h3>{education.school}</h3>
						<p className="info">
							{education.degree} <span>&bull;</span>
							<em className="date">{education.graduated}</em>
						</p>
						<ListedThings elem={education.description} />
					</div>
				);
			});
			var work = this.props.data.work.map(function (work, index) {
				return (
					<div key={index}>
						<h3>{work.company}</h3>
						<p className="info">
							{work.title}
							<span>&bull;</span>{" "}
							<em className="date">{work.years}</em>
						</p>
						<ListedThings elem={work.description} />
					</div>
				);
			});
			var tech_skills = this.props.data.skills.tech.map(function (
				skills
			) {
				var className = "bar-expand " + skills.name.toLowerCase();
				return (
					<li key={skills.name}>
						<span
							style={{ width: skills.level }}
							className={className}
						></span>
						<em>{skills.name}</em>
					</li>
				);
			});
			var not_tech_skills = this.props.data.skills.not_tech.map(function (
				skills
			) {
				var className = "bar-expand " + skills.name.toLowerCase();
				return (
					<li key={skills.name}>
						<span
							style={{ width: skills.level }}
							className={className}
						></span>
						<em>{skills.name}</em>
					</li>
				);
			});
		}

		return (
			<section id="resume">
				<div className="row work">
					<div className="three columns header-col">
						<h1>
							<span>Work</span>
						</h1>
					</div>
					<div className="nine columns main-col">{work}</div>
				</div>
				<div className="row education">
					<div className="three columns header-col">
						<h1>
							<span>Education</span>
						</h1>
					</div>

					<div className="nine columns main-col">
						<div className="row item">
							<div className="twelve columns">{education}</div>
						</div>
					</div>
				</div>

				<div className="row skill">
					<div className="three columns header-col">
						<h1>
							<span>Tech Skills</span>
						</h1>
					</div>
					<div className="nine columns main-col">
						<div className="bars">
							<ul className="skills tech">{tech_skills}</ul>
						</div>
					</div>
					<div className="three columns header-col">
						<h1>
							<span>Other Skills</span>
						</h1>
					</div>
					<div className="nine columns main-col">
						<div className="bars">
							<ul className="skills tech">{not_tech_skills}</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Resume;
