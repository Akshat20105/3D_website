import React,{useState} from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import ChatBotIcon from "./ChatBotIcon";
import ChatMessage from "./chatMessage";
import ChatForm from "./ChatForm";
import ReactMarkdown from "react-markdown";
import.meta.env.VITE_API_URL;
// const FeedbackCard = ({
//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className='bg-black-200 p-10 rounded-3xl xs:w-[160px] w-full'
//   >
//     <p className='text-white font-black text-[48px]'>"</p>

//     <div className='mt-1'>
//       {/* <p className='text-white tracking-wider text-[18px]'>{testimonial}</p> */}

//       <div className='mt-7 flex justify-between items-center gap-1'>
//         <div className='flex-1 flex flex-col'>
//           <p className='text-white font-medium text-[16px]'>
//             <span className='blue-text-gradient'>@</span> {name}
//           </p>
//           <p className='mt-1 text-secondary text-[12px]'>
//             {designation} of {company}
//           </p>
//         </div>

//         <img
//           src={image}
//           alt={`feedback_by-${name}`}
//           className='w-10 h-10 rounded-full object-cover'
//         />
//       </div>
//     </div>
//   </motion.div>
// );

const Feedbacks = () => {
  const [chatHistory,setchatHistory]=useState([]);
  const generateResponse=async(history,systemPrompt)=>{
    const updateHistory =(text)=>{
      setchatHistory(prev=>[...prev.filter(msg=>msg.text!=="typing..."),{role:"model",text}]);
    }
    // Prepend systemPrompt as a user message for context
    const contents = [
      { role: "user", parts: [{ text: systemPrompt }] },
      ...history.map(({ role, text }) => ({ role, parts: [{ text }] }))
    ];

    const requestOptions={
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents
      })
    };
    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if(!response.ok) throw new Error((data.error && data.error.message) || data.message || "Something went wrong!");
      const apiResponsetxt= data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim();
      updateHistory(apiResponsetxt);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="Feedbacks">
     
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[30vh] w-full min-w-[120vh] mx-auto`}>
         <motion.div>
       
        <ChatBotIcon/><h2 className={styles.sectionHeadText}>Akshara.</h2>
          <p className={styles.sectionSubText}>A ChatBot powered by Gemini</p>
          
          <div className="chatbot-body">
  <div className="message chatbot-message">
    <span style={{
      background: "#6d4fc2",
      borderRadius: "50%",
      width: "38px",
      height: "38px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "12px"
    }}>
      <ChatBotIcon style={{ width: "22px", height: "22px", fill: "#fff" }} />
    </span>
    <div className="message-text">
      <p>Hi! I am Akshara.<br />How can I help you?</p>
    </div>
  </div>
  {chatHistory.map((chat, index) => (
    chat.role === "model" ? (
      <div key={index} className="message model-message">
        <span style={{
          background: "#6d4fc2",
          borderRadius: "50%",
          width: "38px",
          height: "38px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "12px"
        }}>
          <ChatBotIcon style={{ width: "22px", height: "22px", fill: "#fff" }} />
        </span>
        <div className="message-text">
          <ReactMarkdown>{chat.text}</ReactMarkdown>
        </div>
      </div>
    ) : (
      <div key={index} className="message user-message" style={{ justifyContent: "flex-end" }}>
        <div className="message-text">
          <ReactMarkdown>{chat.text}</ReactMarkdown>
        </div>
      </div>
    )
  ))}
</div>
                <div className="chat-input">
                  <ChatForm 
                    chatHistory={chatHistory} 
                    generateResponse={generateResponse} 
                    setchatHistory={setchatHistory} 
                    className="w-full"
                  />
                </div>
        </motion.div>
      </div>

    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
