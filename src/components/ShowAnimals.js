import React from "react";
import { useStore } from "store-context";
import { RenderingDiv } from "./";

export default function ShowAnimals(props) {
	const { get } = useStore();
	const animals = get("animals").sort(function (a, b) {
		var nameA = a.name.toUpperCase();
		var nameB = b.name.toUpperCase();
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		return 0;
	});
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
