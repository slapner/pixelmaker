import 'tailwindcss/tailwind.css';
import { GlobalStateProvider } from '../machines/globalState';

function MyApp({ Component, pageProps }) {
	return (
		<GlobalStateProvider>
			<Component {...pageProps} />
		</GlobalStateProvider>
	);
}

export default MyApp;
