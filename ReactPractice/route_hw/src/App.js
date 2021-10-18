import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotFound } from './pages/NotFound'
import { MovieDetails } from './pages/MovieDetails';
import { Movies } from './pages/MoviesPage';
import { RootPage } from './pages/RootPage';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={RootPage} />
				<Route exact path='/movies' component={Movies} />
				<Route exact path='/movie/:id' component={MovieDetails} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;
