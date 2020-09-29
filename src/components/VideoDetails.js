import React from 'react';
import { Paper, Typography } from '@material-ui/core';

function VideoDetails({ video }) {
	if (!video) return <div>Loading... </div>;
	console.log(video);
	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	console.log(videoSrc);
	return (
		<>
			<Paper elevation={6} style={{ height: '50%' }}>
				<iframe height='100%' width='100%' frameBorder='0' title='Video Player' src={videoSrc} />
			</Paper>
			<Paper elevation={6} style={{ padding: '15px' }}>
				<Typography variant='h4'>
					{video.snippet.title} - {video.snippet.channelTitle}
				</Typography>
				<Typography variant='subtitle1'>{video.snippet.channelTitle}</Typography>
				<Typography variant='subtitle2'>{video.snippet.description}</Typography>
			</Paper>
		</>
	);
}

export default VideoDetails;
