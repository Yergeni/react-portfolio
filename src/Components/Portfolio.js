import React, { Component } from "react";

class Portfolio extends Component {
	render() {
		if (this.props.data) {
			var projects = this.props.data.projects.map(function (projects) {
				var projectImage = "images/portfolio/" + projects.image;
				return (
					<>
						<div key={projects.title} className="columns portfolio-item">
							<div className="item-wrap">
								<a href={projects.url} title={projects.title}>
									<img
										alt={projects.title}
										src={projectImage}
										style={{ width: "185px", height: "90px" }}
									/>
									<div className="overlay">
										<div className="portfolio-item-meta">
											<h5>{projects.title}</h5>
											<p>{projects.category}</p>
										</div>
									</div>
									<div className="link-icon">
										<i className="fa fa-link"></i>
									</div>
								</a>
							</div>
							<div style={{ marginTop: "10px" }}>
								<small style={{ fontSize: "small", fontWeight: "800" }}>
									Libraries & Frameworks:
								</small>
								<div style={{ display: "flex", flexDirection: "column" }}>
									{projects.technologies?.map((t) => (
										<div style={{ display: "flex", flexDirection: "column" }}>
											<li>
												<small style={{ lineHeight: "14px" }}>
													<small
														style={{ fontWeight: "800", marginLeft: "-5px" }}
													>
														JS:{" "}
													</small>
													{t.js}
												</small>
											</li>
											<li>
												<small style={{ lineHeight: "14px" }}>
													<small
														style={{ fontWeight: "800", marginLeft: "-5px" }}
													>
														STYLES:{" "}
													</small>
													{t.css}
												</small>
											</li>
                      {t.deploy && (
                        <li>
                          <small style={{ lineHeight: "14px" }}>
                            <small
                              style={{ fontWeight: "800", marginLeft: "-5px" }}
                            >
                              DEPLOYMENT:{" "}
                            </small>
                            {t.deploy}
                          </small>
                        </li>
                      )}
                      {t.others && (
                        <li>
                          <small style={{ lineHeight: "14px" }}>
                            <small
                              style={{ fontWeight: "800", marginLeft: "-5px" }}
                            >
                              UTILS:{" "}
                            </small>
                            {t.others}
                          </small>
                        </li>
                      )}
										</div>
									))}
								</div>
							</div>
						</div>
					</>
				);
			});
		}

		return (
			<section id="portfolio">
				<div className="row">
					<div className="twelve columns collapsed">
						<h1>Check Out Some of My Works.</h1>

						<div
							id="portfolio-wrapper"
							className="bgrid-quarters s-bgrid-thirds cf"
						>
							{projects}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Portfolio;
