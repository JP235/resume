import React, { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../App";
import { AboutTitles } from "./Titiles";

function About(props) {
	const [name, setName] = useState("");
	const [profilepic, setProfilepic] = useState("");
	const [bio, setBio] = useState("");
	const [city, setCity] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [resumeDownload, setResumeDownload] = useState("");
	const language = useContext(LanguageContext);

	useEffect(() => {
		if (props.data) {
			setName(props.data.name);
			setProfilepic("images/" + props.data.image);
			setBio(props.data.bio);
			setCity(props.data.address.city);
			setPhone(props.data.phone);
			setEmail(props.data.email);
			setResumeDownload(props.data.resumedownload);
		}
	}, [props.data]);

	return (
		<section id="about">
			<div className="row">
				<div className="three columns">
					<img
						className="profile-pic"
						src={profilepic}
						alt="Profile Pic"
					/>
				</div>
				<div className="nine columns main-col">
					<h2>{AboutTitles[language]["About me"]}</h2>

					<p>{bio}</p>
					<div className="row">
						<div className="columns contact-details">
							<h2>
                {AboutTitles[language]["Contact Details"]}
                </h2>
							<p className="address">
								<span>{name}</span>
								<br />
								<span>{city}</span>
								<br />
								<span>{phone}</span>
								<br />
								<span>{email}</span>
							</p>
						</div>
						<div className="columns download">
							<p>
								<a href={resumeDownload} className="button">
									<i className="fa fa-download"></i>
                  {AboutTitles[language]["Download Resume"]}
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
