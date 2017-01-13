import React, {Component} from "react";


class Movie extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div>
				{this.props.movie.title}
			</div>
		)
	}
}

export default Movie;