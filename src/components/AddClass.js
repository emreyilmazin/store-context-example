import React from "react";
import { useStore } from "store-context";
import { RenderingDiv } from "./";

export default function AddClass(props) {
	const { add } = useStore();

	const addClass = (name) => {
		add("classes", { classId: window.genId(), name });
	};

	return (
		<RenderingDiv>
			<table>
				<tbody>
					<tr>
						<td>
							<textarea className="textbox" id="addClassText" rows={1} />
						</td>
						<td>
							<button
								type="button"
								onClick={() => {
									addClass(document.getElementById("addClassText").value);
								}}>
								Add Class
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</RenderingDiv>
	);
}
