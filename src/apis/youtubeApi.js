import axios from 'axios';

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const key = process.env.REACT_APP_YOUTUBE_API_KEY || 'NO_API_KEY';

export default axios.create({
	baseURL: 'https://youtube.googleapis.com/youtube/v3',
	headers: {},
	params: {
		part: 'snippet',
		maxResults: 5,
		type: 'video',
		key
	}
});
