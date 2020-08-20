// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    greet = () =>{
        const msg = this.createChatBotMessage("Hi there!");
        this.addMessageToState(msg);
    }

    addMessageToState = (message) =>{
        this.setState((prevState) =>({
            ...prevState,
            messages:[...prevState.messages,message],
        }));
    }

}
  
export default ActionProvider;