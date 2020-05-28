import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyB_gCL8DGRcY02R9BhxAICuLmQQU_eItFw';

class App extends React.Component{

    state = {videos:[]};

    onTermSubmit = async term =>{
        const res = await youtube.get('./search',{
            params:{
                q:term,
                part:'snippet',
                maxResults:5,
                key:KEY,
            }
        });

        this.setState({videos:res.data.items});
        
    };

    render(){
        return(
            <div className="ui container">
                <SearchBar onSubmit = {this.onTermSubmit}/>
                {this.state.videos.length} videos found
            </div>
        );
    }
}

export default App;