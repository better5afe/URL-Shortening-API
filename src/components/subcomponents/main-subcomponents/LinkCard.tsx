import Button from '../../reusable/Button';

import './LinkCard.scss';

interface LinkCardProps {
	id: number;
	fullLink: string;
	shortenedLink: string;
	isCopied: boolean;
	onCopy: () => void;
}

const LinkCard: React.FC<LinkCardProps> = ({
	id,
	fullLink,
	shortenedLink,
	isCopied,
	onCopy,
}) => {
	return (
		<div id={id.toString()} className='link__card'>
			<div className='link__card-top'>
				<p className='link__card-top-full-link'>{fullLink}</p>
			</div>
			<div className='link__card-bottom'>
				<p className='link__card-bottom-shortened-link'>{shortenedLink}</p>
				<Button
					text={!isCopied ? 'Copy' : 'Copied!'}
					className={`link__card-btn squared-btn ${
						!isCopied ? 'action-btn' : 'copied-btn'
					}`}
					type='button'
					onClick={onCopy}
				/>
			</div>
		</div>
	);
};

export default LinkCard;
