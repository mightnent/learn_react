import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyB_gCL8DGRcY02R9BhxAICuLmQQU_eItFw';

class App extends React.Component{

    state = {videos:[],selectedVideo:null};

    componentDidMount(){
        this.onTermSubmit('cat');
    }

    onTermSubmit = async term =>{
        const res = await youtube.get('./search',{
            params:{
                q:term,
                part:'snippet',
                maxResults:5,
                key:KEY,
            }
        });

        this.setState({
            videos:res.data.items,
            selectedVideo:res.data.items[0]
        });
        
    };

    onVideoSelect = (video) =>{
        //video is the prop that got passed up from child to parent
        this.setState({selectedVideo:video})
        
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onSubmit = {this.onTermSubmit}/>
                {this.state.videos.length} videos found
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                            <VideoDetail video = {this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect = {this.onVideoSelect} videos = {this.state.videos}/>
                        </div>

                    </div>

                </div>
                
                
            </div>
        );
    }
}

export default App;