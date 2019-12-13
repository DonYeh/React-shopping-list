import React, { useReducer, useState } from "react";

import uuid from "uuid/v1";

export const initialState = [
	{ name: "banana", store: "Whole Foods", price: 0.35, id: uuid() },
	{ name: "bread", store: "Trader Joe's", price: 4.99, id: uuid() },
	{ name: "butter", store: "Kroger", price: 3.35, id: uuid() },
	{ name: "oranges", store: "Publix", price: 5.99, id: uuid() },
	{ name: "eggs", store: "Trader Joe's", price: 4.5, id: uuid() },
	{ name: "coffee", store: "Revelator", price: 11.99, id: uuid() }
];

const ItemsReducer = (state, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			console.log(state);
			console.log(action.payload);
			return [...state, action.payload];

		default:
			return state;
	}
};

export default ItemsReducer;
