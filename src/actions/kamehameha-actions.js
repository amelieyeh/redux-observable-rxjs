import {
  FIRE_KAMEHAMEHA,
  CHARGE_KAMEHAMEHA,
  STOP_KAMEHAMEHA,
} from './action-types';

export function fireKamehamehaAction() {
	return {
		type: FIRE_KAMEHAMEHA,
	};
}

export function chargeKamehamehaAction() {
	return {
		type: CHARGE_KAMEHAMEHA,
	};
}

export function stopKamehamehaAction() {
	return {
		type: STOP_KAMEHAMEHA,
	};
}
