import React from 'react';
import {connect} from 'react-redux';

class SongList extends React.Component{
    render(){
        return(
            <div>Songlist</div>
        );
    };
}

export default connect()(SongList);