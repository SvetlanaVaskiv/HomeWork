import React from "react";

import './theme/App.css';
import './theme/index.css'
import friendData from './friends.json';
import { FriendList } from './components/Friends'


function App() {
	return (
		<FriendList friend={friendData} />
	);
}

export default App;