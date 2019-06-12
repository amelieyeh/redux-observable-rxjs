import React, { Component } from 'react';
import './style.css';

class RxComponent extends Component {
	render() {
		return (
			<div className="rx-stage">
				<div
					id="sidebar"
					className="sidebar"
				>
					{/* # example 1 */}
					<h3>hello world</h3>

					{/* # example 2 */}
					<h6 id="window-click">click to count</h6>
				
					{/* # example 3 */}
					<button
						id="plus-button"
						className="btn btn-outline-primary"
					>+</button>
					<button
						id="minus-button"
						className="btn btn-outline-primary"
					>-</button>
					<h1 id="counter"></h1>

					{/* # example 5 */}
					<button
						id="api-button"
						className="btn btn-outline-primary"
					>Api</button>
					<span id="ajax-status"></span>
					<p id="ajax-response"></p>

					{/* # example 6 */}
					<div>
						<input
							id="search"
							type="search" autocomplete="off" class="form-control"
						></input>
						<ul
							id="suggest-list" class="suggest-list"
						></ul>
					</div>
				</div>

				{/* # example 4 */}
				<button
					id="clear"
					className="btn btn-outline-primary"
				>clear canvas</button>
				<canvas
					className="canvas" id="canvas"
				></canvas>
			</div>
		);
	}
}

export default RxComponent;