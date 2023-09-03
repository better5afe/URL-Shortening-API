import Button from '../../reusable/Button';
import FormBackgroundMobile from '../../../assets/icons/background-icons/FormBackgroundMobile';
import FormBackgroundDesktop from '../../../assets/icons/background-icons/FormBackgroundDesktop';

import './LinkForm.scss';

// class to be added to input on error: input-error

const LinkForm = () => {
	const shortenLinkHandler = (event: React.FormEvent) => {
		event.preventDefault();
		console.log('shortened');
	};

	return (
		<form className='form' onSubmit={shortenLinkHandler}>
			<div className='form__actions'>
				<input
					type='text'
					placeholder='Shorten a link here...'
					className='form__input'
				/>
				<p className='form__message'>Please add a link</p>
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
