import Nav from './components/Layout/Nav';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';

const App = () => {
	return (
		<div className='wrapper'>
			<Nav />
			<Header />
			<Main />
			<Footer />
		</div>
	);
};

export default App;
