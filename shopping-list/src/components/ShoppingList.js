import React, { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import ItemDetails from "./ItemDetails";

const ShoppingList = () => {
	const { items } = useContext(ItemsContext);
	console.log(items);

	return (
		<div>
			<h1>Items listed here</h1>
			<ul>
				{items.map(item => {
					return <ItemDetails item={item} key={Date.now} />;
				})}
			</ul>
		</div>
	);
};

export default ShoppingList;
