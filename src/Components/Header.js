import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../App";
import { HeaderTitles } from "./Titiles";

function Header(props) {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [networks, setNetworks] = useState("");
	const language = useContext(LanguageContext);

	useEffect(() => {
		if (props.data) {
			setName(props.data.name);
			setDescription(props.data.description);
			let networkList = props.data.social.map(function (network) {
				return (
					<li key={network.name}>
						<a href={network.url}>
							<i className={network.className}></i>
						</a>
					</li>
				);
			});
			setNetworks(networkList);
		}
	}, [props.data]);

	return (
		<header id="home">
			<nav id="nav-wrap">
				<a
					className="mobile-btn"
					href="#nav-wrap"
					title="Show navigation"
				>
					{HeaderTitles[language]["Show navigation"]}
				</a>
				<a className="mobile-btn" href="#home" title="Hide navigation">
					{HeaderTitles[language]["Hide navigation"]}
				</a>

				<ul id="nav" className="nav">
					<li className="current">
						<a className="smoothscroll" href="#home">
							{HeaderTitles[language]["Home"]}
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#about">
							{HeaderTitles[language]["About"]}
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#resume">
							{HeaderTitles[language]["Resume"]}
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#portfolio">
							{HeaderTitles[language]["Works"]}
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#achievements">
							{HeaderTitles[language]["Achievements"]}
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#contact">
							{HeaderTitles[language]["Contact"]}
						</a>
					</li>
					<button
						className="lang-selector"
						onClick={() => props.languageSelect()}
					>
						<span> {language === "en" ? "EN" : "ES"}</span>
					</button>
				</ul>
			</nav>

			<div className="row banner">
				<div className="banner-text">
					<h1 className="responsive-headline"> {name}</h1>
					<h3>{description}</h3>
					<hr />
					<ul className="social">{networks}</ul>
				</div>
			</div>

			<p className="scrolldown">
				<a className="smoothscroll" href="#about">
					<i className="icon-down-circle"></i>
				</a>
			</p>
		</header>
	);
}

export default Header;
