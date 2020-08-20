// Config starter code
import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import Options from '../Components/Options/Options'

const config = {
  botName: "savour",
  initialMessages: [createChatBotMessage(`Hello world`,
  {
    widget:"options",
  }
  )],
  widgets:[
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
      
    },
  ],
}

export default config