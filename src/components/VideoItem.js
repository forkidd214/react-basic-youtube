import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div className="video-item" onClick={() => onVideoSelect(video)}>
			<div className="video-card card mb-3">
				<div className="row g-0">
					<div className="col-md-6 col-lg-4">
						<img
							className="video-img card-img-top rounded-start"
							src={video.snippet.thumbnails.medium.url}
							alt={video.snippet.title}
						/>
					</div>
					<div className="col-md-6 col-lg-8">
						<div className="video-card-body card-body px-2 py-2">
							<p className="card-text">
								<span className="fw-bolder d-block mb-1" href="#">
									{video.snippet.title}
								</span>
								{video.snippet.description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoItem;
