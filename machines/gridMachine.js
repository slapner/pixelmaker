import { createMachine, assign, send, spawn } from "xstate";

const COLORS = [
	"bg-orange-500",
	"bg-white",
	"bg-orange-100",
	"bg-sky-500",
	"bg-gray-700",
];

const removeColor = (c) => {
	const colors = [...COLORS];
	return colors.filter((item) => item !== c);
};

const gridMachine = createMachine({
	id: "grid",
	initial: "idle",
	context: {
		colors: COLORS,
		selectedColor: COLORS[0],
	},
	states: {
		idle: {},
	},
	on: {
		SELECT: {
			actions: assign({ selectedColor: (_, ev) => ev.value }),
		},
		ADD_COLOR: {
			actions: assign({ colors: (ctx, ev) => [...ctx.colors, ev.value] }),
		},
		REMOVE_COLOR: {
			actions: assign({ colors: (_, ev) => removeColor(ev.value) }),
		},
	},
});

const createTileMachine = (cell) => {
	return createMachine({
		id: `tile-${cell}`,
		initial: "idle",
		context: {
			color: undefined,
			cell: cell,
			grid: spawn(gridMachine, "grid-machine"),
		},
		states: { idle: {} },
		on: {
			CLICK: {
				actions: send(
					{ type: "GET_COLOR", value: (ctx) => ctx.cell },
					{ to: "grid" }
				),
			},
			COLOR: {
				actions: assign({ color: (_, ev) => ev.value }),
			},
		},
	});
};

export { gridMachine, createTileMachine };
