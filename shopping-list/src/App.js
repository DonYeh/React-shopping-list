import React from "react";

import ShoppingList from "./components/ShoppingList";
import Navbar from "./components/Navbar";
import AddItem from "./components/AddItem";

function App() {
	return (
		<div className="App">
			<Navbar />
			<ShoppingList />
			<AddItem />
		</div>
	);
}

export default App;
