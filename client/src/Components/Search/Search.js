import React from "react"

const Search = props =>

	<div className="panel panel-primary">
		<div className="panel-heading">
			<h2 className="panel-title text-center"><strong>Search</strong></h2>
		</div>
		<div class="panel-body text-center">
			<form>
				<div className="form-group">
					<h4><strong>Topic</strong></h4>
					<input onChange={props.handleInputChange} 
					name="topic"
					value={props.value}
					type="text" 
					className="form-control text-center" 
					id="topic"></input>
					<br />
					<h4><strong>Start Year</strong></h4>
					<input onChange={props.handleInputChange} 
					name="startYear"
					value={props.value}
					type="text" 
					className="form-control text-center" 
					id="startYear"></input>
					<br />
					<h4><strong>End Year</strong></h4>
					<input onChange={props.handleInputChange} 
					name="endYear"
					value={props.value}
					type="text" 
					className="form-control text-center" 
					id="endYear"></input>
					<br />

					<button type="button" onClick={props.handleFormSubmit} className="btn btn-primary">Search</button>
				</div>
			</form>
		</div>
	</div>

export default Search