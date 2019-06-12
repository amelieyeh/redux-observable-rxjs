import {
	FIRE_KAMEHAMEHA,
	CHARGE_KAMEHAMEHA,
	STOP_KAMEHAMEHA,
} from '../actions/action-types';
import { KamehamehaStatusEnum, } from '../utils/utils';

const INITIAL_STATE = KamehamehaStatusEnum.NORMAL;

export default function kamehamehaStatus(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FIRE_KAMEHAMEHA:
			return KamehamehaStatusEnum.FIRE;

		case CHARGE_KAMEHAMEHA:
			return KamehamehaStatusEnum.CHARGE;

		case STOP_KAMEHAMEHA:
			return KamehamehaStatusEnum.NORMAL;

		default:
			return state;
	}
}