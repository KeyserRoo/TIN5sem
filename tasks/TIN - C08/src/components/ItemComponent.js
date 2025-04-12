import React from 'react';
import PropTypes from 'prop-types';

const ItemComponent = ({ item, onDelete }) => {
	const validateTextLength = (text) => {
		if (text.length < 3) { return <span style={{ color: 'red' }}>{text}</span>; }
		else return <span>{text}</span>;
	};

	return (
		<div>
			{validateTextLength(item)}
			<button onClick={onDelete}>Remove</button>
		</div>
	);
};

ItemComponent.propTypes = {
	item: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default ItemComponent;