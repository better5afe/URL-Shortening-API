import LinkForm from './LinkForm';
import LinksList from './LinksList';

import './LinkShorteningSection.scss';

const LinkShorteningSection = () => {
	return (
		<section className='shortening-section'>
			<LinkForm />
			<LinksList />
			
		</section>
	);
};

export default LinkShorteningSection;
