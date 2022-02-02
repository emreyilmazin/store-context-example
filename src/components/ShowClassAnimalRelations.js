import React from "react";
import { useStore } from "store-context";
import { RenderingDiv } from "./";

export default function ShowAnimals(props) {
	const { getWithRelations, RelationTypes } = useStore();

	const animals = getWithRelations(
		"animals",
		"classes",
		"class",
		RelationTypes.MANY_TO_ONE,
		"classId",
		"classId"
	);

	return (
		<RenderingDiv>
			<ul>
				{animals
					.filter((q) => q.class !== null)
					.map((x) => {
						return (
							<li key={"key_" + window.genId()}>
								{x.class.name}-{x.name}
							</li>
						);
					})}
			</ul>
		</RenderingDiv>
	);
}
