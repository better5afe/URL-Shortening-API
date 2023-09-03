import Button from '../../reusable/Button';

import './NavActionButtons.scss';

const NavActionButtons = () => {
	return (
		<div className='nav__btns'>
			<Button text='Login' className='nav__btns-btn login-btn' />
			<Button text='Sign Up' className='nav__btns-btn action-btn' />
		</div>
	);
};

export default NavActionButtons;
