import React from 'react';
import ReactDOM from 'react-dom';

// create a component
const App = () => {
    const buttonTxt = 'click'
    const style = {backgroundColor:'red',color:'white'}
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text"/>
            <button style={style}>
                {buttonTxt}
            </button>
        </div>
    );
};

//render it
ReactDOM.render(
    <App/>,document.querySelector('#root')
);
