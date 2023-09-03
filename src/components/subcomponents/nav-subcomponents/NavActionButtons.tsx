import Button from '../../reusable/Button';

import './NavActionButtons.scss';

const NavActionButtons = () => {
	return (
		<div className='nav__btns'>
			<Button text='Login' className='nav__btns-button login-btn' />
			<Button text='Sign Up' className='nav__btns-button action-btn' />
		</div>
	);
};

export default NavActionButtons;
