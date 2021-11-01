import './VideoDetail.css';
import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) return <div>Loading...</div>;

	const youtubeEmbed = (
		<iframe
			src={`https://www.youtube-nocookie.com/embed/${video.id.videoId}`}
			allowFullScreen
			title="Youtube Video"
			frameBorder="0"
			// allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		/>
	);

	return (
		<div className="video-detail">
			<div className="ratio ratio-16x9 mb-3">{youtubeEmbed}</div>
			<div className="card border-0">
				<div className="card-body  px-0">
					<h5 className="card-title">{video.snippet.title}</h5>
					<p className="card-text">{video.snippet.description}</p>
				</div>
			</div>
		</div>
	);
};

export default VideoDetail;
