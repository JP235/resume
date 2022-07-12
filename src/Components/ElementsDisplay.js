import React from "react";

const ListedElements = (props) => {
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

export const ListDisplay = (key, place, title, date, description) => {
  return (
    <div key={key}>
      <h3>{place}</h3>
      <p className="info">
        {title}
        <span>&bull;</span>{" "}
        <em className="date">{date}</em>
      </p>
      <ListedElements elem={description} />
    </div>
  );
}
export const BarDisplay = (skills, color) => {
	let className = "bar-expand " + skills.name.toLowerCase();
	return (
		<li key={skills.name}>
			<span style={{ width: skills.level, background: color}} className={className} background = {color}></span>
			<em>{skills.name}</em>
		</li>
	);
};

export const HeaderAndList = ({ name, title, content }) => {
	let clsname = name ? "row " + name : "row";
	return (
		<div className={clsname}>
			<div className="three columns header-col">
				<h1>
					<span>{title}</span>
				</h1>
			</div>
			<div className="nine columns main-col">{content}</div>
		</div>
	);
};

export const HeaderAndBars = ({ name, title, content }) => {
	let clsname = name ? "skills " + name : "skills";
	return (
    <div className="row skill">
			<div className="three columns header-col">
				<h1>
					<span>{title}</span>
				</h1>
			</div>
			<div className="nine columns main-col">
				<div className="bars">
					<ul className={clsname}>{content}</ul>
				</div>
			</div>
    </div>
    )
};
