import logo from './logo.svg';
import './App.css';
import { MovieList } from './component/MovieList';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotFound } from './pages/NotFound'
import { MovieDetails } from './pages/MovieDetails';
import { Movies } from './pages/MoviesPage';
import { RootPage } from './pages/RootPage';

function App() {
	return (
		<Switch>
			<Route exact path='/' component={RootPage} />
			<Route exact path='/movies' component={Movies} />
			<Route exact path='/movie/movie:id' component={MovieDetails} />
			<Route component={NotFound} />

		</Switch>
	);
}

export default App;
