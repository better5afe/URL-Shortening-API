import BoostSection from '../subcomponents/footer-subcomponents/BoostSection';
import FooterLinks from '../subcomponents/footer-subcomponents/FooterLinks';

const Footer = () => {
	return (
		<footer>
				<BoostSection />
			<div className='wrapper footer__wrapper'>
				<FooterLinks />
			</div>
		</footer>
	);
};

export default Footer;
