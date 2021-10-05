import React from "react";

import './theme/App.css';
import './theme/index.css'
import friendData from './friends.json';
import { FriendList } from './components/Friends/FriendList'
import { Profiles } from "./components/Profile/user";
import userData from './user.json'
function App() {

	return (
		<>
			<FriendList friend={friendData} />
			<Profiles
				name={userData.name}
				tag={userData.tag}
				location={userData.location}
				avatar={userData.avatar}
				statsFollowers={userData.stats.followers}
				statsLikes={userData.stats.likes}
				statsViews={userData.stats.views}
			/>
		</>
	);
}


export default App;