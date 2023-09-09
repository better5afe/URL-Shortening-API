import Button from '../../reusable/Button';

import BoostBackgroundMobile from '../../../assets/icons/background-icons/BoostBackgroundMobile';
import BoostBackgroundDesktop from '../../../assets/icons/background-icons/BoostBackgroundDesktop';

import './BoostSection.scss';

const BoostSection = () => {
	return (
		<div className='boost-section'>
			<h2 className='boost-section__title'>Boost your links today</h2>
			<Button text='Get Started' type='button' className='action-btn boost-section__btn' />

			<BoostBackgroundMobile className='boost-section__icon boost-section__icon--mobile' />
			<BoostBackgroundDesktop className='boost-section__icon boost-section__icon--desktop' />
		</div>
	);
};

export default BoostSection;
