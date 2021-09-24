import { useEffect, useContext } from 'react';
import { useSelector } from '@xstate/react';
import { GlobalStateContext } from '../machines/globalState';

const selectedColorSelector = (state) => state.context.selectedColor;

export function useGlobalState() {
	const globalServices = useContext(GlobalStateContext);
	const { gridService } = globalServices;
	const { send } = gridService;
	const selectedColor = useSelector(gridService, selectedColorSelector);

	useEffect(() => {
		const subscription = gridService.subscribe((state) => {
			// simple state logging
			if (process.env === 'development') {
				console.log(state);
			}
		});

		return subscription.unsubscribe;
	}, [gridService]);

	return {
		selectedColor,
		send,
	};
}
