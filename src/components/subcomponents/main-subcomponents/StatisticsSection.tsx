import StatisticsCardsBox from './StatisticsCardsBox';

import './StatisticsSection.scss';

const StatisticsSection = () => {
	return (
		<section className='statistics-section'>
			<div className='statistics-section__info'>
				<h2 className='statistics-section__info-title'>Advanced Statistics</h2>
				<p className='statistics-section__info-text'>
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
			</div>
			<StatisticsCardsBox />
		</section>
	);
};

export default StatisticsSection;
