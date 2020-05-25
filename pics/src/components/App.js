import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';

class App extends React.Component{

    state ={images:[]};

    //async you cannot do arrow function for onSearchSubmit
    onSearchSubmit = async (term) => {
        //instead of going to axios.get, we do unsplash.get
        const res = await unsplash.get("/search/photos",{            
            params:{query:term}        
        });
        this.setState({images:res.data.results});
        
    };

    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    };
    
}

export default App;