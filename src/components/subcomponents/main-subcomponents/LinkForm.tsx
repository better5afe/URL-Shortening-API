import { useRef, useContext } from 'react';
import Button from '../../reusable/Button';
import FormBackgroundMobile from '../../../assets/icons/background-icons/FormBackgroundMobile';
import FormBackgroundDesktop from '../../../assets/icons/background-icons/FormBackgroundDesktop';
import { LinkContext } from '../../../context/link-context';

import './LinkForm.scss';

const LinkForm = () => {
	const linkCtx = useContext(LinkContext);

	const inputRef = useRef<HTMLInputElement | null>(null);

	let inputClass = 'form__input';
	let msgClass = 'form__message';
	let msg = linkCtx.error.errorMsg
		? linkCtx.error.errorMsg
		: 'Please add a link';

	if (linkCtx.error.isError) {
		msgClass = 'form__message form__message--error';
		inputClass = 'form__input form__input--error';
	}

	const shortenLinkHandler = (event: React.FormEvent) => {
		event.preventDefault();

		if (inputRef.current) {
			linkCtx.shortenLinkHandler(inputRef.current.value);
			inputRef.current.value = '';
		}
	};

	return (
		<form id='form' className='form' onSubmit={shortenLinkHandler}>
			<div className='form__actions'>
				<input
					type='text'
					placeholder='Shorten a link here...'
					className={inputClass}
					ref={inputRef}
				/>
				<p className={msgClass}>{msg}</p>
			</div>
			<Button
				text='Shorten it!'
				className='squared-btn action-btn'
				type='submit'
			/>

			<FormBackgroundMobile className='form__icon form__icon--mobile' />
			<FormBackgroundDesktop className='form__icon form__icon--desktop' />
		</form>
	);
};

export default LinkForm;
