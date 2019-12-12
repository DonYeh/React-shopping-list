import React from "react";

import ShoppingList from "./components/ShoppingList";
import Navbar from "./components/Navbar";
import AddItem from "./components/AddItem";

import ItemsContextProvider from "./contexts/ItemsContext";

function App() {
	return (
		<div className="App">
			<ItemsContextProvider>
				<Navbar />
				<ShoppingList />
				<AddItem />
			</ItemsContextProvider>
		</div>
	);
}

export default App;
