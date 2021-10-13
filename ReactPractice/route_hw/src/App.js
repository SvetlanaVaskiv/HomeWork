import logo from './logo.svg';
import './App.css';
import { MovieList } from './component/MovieList';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotFound } from './pages/NotFound'
import { MovieDetails } from './pages/MovieDetails';
import { Movie } from './pages/Movie';

function App() {
	return (
		<Switch>
			<Route exact path='/' component={Movie} />
			<Route path='/:id' component={MovieDetails} />
			<Route component={NotFound} />

		</Switch>
	);
}

export default App;
