import React from 'react';
import ReactDOM from 'react-dom';

// create a component
const App = () => {
    return <div>hello world</div>;
};

//render it
ReactDOM.render(
    <App/>,document.querySelector('#root')
);
