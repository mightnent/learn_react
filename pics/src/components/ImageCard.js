import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {spans : 0};
        this.imageRef = React.createRef();
    }

    //only after render
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpan);
    }

    setSpan = () =>{
        const height = this.imageRef.current.clientHeight;
        //ceil will round up
        const spans = Math.ceil(height/20)
        this.setState({spans:spans})
    }

    render(){
        //destructuring
        const {description,urls} = this.props.image
        return(
            <div style={{gridRowEnd:`span ${this.state.spans}`,textAlign:`center`}}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;