import React from "react"
import { Description, WrapperCard, Quantity, StatsList } from "./styleProfile"

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
					<span class="label"> Likes </span>
					<Quantity>{statsLikes}</Quantity>
				</li>
			</StatsList>
		</WrapperCard>

	)

}


