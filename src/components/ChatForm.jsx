import React,{ useRef } from "react";
import ChatBotIcon from "./ChatBotIcon";
// import {generateResponse} from "./Feedbacks"
const ChatForm=({chatHistory,generateResponse,setchatHistory})=>{
    const inputRef=useRef();
    const handleformSubmit=(e)=>{
        e.preventDefault(); 
        const userMessage=inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value="";
        console.log(userMessage);
        setchatHistory((history)=>[...history,{role: "user", text: userMessage}]);
        setTimeout(()=>{setchatHistory((history)=>[...history,{role:"model",text:"typing..."}]);generateResponse([...chatHistory,{role:"user",text:userMessage}]);},600)
        
    };
    return(
        <form action="#" className="chat-form" onSubmit={handleformSubmit}>
                    <input ref={inputRef} type="text" placeholder="Type your message..." className="message-input text-black" required />
                    <button className="material-symbols-outlined">arrow_upward</button>
                  </form>
    )
}
export default ChatForm