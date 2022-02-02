import React from "react";
import { useStore } from "store-context";
import { RenderingDiv } from "./";

export default function ShowAnimals(props) {
	const { get } = useStore();
	const animals = get("animals");
	return (
		<RenderingDiv>
			<ul>
				{animals.map((x) => {
					return <li key={"key_" + window.genId()}>{x.name}</li>;
				})}
			</ul>
		</RenderingDiv>
	);
}
