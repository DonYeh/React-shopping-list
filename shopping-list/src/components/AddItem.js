import React, { useContext, useReducer, useState } from "react";
import { ItemsContext, addItem } from "../contexts/ItemsContext";
import ItemsReducer from "../reducer/ItemsReducer";
import { initialState } from "../reducer/ItemsReducer";

const AddItem = () => {
	// const { items, addItem } = useContext(ItemsContext);

	const [item, dispatch] = useReducer(ItemsReducer, initialState);

	const [itemName, setItemName] = useState("");

	const [itemStore, setItemStore] = useState("");

	const [itemPrice, setItemPrice] = useState(0);

	const handleAddTodo = e => {
		e.preventDefault();
		setItemName(itemName);
		setItemStore(itemStore);
		setItemPrice(itemPrice);
		dispatch({
			type: "ADD_ITEM",
			payload: {
				name: itemName,
				store: itemStore,
				price: itemPrice
			}
		});

		console.log(e);
	};

	return (
		<form onSubmit={handleAddTodo}>
			<input
				type="text"
				placeholder="item name"
				value={itemName}
				onChange={e => {
					setItemName(e.target.value);
				}}
			/>
			<input
				type="text"
				placeholder="store name"
				value={itemStore}
				onChange={e => {
					setItemStore(e.target.value);
				}}
			/>
			<input
				type="number"
				placeholder="item price"
				value={itemPrice}
				onChange={e => {
					setItemPrice(e.target.value);
				}}
			/>
			<input type="submit" value="add item" />
		</form>
	);
};

export default AddItem;
