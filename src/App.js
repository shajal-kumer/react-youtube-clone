import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import youtube from './api/youtube';

import { SearchBar, VideoList, VideoDetails } from './components';

function App() {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const handleSubmit = async (searchTerm) => {
		const response = await youtube.get('search', {
			params: {
				part: 'snippet',
				maxResults: 5,
				q: searchTerm,
				key: 'AIzaSyAPzMjeD09aqJlzPgaBkFvUe_pr9doWLBo',
			},
		});
		setVideos(response.data.items);
		setSelectedVideo(response.data.items[0]);
	};

	const onVideoSelect = (video) => {
		setSelectedVideo(video);
	};

	useEffect(() => {
		handleSubmit('dj Snak');
	}, []);

	return (
		<Grid style={{ justifyContent: 'center' }} container spacing={5}>
			<Grid item xs={11}>
				<Grid container spacing={5}>
					<Grid item xs={12}>
						<SearchBar onFormSubmit={handleSubmit} />
					</Grid>
					<Grid item xs={8}>
						<VideoDetails video={selectedVideo} />
					</Grid>
					<Grid item xs={4}>
						<VideoList videos={videos} onSelectVideo={onVideoSelect} />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default App;
