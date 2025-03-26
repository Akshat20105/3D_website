import React from "react";
import ChatBotIcon from "./ChatBotIcon";
const ChatMessage=({chat})=>{
    return(
        <div className={`message ${chat.role==="model"?"chatbot":"user"}-message`}> 
        {chat.role==="model"&& <ChatBotIcon/>}
                  <p className="chat">{chat.text}</p>
                </div>
                
    )
}
export default ChatMessage