import { useState } from 'react';
import LinkCard from './LinkCard';

import './LinksList.scss';

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
	const [copiedId, setCopiedId] = useState<null | number>(null);

	const copyLinkHandler = (id: number, text: string) => {
		setCopiedId(id);
		navigator.clipboard.writeText(text);
	};

	return (
		<ul className='links-list'>
			{dummyData.map((data) => (
				<LinkCard
					key={data.id}
					id={data.id}
					fullLink={data.fullLink}
					shortenedLink={data.shortenedLink}
					isCopied={copiedId === data.id}
					onCopy={() => copyLinkHandler(data.id, data.shortenedLink)}
				/>
			))}
		</ul>
	);
};

export default LinksList;
