import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import './App.css';

import Login from './Pages/Login/login';
import { getTokenFromUrl } from './Spotify/spotify.utils';
import Player from './Pages/Player/player';
import { useDataLayerValue } from './StateManagement/DataLayer';

//creating an instance of spotify in our app
const spotify = new SpotifyWebApi();

function App() {
	//to grab anything from data layer and update it.
	const [{ user, token }, dispatch] = useDataLayerValue();

	//hook to run code based on given condition
	useEffect(() => {
		const hash = getTokenFromUrl();
		//hide access token from Url for security reasons
		window.location.hash = '';
		const _token = hash.access_token;

		if (_token) {
			dispatch({
				//storing the token inside data layer
				type: 'SET_TOKEN',
				token: _token,
			});

			spotify.setAccessToken(_token);
			//getting user account from spotify and dispatching it to data layer
			spotify.getMe().then((user) => {
				dispatch({
					type: 'SET_USER',
					user: user,
				});
			});

			//pulling user playlists from spotify and dispatching it to data layer
			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: 'SET_PLAYLISTS',
					playlists: playlists,
				});
			});

			//pulling on repeat playlist from som spotify and dispatch it to data layer
			spotify.getPlaylist('37i9dQZF1Epnx93uikPcJj').then((response) => {
				dispatch({
					type: 'SET_ON_REPEAT',
					on_repeat: response,
				});
			});
		}
	}, []);

	return (
		<div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>
	);
}

export default App;
