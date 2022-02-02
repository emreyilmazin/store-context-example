import React from "react";
import { useStore } from "store-context";
import { RenderingDiv } from "./";

export default function AddAnimal(props) {
	const { add } = useStore();

	const addAnimal = (name) => {
		add("animals", { animalId: window.genId(), name });
	};

	return (
		<RenderingDiv>
			<table>
				<tbody>
					<tr>
						<td>
							<textarea className="textbox" id="addAnimalText" rows={1} />
						</td>
						<td>
							<button
								type="button"
								onClick={() => {
									addAnimal(document.getElementById("addAnimalText").value);
								}}>
								Add Animal
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</RenderingDiv>
	);
}
