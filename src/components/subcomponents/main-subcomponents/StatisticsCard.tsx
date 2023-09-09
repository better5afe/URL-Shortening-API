import './StatisticsCard.scss';

interface StatisticsCardProps {
	id: string;
	icon: any;
	title: string;
	text: string;
	className: string;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({
	id,
	icon,
	title,
	text,
	className,
}) => {
	return (
		<div id={id} className={`statistics-card statistics-card--${className}`}>
			<div className='statistics-card__icon'>{icon}</div>
			<h3 className='statistics-card__title'>{title}</h3>
			<p className='statistics-card__text'>{text}</p>
		</div>
	);
};

export default StatisticsCard;
