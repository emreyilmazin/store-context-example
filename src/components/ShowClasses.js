import React from "react";
import { useStore } from "store-context";
import { RenderingDiv } from "./";

export default function ShowClasses(props) {
	const { get } = useStore();
	const classes = get("classes").sort(function (a, b) {
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
				{classes.map((x) => {
					return <li key={"key_" + window.genId()}>{x.name}</li>;
				})}
			</ul>
		</RenderingDiv>
	);
}
