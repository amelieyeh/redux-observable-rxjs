import {
	createStore,
	applyMiddleware,
} from 'redux';
import { createEpicMiddleware, } from 'redux-observable';
import loggerMiddleware from 'redux-logger';
import epic from './epics';
import reducer from './reducers';

const epicMiddleware = createEpicMiddleware();

function initializeStore(initState = {}) {
	let middlewares = [
		loggerMiddleware,
		epicMiddleware,
	];

  const store = createStore(
		reducer,
		initState,
		applyMiddleware(...middlewares)
  );

  epicMiddleware.run(epic);

  return store;
}

export default initializeStore;