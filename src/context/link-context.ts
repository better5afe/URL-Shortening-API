import React from 'react';
import { FormError, ShortenedLink } from '../models/models';

interface LinkContextProps {
	shortenedLinks: ShortenedLink[];
	error: FormError;
	shortenLinkHandler: (link: string) => void;
}

export const LinkContext = React.createContext<LinkContextProps>({
	shortenedLinks: [],
	error: { isError: false, errorMsg: '' },
	shortenLinkHandler: () => {},
});
