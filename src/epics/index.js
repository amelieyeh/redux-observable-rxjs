import { combineEpics, } from 'redux-observable';
import kamehamehaChargeEpic from './kamehameha-epic';

const epics = combineEpics(
	kamehamehaChargeEpic,
);

export default epics;