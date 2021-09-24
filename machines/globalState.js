import React, { createContext } from 'react';
import { useInterpret } from '@xstate/react';
import { gridMachine } from './gridMachine';

export const GlobalStateContext = createContext({});

export const GlobalStateProvider = (props) => {
	const gridService = useInterpret(gridMachine);

	return (
		<GlobalStateContext.Provider value={{ gridService }}>
			{props.children}
		</GlobalStateContext.Provider>
	);
};
