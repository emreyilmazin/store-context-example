import React from "react";
import "./App.css";
import MainComponent from "./MainComponent";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Store-Context Example: Animals and Classes</p>
			</header>
			<table style={{ width: "100vw" }}>
				<tbody>
					<tr>
						<td style={{ width: "20vw" }}></td>
						<td style={{ textAlign: "center" }}>
							<MainComponent />
						</td>
						<td style={{ width: "20vw" }}></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default App;
