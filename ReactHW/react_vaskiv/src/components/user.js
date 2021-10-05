import React from "react"

export const Profiles = ({ name, tag, location, avatar, statsFollowers, statsLikes, statsViews }) => {

	return (
		<div class="profile">
			<div class="description" >
				<img
					src={avatar}
					alt="Аватар пользователя"

				/>
				<p className="name">{name}</p>
				<p className="tag">{tag}</p>
				<p className="location">{location}</p>
			</div>

			<ul className="stats">
				<li>
					<span className="label">Followers</span>
					<span className="quantity">{statsFollowers}</span>
				</li>
				<li>
					<span className="label">Views</span>
					<span class="quantity">{statsViews}</span>
				</li>
				<li>
					<span class="label">Likes</span>
					<span class="quantity">{statsLikes}</span>
				</li>
			</ul>
		</div>
	)

}


