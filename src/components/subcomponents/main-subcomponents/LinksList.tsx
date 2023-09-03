import LinkCard from './LinkCard';

const dummyData = [
	{
		id: Math.random(),
		fullLink: `https://www.frontendmentor.io`,
		shortenedLink: `https://rel.link/k4lKyk`,
	},
	{
		id: Math.random(),
		fullLink: `https://www.twitter.com`,
		shortenedLink: `https://rel.link/njgjd62`,
	},
];

const LinksList = () => {
	return (
		<ul>
			{dummyData.map((data) => (
				<LinkCard
					key={data.id}
					id={data.id}
					fullLink={data.fullLink}
					shortenedLink={data.shortenedLink}
				/>
			))}
		</ul>
	);
};

export default LinksList;
