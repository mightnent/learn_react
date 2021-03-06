import './VideoItem.css'
import React from 'react';

const VideoItem = ({video,onVideoSelect}) =>{
    return (
        <div onClick = {()=>onVideoSelect(video)} className="video-item item">
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header"><strong>{video.snippet.title}</strong></div>
                {/* <div className="description">{video.snippet.description}</div> */}
            </div>
            
        </div>
    );
};

export default VideoItem;