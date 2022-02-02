import React, { useState } from "react";
import { createRenderingDiv } from "html-create";

export default function RenderingDiv(props) {
	return createRenderingDiv(props.children);
}
