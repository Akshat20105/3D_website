import { useRef } from "react";

const ChatForm=()=>{
    const inputRef=useRef();
    const handleformSubmit=(e)=>{
        e.preventDefault(); 
        const userMessage=inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value="";
        // setchatHistory((history)=>[...history,{role: "user", text: userMessage}]);
    }
    return(
        <form action="#" className="chat-form" onSubmit={handleformSubmit}>
                    <input ref={inputRef} type="text" placeholder="Type your message..." className="message-input text-black" required />
                    <button class="material-symbols-outlined">arrow_upward</button>
                  </form>
    )
}
export default ChatForm