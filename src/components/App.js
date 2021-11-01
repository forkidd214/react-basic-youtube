import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVideos from '../hooks/useVideso';

export default function App() {
	const [ selectedVideo, setSelectedVideo ] = useState(null);
	const [ videos, search ] = useVideos('nba');

	useEffect(
		() => {
			setSelectedVideo(videos[0]);
		},
		[ videos ]
	);

	return (
		<div className="container mt-5">
			<SearchBar onSearchSubmit={search} />
			<div className="row">
				<div className="col-8">
					<VideoDetail video={selectedVideo} />
				</div>
				<div className="col-4">
					<VideoList videos={videos} onVideoSelect={setSelectedVideo} />
				</div>
			</div>
		</div>
	);
}
