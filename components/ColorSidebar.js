import { useGlobalState } from "../hooks/useGlobalState";
const COLORS = [
	"bg-white",
	"bg-orange-500",
	"bg-orange-100",
	"bg-sky-500",
	"bg-gray-700",
];
export default function ColorSidebar() {
	const { send, selectedColor } = useGlobalState();
	return (
		<>
			<div>
				<div className={`h-12 w-12 ${selectedColor}`}></div>
				Current Color
			</div>
			{COLORS.map((color) => (
				<div
					className={`h-12 w-12 ${color} border border-gray-700`}
					key={color}
					onClick={() => send({ type: "SELECT", value: color })}
				></div>
			))}
		</>
	);
}
