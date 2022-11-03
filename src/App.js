import React from "react";
import Main from "./components/Main";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";

function App() {
	return (
		<Provider>
			<BrowserRouter>
				<Main />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
