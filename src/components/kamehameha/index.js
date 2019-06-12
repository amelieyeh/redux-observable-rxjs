import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import {
	chargeKamehamehaAction,
	stopKamehamehaAction,
} from '../../actions/kamehameha-actions';
import { KamehamehaStatusEnum, } from '../../utils/utils';
import KamehamehaNormal from '../../images/kamehameha-normal.jpg';
import KamehamehaCharge from '../../images/kamehameha-charge.gif';
import KamehamehaFire from '../../images/kamehameha-fire.gif';
import './style.css';

class Kamehameha extends Component {
	_renderActionButtons = () => {
		const {
			chargeKamehamehaAction,
			stopKamehamehaAction,
			kamehamehaStatus,
		} = this.props;

		switch (kamehamehaStatus) {
			case KamehamehaStatusEnum.NORMAL:
				return (
					<button
						className="btn btn-outline-primary"
						onClick={chargeKamehamehaAction}
					>
						かめはめ波
					</button>
				);

			case KamehamehaStatusEnum.CHARGE:
			case KamehamehaStatusEnum.FIRE:
				return (
					<button
						className="btn btn-outline-danger"
						onClick={stopKamehamehaAction}
					>
						発射を停止
					</button>
				);

			default:
				return (
					<button
						className="btn btn-outline-primary"
						onClick={chargeKamehamehaAction}
					>
						かめはめ波
					</button>
				);
		}
	}

	render() {
		const { kamehamehaStatus, } = this.props;
		const { _renderActionButtons, } = this;

		return (
			<div className="stage">
				<div className="image-wrapper">
					<img
						alt={'kamehameha'}
						src={getImageStatus(kamehamehaStatus)}
					/>
				</div>
				{_renderActionButtons()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { kamehamehaStatus, } = state;

	return {
		kamehamehaStatus,
	};
};

const mapDispatchToProps = {
	chargeKamehamehaAction,
	stopKamehamehaAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Kamehameha);

function getImageStatus(kamehamehaStatus) {
	switch(kamehamehaStatus) {
		case KamehamehaStatusEnum.NORMAL:
			return KamehamehaNormal;

		case KamehamehaStatusEnum.CHARGE:
			return KamehamehaCharge;

		case KamehamehaStatusEnum.FIRE:
			return KamehamehaFire;

		default:
			return KamehamehaNormal;
	}
}