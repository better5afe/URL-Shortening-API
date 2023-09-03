interface LinkCardProps {
	id: number;
	fullLink: string;
	shortenedLink: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ id, fullLink, shortenedLink }) => {
	return <p>Card</p>;
};

export default LinkCard;
