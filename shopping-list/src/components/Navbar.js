import React, { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";

export default function Navbar() {
	const { items } = useContext(ItemsContext);

	return (
		<div>
			<h1>Shopping List</h1>
			<h2>You have: {items.length} items to purchase</h2>
		</div>
	);
}
