import React, { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";

const ItemDetails = ({ item }) => {
	console.log(item);

	return (
		<li>
			<div>{item.name}</div>
			<div>{item.store}</div>
			<div>{item.price}</div>
			<div>{item.id}</div>
		</li>
	);
};

export default ItemDetails;
