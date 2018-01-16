import React, { Component } from 'react';
class SearchForm extends Component {
	render() {
		return (
			<div>
				<form className="center">
					<input type="text" placeholder="enter city to search" />
					<button className="btn green">search</button>
				</form>
			</div>
		);
	}
}

export default SearchForm;
