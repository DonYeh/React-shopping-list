import React, { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";

const ShoppingList = () => {
	const { items } = useContext(ItemsContext);
	console.log(items);

	return (
		<div>
			<h1>Items listed here</h1>
			{items.length}
		</div>
	);
};

export default ShoppingList;
