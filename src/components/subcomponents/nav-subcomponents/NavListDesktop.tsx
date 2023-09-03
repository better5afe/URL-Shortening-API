import NavActionButtons from './NavActionButtons';

import './NavListDesktop.scss';

const NavListDesktop = () => {
	return (
		<div className='nav__container nav__container--desktop'>
			<ul className='nav__list nav__list--desktop'>
				<li className='nav__list-item nav__list-item--desktop'>
					Features
				</li>
				<li className='nav__list-item nav__list-item--desktop'>
					Pricing
				</li>
				<li className='nav__list-item nav__list-item--desktop'>
					Resources
				</li>
			</ul>
			<NavActionButtons />
		</div>
	);
};

export default NavListDesktop;
