import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

window.genId = () => {
	if (window._genId) {
		window._genId += 1;
	} else {
		window._genId = 1;
	}
	return window._genId;
};

ReactDOM.render(<App />, document.getElementById("root"));
