import Button from '../../reusable/Button';

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
				className='form__btn action-btn'
				type='submit'
			/>
		</form>
	);
};

export default LinkForm;
