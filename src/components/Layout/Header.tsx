import Button from '../reusable/Button';
import './Header.scss';

const heroBg = require('../../assets/icons/header-hero-bg.png');

const Header = () => {
	const scrollHandler = () => {
		const form = document.querySelector('#form');

		if (form) {
			const currentScrollValue = window.scrollY;
			const formScrollValue = form.getBoundingClientRect().top;
			const desiredScrollValue = currentScrollValue + formScrollValue - 150;

			window.scrollTo({ top: desiredScrollValue, behavior: 'smooth' });
		}
	};

	return (
		<header className='header'>
			<div className='wrapper header__wrapper'>
				<img src={heroBg} alt='' className='header__img' />
				<div className='header__text'>
					<h1 className='header__title'>More than just shorter links</h1>
					<p className='header__info'>
						Build your brand's recognition and detailed insights on how your
						links are performing.
					</p>
					<Button
						text='Get Started'
						className='action-btn header__btn'
						type='button'
						onClick={scrollHandler}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
