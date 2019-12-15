import React, { useContext, useReducer } from "react";
import ItemsContextProvider, { ItemsContext } from "../contexts/ItemsContext";
import ItemDetails from "./ItemDetails";
import uuid from "uuid/v1";
import ItemsReducer, { initialState } from "../reducer/ItemsReducer";

/*TODO: 12/15@0:23a - figure out why the view isn't updating when we add an item and updagte the date from useReducer*/

const ShoppingList = () => {
	const { items } = useContext(ItemsContext);
	console.log(items);

	return (
		<div>
			<h1>Items listed here</h1>
			<ul>
				{items.map(item => {
					return <ItemDetails item={item} key={item.id} />;
				})}
			</ul>
		</div>
	);
};

export default ShoppingList;
