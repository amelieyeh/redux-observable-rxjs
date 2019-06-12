import React from 'react';
import { Provider, } from 'react-redux';
import initializeStore from './initialize-store';
import Kamehameha from './components/kamehameha';
import RxComponent from './components/rx-component';

const store = initializeStore();

function App() {
	return (
		<Provider store={store}>
			<Kamehameha />
			<RxComponent />
		</Provider>
	);
}

export default App;
