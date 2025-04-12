import React, { useState } from 'react';
import ItemComponent from './ItemComponent';

const ListComponent = () => {
	const [items, setItems] = useState([]);

	const addItem = (item) => {
		setItems([...items, item]);
	};

	return (
		<div>
			<h2>My Items</h2>
			{items.map((item, index) => (
				<ItemComponent key={index} item={item} onDelete={() => setItems(items.filter((_, i) => i !== index))} />
			))}
			<input
				type="text"
				placeholder="Add new item"
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						e.preventDefault();
						addItem(e.target.value);
						e.target.value = "";
					}
				}}
			/>
		</div>
	);
};

export default ListComponent;