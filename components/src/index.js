import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div className="ui constainer comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Mike
                    </a>
                    <div className="metadata">
                        <span className="date">6:00pm</span>

                    </div>
                    <div className="text">
                        hihihihi
                    </div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App/>,document.querySelector('#root'));