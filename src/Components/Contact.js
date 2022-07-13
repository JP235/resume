import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../App";
import { ConstactTitles } from "./Titiles";

function Contact(props) {
	const [message, setMessage] = useState("");
	const language = useContext(LanguageContext);

	useEffect(() => {
		if (props.data) {
			setMessage(props.data.contactmessage);
		}
	}, [props.data]);

	return (
		<section id="contact">
			<div className="row section-head">
				<div className="header">
					<h1>
						<span>{ConstactTitles[language].title}</span>
					</h1>
				</div>
				<div className="header two columns flex-container ">
					{/* <span>{ConstactTitles[language].title}</span> */}
				</div>

				<div className="ten columns flex-container">
					<p className="lead">{message}</p>
				</div>
			</div>
		</section>
	);
}

export default Contact;
