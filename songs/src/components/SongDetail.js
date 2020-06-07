import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({selectedSong}) =>{
    //conditional render
    if(!selectedSong){
        return <div><h2>Select a song to play</h2></div>
    }
    return(
        <div>
            <h2>Now Playing:</h2>
            <p>
                Title:{selectedSong.title}
                Duration:{selectedSong.duration}
            </p>
            
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {selectedSong : state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);