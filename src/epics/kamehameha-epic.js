import { ofType, } from 'redux-observable';
import { of, } from 'rxjs';
import {
	switchMap,
	map,
	delay,
	takeUntil,
	// filter,
} from 'rxjs/operators';
import {
	CHARGE_KAMEHAMEHA,
	STOP_KAMEHAMEHA,
} from '../actions/action-types';
import { fireKamehamehaAction, } from '../actions/kamehameha-actions';

export default function kamehamehaChargeEpic(action$) {
	return action$.pipe(
		// filter(action => CHARGE_KAMEHAMEHA === action.type),
		ofType(CHARGE_KAMEHAMEHA),
		switchMap(action =>
			of(0).pipe(
				delay(5000),
				map(fireKamehamehaAction),
				takeUntil(action$.pipe(ofType(STOP_KAMEHAMEHA))),
			)
		),
	);
}