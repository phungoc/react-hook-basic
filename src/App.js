import React, { useState } from "react";
import "./App.scss";
import Hero from "./Components/Hero/Hero";

function App() {

	const [count, setCount] = useState(0);

	return (
		<div className="app">
			<h1>Welcome to react hook</h1>
			<p>{count}</p>
			<button type="button"
				className="btn btn-primary"
				onClick={() => setCount(count + 1)}
			>
				Increase
			</button>
			<Hero name="Phu" />
		</div>
	);
}

export default App;
