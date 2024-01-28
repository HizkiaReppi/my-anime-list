'use client';

import Youtube from 'react-youtube';

const VideoPlayer = ({ youtubeId }) => {
	return (
		<>
			<Youtube
				videoId={youtubeId}
				onReady={event => event.target.pauseVideo()}
				opts={{
					height: '450',
					width: '100%',
				}}
			/>
		</>
	);
};

export default VideoPlayer;
