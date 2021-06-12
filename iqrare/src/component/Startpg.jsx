import React, { Component } from 'react'

class Startpg extends Component {


	render() {
		return (
			<div>
                    <nav class="navbar navbar-expand-lg fixed-top">
                    <a class="navbar-brand" href="/">Home</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav mr-4">

                            <li class="nav-item">
                                <a class="nav-link" data-value="about" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " data-value="portfolio" href="/">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " data-value="blog" href="http://localhost:3002/">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " data-value="team" href="/">
                                    Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " data-value="contact" href="/">Contact</a>
                            </li>
                        </ul>

                    </div>
                </nav>

			</div>);
	}
}

export default Startpg