//SongList component basically is our connector
import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends React.Component{

    renderList(){
        return this.props.songs.map((song)=>{
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render(){
        return(
            <div className="ui divided list">{this.renderList()}</div>
        );
    };
}

//named by convention
//state is everything in redux store
const mapStateToProps = (state) =>{
    console.log(state);
    return state
    
}
//in es2015 {a:a} = {a}
export default connect(mapStateToProps,{selectSong:selectSong})(SongList);