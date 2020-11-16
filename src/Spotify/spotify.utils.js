//endpoint-where to send the user to login and authentication
export const authEndPoint = 'https://accounts.spotify.com/authorize';

//redirect to this link(homepage) after login
const redirectUri = 'http://localhost:3000/';

const clientId = 'c976616c49734155b99cfb61ea4f0eef';

//creating scopes for users
const scopes = [
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-read-playback-state',
	'user-top-read',
	'user-modify-playback-state',
];

//getting access token from response
export const getTokenFromUrl = () => {
	//go to url point with hash after login
	return window.location.hash
		.substring(1)
		.split('&')
		.reduce((initial, item) => {
			let parts = item.split('=');
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`;
