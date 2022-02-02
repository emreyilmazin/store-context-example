import React from "react";
import { useStore } from "store-context";
import { RenderingDiv } from "./";

export default function ShowClasses(props) {
	const { get } = useStore();
	const classes = get("classes");
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
