// MessageParser starter code
// this is where all msg will go to first, so you can have very complicated pre-processing done
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const msg = message.toLowerCase();

      if(msg.includes("hello")){
          this.actionProvider.greet();
      }
    }
  }
  
  export default MessageParser;