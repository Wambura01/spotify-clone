import React from 'react';

import { useDataLayerValue } from '../../StateManagement/DataLayer';
import Header from '../Header/header';
import SongRow from '../Songrow/songrow';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './body.css';

function Body({ spotify }) {
	const [{ on_repeat }, dispatch] = useDataLayerValue();
	return (
		<div className="body">
			<Header spotify={spotify} />

			<div className="body-info">
				<img src={on_repeat?.images[0].url} alt="" />
				<div className="body-infoText">
					<strong>PLAYLIST</strong>
					<h2>On Repeat</h2>
					<p>{on_repeat?.description}</p>
				</div>
			</div>
			<div className="body-songs">
				<div className="body-icons">
					<PlayCircleFilledIcon className="body-shuffle" />
					<FavoriteIcon fontSize="large" />
					<MoreHorizIcon />
				</div>
				{on_repeat?.tracks.items.map((item) => (
					<SongRow track={item.track} />
				))}
			</div>
		</div>
	);
}

export default Body;
