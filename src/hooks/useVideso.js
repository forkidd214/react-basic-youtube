import youtubeApi from '../apis/youtubeApi';
import { useState, useEffect } from 'react';

export default function useVideos(defautSearchKeyword) {
	const [ videos, setVideos ] = useState([]);

	useEffect(
		() => {
			search(defautSearchKeyword);
		},
		[ defautSearchKeyword ]
	);

	const search = async (keyword) => {
		try {
			const { data } = await youtubeApi.get('/search', { params: { q: keyword } });
			setVideos(data.items);
		} catch (err) {
			console.log('YOUTUBE API ERROR...', err.message);
		}
	};

	return [ videos, search ];
}
