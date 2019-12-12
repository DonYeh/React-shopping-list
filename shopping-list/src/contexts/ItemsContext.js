import React, { createContext, useState } from "react";

export const ItemsContext = createContext();

const ItemsContextProvider = props => {
	const [items, setItems] = React.useState([
		{ name: "banana", store: "Whole Foods", price: 0.35 },
		{ name: "bread", store: "Trader Joe's", price: 4.99 },
		{ name: "butter", store: "Kroger", price: 3.35 },
		{ name: "oranges", store: "Publix", price: 5.99 },
		{ name: "eggs", store: "Trader Joe's", price: 4.5 },
		{ name: "coffee", store: "Revelator", price: 11.99 }
	]);
	return (
		<ItemsContext.Provider value={{ items }}>
			{props.children}
		</ItemsContext.Provider>
	);
};

export default ItemsContextProvider;
