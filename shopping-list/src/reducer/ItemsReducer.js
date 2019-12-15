import React, { useReducer, useState } from "react";

import uuid from "uuid/v1";

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
