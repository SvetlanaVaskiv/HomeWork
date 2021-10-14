import { Button } from "@mui/material";
import { ButtonStyle } from "../Styles/StyleBtn";
import { StyleCard } from '../Styles/StyleRootPage';



export const Root = ({ match, history }) => {
	const onGoForward = () => history.push('/movies');
	return (
		<StyleCard >
			<img
				src={`https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`}
				width='620'
			/>
			<ButtonStyle variant='contained' onClick={onGoForward}>Watch Movie</ButtonStyle>

		</StyleCard>
	)
}