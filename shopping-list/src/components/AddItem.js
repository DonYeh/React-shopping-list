import React, { useContext, useReducer, useState } from "react";
import { ItemsContext, initialState } from "../contexts/ItemsContext";
import ItemsReducer from "../reducer/ItemsReducer";

import uuid from "uuid/v1";

const AddItem = () => {
	const { addItemToList, items } = useContext(ItemsContext);
	// let itemName, itemStore, itemPrice;
	const [state, dispatch] = useReducer(ItemsReducer, initialState);

	const [newItemName, setNewItemName] = useState("");
	const [newItemStore, setNewItemStore] = useState("");
	const [newItemPrice, setNewItemPrice] = useState(0);

	// const [itemName, setItemName] = useState("");

	// const [itemStore, setItemStore] = useState("");

	// const [itemPrice, setItemPrice] = useState();

	console.log(ItemsContext);
	console.log(items);
	console.log(addItemToList);

	const handleAddTodo = e => {
		e.preventDefault();
		// setItemName(itemName);
		// setItemStore(itemStore);
		// setItemPrice(itemPrice);
		// dispatch({
		// 	type: "ADD_ITEM",
		// 	payload: {
		// 		name: itemName,
		// 		store: itemStore,
		// 		price: itemPrice,
		// 		id: uuid()
		// 	}
		// });

		const payload = {
			name: newItemName,
			store: newItemStore,
			price: newItemPrice,
			id: uuid()
		};

		dispatch({ type: "ADD_ITEM", payload });
		setNewItemName("");
		setNewItemPrice("");
		setNewItemStore("");
	};

	return (
		<div>
			<form onSubmit={handleAddTodo}>
				<input
					type="text"
					placeholder="item name"
					value={newItemName}
					onChange={e => {
						setNewItemName(e.target.value);
					}}
				/>
				<input
					type="text"
					placeholder="store name"
					value={newItemStore}
					onChange={e => {
						setNewItemStore(e.target.value);
					}}
				/>
				<input
					type="number"
					placeholder="item price"
					value={newItemPrice}
					onChange={e => {
						setNewItemPrice(e.target.value);
					}}
				/>
				<input type="submit" value="add item" />
			</form>
			{/* <pre>{JSON.stringify(ItemsReducer)}</pre> */}
		</div>
	);
};

export default AddItem;
