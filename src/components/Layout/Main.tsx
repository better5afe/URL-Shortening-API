import LinkShorteningSection from '../subcomponents/main-subcomponents/LinkShorteningSection';
import StatisticsSection from '../subcomponents/main-subcomponents/StatisticsSection';

import './Main.scss';

const Main = () => {
	return (
		<main className='main'>
			<div className='wrapper main__wrapper'>
				<LinkShorteningSection />
				<StatisticsSection />
			</div>
		</main>
	);
};

export default Main;
