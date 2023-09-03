import Button from '../../reusable/Button';

import './LinkCard.scss';

interface LinkCardProps {
	id: number;
	fullLink: string;
	shortenedLink: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ id, fullLink, shortenedLink }) => {
	return (
		<div className='link__card'>
			<div className='link__card-top'>
				<p className='link__card-top-full-link'>{fullLink}</p>
			</div>
			<div className='link__card-bottom'>
				<p className='link__card-bottom-shortened-link'>{shortenedLink}</p>
				<Button text='Copy' className='link__card-btn squared-btn action-btn' type='button' />
			</div>
		</div>
	);
};

export default LinkCard;
