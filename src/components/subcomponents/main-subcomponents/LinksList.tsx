import { useState, useContext } from 'react';
import LinkCard from './LinkCard';
import { LinkContext } from '../../../context/link-context';

import './LinksList.scss';

const LinksList = () => {
	const [copiedId, setCopiedId] = useState<null | number>(null);

	const linkCtx = useContext(LinkContext);

	const copyLinkHandler = (id: number, text: string) => {
		setCopiedId(id);
		navigator.clipboard.writeText(text);
	};

	return (
		<ul className='links-list'>
			{linkCtx.shortenedLinks.map((link) => (
				<LinkCard
					key={link.id}
					id={link.id}
					fullLink={link.fullLink}
					shortenedLink={link.shortenedLink}
					isCopied={copiedId === link.id}
					onCopy={() => copyLinkHandler(link.id, link.shortenedLink)}
				/>
			)).reverse()}
		</ul>
	);
};

export default LinksList;
