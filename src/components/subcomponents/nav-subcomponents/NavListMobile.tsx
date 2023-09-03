import NavActionButtons from './NavActionButtons';

import './NavListMobile.scss';

interface NavListMobileProps {
	onClick: () => void;
}

const NavListMobile: React.FC<NavListMobileProps> = ({ onClick }) => {
	return (
		<div className='nav__container nav__container--mobile'>
			<ul className='nav__list nav__list-mobile'>
				<li className='nav__list-item nav__list-item--mobile' onClick={onClick}>
					Features
				</li>
				<li className='nav__list-item nav__list-item--mobile' onClick={onClick}>
					Pricing
				</li>
				<li className='nav__list-item nav__list-item--mobile' onClick={onClick}>
					Resources
				</li>
			</ul>
			<hr />
			<NavActionButtons />
		</div>
	);
};

export default NavListMobile;
