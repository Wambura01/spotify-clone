export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	//REMOVE after finishing developing*****
	/*token:
		'BQABeKbQ4epc1c_EJbykslUbZFoZ1c9MC7HSc8ZvfqjYT8MfZB7FzCigwUpkkIFaWGh3ZsrxGnIlnpD3FQNBT40MlOe5OTNib_mfmn_VltHsuembCNAAF30Yp_TqpVoMnzcZE2hY9dUcXinOchX2WsudlReLy8qf7nxg5zfg3FD_TvXF',
	*/
};

const reducer = (state, action) => {
	console.log(action);

	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};

		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			};

		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists,
			};

		case 'SET_ON_REPEAT':
			return {
				...state,
				on_repeat: action.on_repeat,
			};

		default:
			return state;
	}
};

export default reducer;
