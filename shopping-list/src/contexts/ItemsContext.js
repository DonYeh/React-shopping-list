import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

// import initialState from "../reducer/ItemsReducer";

// const items = [
// 	{ name: "bananaz", store: "Whole Foods", price: 0.35, id: uuid() },
// 	{ name: "bread", store: "Trader Joe's", price: 4.99, id: uuid() },
// 	{ name: "butter", store: "Kroger", price: 3.35, id: uuid() },
// 	{ name: "oranges", store: "Publix", price: 5.99, id: uuid() },
// 	{ name: "eggs", store: "Trader Joe's", price: 4.5, id: uuid() },
// 	{ name: "coffee", store: "Revelator", price: 11.99, id: uuid() }
// ];

export const initialState = [
	{ name: "bananazaz", store: "Whole Foods", price: 0.35, id: uuid() },
	{ name: "bread", store: "Trader Joe's", price: 4.99, id: uuid() },
	{ name: "butter", store: "Kroger", price: 3.35, id: uuid() },
	{ name: "oranges", store: "Publix", price: 5.99, id: uuid() },
	{ name: "eggs", store: "Trader Joe's", price: 4.5, id: uuid() },
	{ name: "coffee", store: "Revelator", price: 11.99, id: uuid() }
];

const items = initialState;
console.log(initialState);

// export const addItemToList = payload => {
// 	return [...items, payload];
// };

const addItemToList = payload => {
	console.log(payload);
	return [...items, payload];
};

export const ItemsContext = createContext({
	items,
	addItemToList
});

const ItemsContextProvider = props => {
	// const [items, setItems] = React.useState([items;

	return (
		<ItemsContext.Provider value={{ items, addItemToList }}>
			{props.children}
		</ItemsContext.Provider>
	);
};

export default ItemsContextProvider;
