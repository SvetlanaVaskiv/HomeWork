import React from "react"
import { Description, WrapperCard, Quantity, StatsList } from "./styleProfile"
import PropTypes from 'prop-types';

export const Profiles = ({ name, tag, location, avatar, statsFollowers, statsLikes, statsViews }) => {

	return (
		<WrapperCard>
			<Description >
				<img
					src={avatar}
					alt="Аватар пользователя"

				/>
				<p className="name">{name}</p>
				<p className="tag">{tag}</p>
				<p className="location">{location}</p>
			</Description>

			<StatsList>
				<li>
					<span className="label"> Followers </span>
					<Quantity>{statsFollowers}</Quantity>
				</li>
				<li>
					<span className="label"> Views </span>
					<Quantity>{statsViews}</Quantity>
				</li>
				<li>
					<span className="label"> Likes </span>
					<Quantity>{statsLikes}</Quantity>
				</li>
			</StatsList>
		</WrapperCard>

	)

}
Profiles.defaultProps = {
	name: 'Name',
	avatar: './Friends/image/somethingWentWrong.jpg'
}
Profiles.propTypes = {
	name: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	followers: PropTypes.number,
	views: PropTypes.number,
	likes: PropTypes.number
}

