import React from "react";
import { useStore } from "store-context";
import { RenderingDiv } from ".";

export default function AddClassAnimalRelations(props) {
	const { get, add, getWithRelations, RelationTypes } = useStore();

	// animal.classId === class.classId
	const animals = getWithRelations(
		"animals",
		"classes",
		"class",
		RelationTypes.MANY_TO_ONE,
		"classId",
		"classId"
	);
	// animal.classId === class.classId
	const classes = getWithRelations(
		"classes",
		"animals",
		"animals",
		RelationTypes.ONE_TO_MANY,
		"classId",
		"classId"
	);

	const addClassAnimalRelation = (animalId, classId) => {
		const animal = get("animals", (q) => q.animalId === animalId)[0];
		add("animals", {
			...animal,
			classId,
		});
	};

	return (
		<RenderingDiv>
			<table>
				<tbody>
					<tr>
						<td>
							<select id="animalToRelateWithAClass" style={{ width: 150 }}>
								{animals
									.filter((animal) => animal.class === null)
									.map((animal) => {
										return (
											<option key={"key_" + window.genId()} value={animal.animalId}>
												{animal.name}
											</option>
										);
									})}
							</select>
						</td>
						<td>
							<select id="classToBeRelated" style={{ width: 150 }}>
								{classes.map((animalClass) => {
									return (
										<option key={"key_" + window.genId()} value={animalClass.classId}>
											{animalClass.name}
										</option>
									);
								})}
							</select>
						</td>
						<td>
							<button
								type="button"
								onClick={() => {
									addClassAnimalRelation(
										parseInt(document.getElementById("animalToRelateWithAClass").value),
										parseInt(document.getElementById("classToBeRelated").value)
									);
								}}>
								Add ClassAnimalRelation
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</RenderingDiv>
	);
}
