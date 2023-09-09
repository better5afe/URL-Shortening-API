import { useState, useEffect } from 'react';
import { LinkContext } from './link-context';
import { FormError, ShortenedLink, ResponseLink } from '../models/models';

interface LinkContextProviderProps {
	children: React.ReactNode;
}

const LinkContextProvider: React.FC<LinkContextProviderProps> = ({
	children,
}) => {
	const [shortenedLinks, setShortenedLinks] = useState<ShortenedLink[]>([]);
	const [error, setError] = useState<FormError>({
		isError: false,
		errorMsg: '',
	});

	useEffect(() => {
		const savedLinksJSON = localStorage.getItem('shortenedLinks');

		if (savedLinksJSON) {
			const savedLinks = JSON.parse(savedLinksJSON);
			setShortenedLinks(savedLinks);
		}
	}, []);

	const linkRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([-.][a-zA-Z0-9]+)*\.[a-z]{2,}(:[0-9]{2,5})?(\/.*)?$/;

	const shortenLinkHandler = async (link: string) => {
		if (link.length > 0) {
			setError({ isError: false, errorMsg: '' });

			if (linkRegex.test(link)) {
				try {
					const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}
					`);

					if (!response.ok) {
						console.log(response);
						return;
					}

					const data = await response.json();

					const shortenedLink = new ResponseLink(
						Math.random(),
						data.result.original_link,
						data.result.full_short_link
					);

					setShortenedLinks([...shortenedLinks, shortenedLink]);

					const shortenedLinksJSON = JSON.stringify(shortenedLinks);

					localStorage.setItem('shortenedLinks', shortenedLinksJSON);
				} catch (error) {
					setError({
						isError: true,
						errorMsg: 'Something went wrong, please try again',
					});
				}
			} else {
				setError({ isError: true, errorMsg: 'Invalid link' });
			}
		} else {
			setError({ isError: true, errorMsg: 'Please add a link' });
		}
	};

	return (
		<LinkContext.Provider
			value={{
				shortenedLinks: shortenedLinks,
				error: error,
				shortenLinkHandler: shortenLinkHandler,
			}}
		>
			{children}
		</LinkContext.Provider>
	);
};

export default LinkContextProvider;
