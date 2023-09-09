import LinkShorteningSection from '../subcomponents/main-subcomponents/LinkShorteningSection';
import StatisticsSection from '../subcomponents/main-subcomponents/StatisticsSection';
import LinkContextProvider from '../../context/LinkContextProvider';

import './Main.scss';

const Main = () => {
	return (
		<main className='main'>
			<div className='wrapper main__wrapper'>
				<LinkContextProvider>
					<LinkShorteningSection />
				</LinkContextProvider>
				<StatisticsSection />
			</div>
		</main>
	);
};

export default Main;
