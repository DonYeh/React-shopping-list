import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const ItemsContext = createContext();

const ItemsContextProvider = props => {
	const [items, setItems] = React.useState([
		{ name: "banana", store: "Whole Foods", price: 0.35, id: uuid() },
		{ name: "bread", store: "Trader Joe's", price: 4.99, id: uuid() },
		{ name: "butter", store: "Kroger", price: 3.35, id: uuid() },
		{ name: "oranges", store: "Publix", price: 5.99, id: uuid() },
		{ name: "eggs", store: "Trader Joe's", price: 4.5, id: uuid() },
		{ name: "coffee", store: "Revelator", price: 11.99, id: uuid() }
	]);

	const addItem = (name, store, price) => {
		setItems([...items, { name, store, price, id: uuid() }]);
	};

	return (
		<ItemsContext.Provider value={{ items }}>
			{props.children}
		</ItemsContext.Provider>
	);
};

export default ItemsContextProvider;
