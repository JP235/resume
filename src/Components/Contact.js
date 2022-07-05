import React, { Component } from "react";

class Contact extends Component {
	render() {
		if (this.props.data) {
			var message = this.props.data.contactmessage;
		}

		return (
			<section id="contact">
				<div className="row section-head">
					<div className="two columns header-col">
						<h1>
							<span>Get In Touch.</span>
						</h1>
					</div>

					<div className="ten columns">
						<p className="lead">{message}</p>
					</div>
				</div>
			</section>
		);
	}
}

export default Contact;
