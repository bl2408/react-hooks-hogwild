import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import CardList from "./CardList";
import Filter from "./Filter";

function App() {

	const [filter, setFilter] = useState("All");
	const [sort, setSort] = useState("Default");

	const finalItems = hogs
	.filter(hog=>filter === "All" ? true : hog.greased === filter)
	.sort((a, b)=>{
		switch(sort){
			case "name":
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			case "weight":
				return a.weight - b.weight;
			default:
				return true;
		}
	});

	return (
		<div className="App">
			<Nav />
			<Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort}/>
			<CardList items={finalItems}/>
		</div>
	);
}

export default App;
