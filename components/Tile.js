import React from "react";
import { useGlobalState } from "../hooks/useGlobalState";

function Tile() {
	const { selectedColor } = useGlobalState();
	const [color, setColor] = React.useState(null);

	return (
		<div
			className={`border-b border-r border-gray-300 h-10 w-10 group relative ${color}`}
			onClick={() => setColor(selectedColor)}
		>
			<div className="absolute inset-0 opacity-25 group-hover:bg-black"></div>
		</div>
	);
}

export default React.memo(Tile);
