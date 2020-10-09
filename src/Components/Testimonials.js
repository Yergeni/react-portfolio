import React, { Component } from "react";

class Testimonials extends Component {
	render() {
		// #11ABB0
		if (this.props.data) {
			var testimonials = this.props.data.testimonials.map(function (
				testimonials
			) {
				return (
					<li key={testimonials.user}>
						<blockquote>
							<p>{testimonials.text}</p>
							<cite>
								<a style={{ color: "#11ABB0" }} href={testimonials.userLink}>
									{testimonials.user}
								</a>
							</cite>
						</blockquote>
					</li>
				);
			});
		}

		return (
			<section id="testimonials">
				<div className="text-container">
					<div className="row">
						<div className="two columns header-col">
							<h1>
								<span>Testimonials</span>
							</h1>
						</div>

						<div className="ten columns flex-container">
							<ul className="slides">{testimonials}</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Testimonials;
