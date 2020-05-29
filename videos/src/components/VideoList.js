import React from 'react';
import VideoItem from './VideoItem';

//porps be same name as what you gave them in App
const VideoList  = ({videos,onVideoSelect}) =>{

    const renderedList = videos.map((video)=>{
        //the video here refers to the single video in the map
        //not the list of video in the state
        return <VideoItem key={video.id.videoId} onVideoSelect = {onVideoSelect} video={video}/>;
    });

    //props.video
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
};

export default VideoList;