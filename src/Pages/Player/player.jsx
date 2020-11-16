import React from 'react';

import Sidebar from '../../Components/Sidebar/sidebar';
import Body from '../../Components/Body/body';
import Footer from '../../Components/Footer/footer';

import './player.css';

function player({ spotify }) {
	return (
		<div className="player">
			<div className="player-body">
				<Sidebar />
				<Body spotify={spotify} />
			</div>
			<Footer />
		</div>
	);
}

export default player;
