export interface FormError {
	isError: boolean;
	errorMsg: string;
}

export interface ShortenedLink {
	id: number;
	fullLink: string;
	shortenedLink: string;
}

export class ResponseLink implements ShortenedLink {
	id: number;
	fullLink: string;
	shortenedLink: string;

	constructor(id: number, fullLink: string, shortenedLink: string) {
		this.id = id;
		this.fullLink = fullLink;
		this.shortenedLink = shortenedLink;
	}
}
