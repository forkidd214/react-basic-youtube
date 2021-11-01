import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
	const [ keyword, setKeyword ] = useState('');

	const handleFormSubmit = (evt) => {
		evt.preventDefault();

		onSearchSubmit(keyword);
	};

	return (
		<form className="search-bar mb-5" onSubmit={handleFormSubmit}>
			<div className="mb-3">
				<label className="form-label">Youtube Search</label>
				<input
					type="search"
					className="form-control"
					placeholder="Search"
					onChange={(evt) => setKeyword(evt.target.value)}
					value={keyword}
				/>
			</div>
		</form>
	);
};

export default SearchBar;
