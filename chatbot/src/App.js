import React from 'react';
import Chatbot from 'react-chatbot-kit';
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';
import Configs from './chatbot/Configs'

import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{maxWidth:"400px"}}></div>
      <Chatbot
        config = {Configs}
        actionProvider = {ActionProvider}
        messageParser = {MessageParser}
      />
    </div>
  );
}

export default App;
