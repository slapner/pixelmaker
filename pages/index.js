import React from "react";

import Head from "next/head";
import uuid from "react-uuid";

import ColorSidebar from "../components/ColorSidebar";
import Tile from "../components/Tile";

const GRID_SIZE = 16;
const GRID_ARRAY = Array(GRID_SIZE * GRID_SIZE).fill(0);

export default function Home() {
	return (
		<div className="flex h-screen w-full overflow-hidden">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-col w-5/6 items-center justify-center">
				<div className="grid grid-cols-16 gap-0 border-l border-t border-gray-300">
					{GRID_ARRAY.map(() => (
						<Tile key={uuid()} />
					))}
				</div>
			</div>
			<div className="flex flex-col w-1/6 bg-gray-100 items-center ">
				<ColorSidebar />
			</div>
		</div>
	);
}
