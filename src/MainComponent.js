import { createRenderingDiv } from "html-create";
import React from "react";
import { StoreProvider } from "store-context";
import {
	ShowClassAnimalRelations,
	ShowClasses,
	AddClass,
	AddAnimal,
	ShowAnimals,
	AddClassAnimalRelations,
} from "./components/";

function MainComponent() {
	return (
		<StoreProvider>
			{createRenderingDiv(
				<p>
					After components are rendered, their colors changes. As you can see,
					whenever store is updated or accessed all components are rendered if they
					use the store.
				</p>
			)}
			<table>
				<tbody>
					<tr>
						<td>
							<table>
								<tbody>
									<tr>
										<td>
											<AddAnimal />
										</td>
									</tr>
									<tr>
										<td>
											<ShowAnimals />
										</td>
									</tr>
								</tbody>
							</table>
						</td>
						<td>
							<table>
								<tbody>
									<tr>
										<td>
											<AddClass />
										</td>
									</tr>
									<tr>
										<td>
											<ShowClasses />
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
					<tr>
						<td colSpan={2}>
							<table>
								<tbody>
									<tr>
										<td>
											<AddClassAnimalRelations />
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
					<tr>
						<td colSpan={2}>
							<ShowClassAnimalRelations />
						</td>
					</tr>
				</tbody>
			</table>
		</StoreProvider>
	);
}

export default MainComponent;
