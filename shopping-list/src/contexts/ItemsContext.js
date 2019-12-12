import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const ItemsContext = createContext();

const ItemsContextProvider = props => {
	const [items, setItems] = React.useState([
		{ name: "banana", store: "Whole Foods", price: 0.35, id: 1 },
		{ name: "bread", store: "Trader Joe's", price: 4.99, id: 2 },
		{ name: "butter", store: "Kroger", price: 3.35, id: 3 },
		{ name: "oranges", store: "Publix", price: 5.99, id: 4 },
		{ name: "eggs", store: "Trader Joe's", price: 4.5, id: 5 },
		{ name: "coffee", store: "Revelator", price: 11.99, id: 6 }
	]);
	return (
		<ItemsContext.Provider value={{ items }}>
			{props.children}
		</ItemsContext.Provider>
	);
};

export default ItemsContextProvider;
