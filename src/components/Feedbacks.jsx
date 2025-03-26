import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import ChatBotIcon from "./ChatBotIcon";

import ChatForm from "./ChatForm";
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[160px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      {/* <p className='text-white tracking-wider text-[18px]'>{testimonial}</p> */}

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  // const [chatHistory,setchatHistory]=useState([]);
  return (
    <div className="Feedbacks">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] min-w-[300px]`}
      >
        <motion.div>
       
        <ChatBotIcon/><h2 className={styles.sectionHeadText}>Akshara.</h2>
          <p className={styles.sectionSubText}>A ChatBot powered by Grok.AI</p>
          
          <div className="chatbot-body">
                <div className="message chatbot-message">
                <ChatBotIcon/>
                  <p className="text-black chat">Hi! I am Akshara. How can I help you?</p>
                </div>
                {/* {chatHistory.map((chat,index)=>(
                  // <chatMessage/>
                ))}; */}
                <div className="message user-message mx-10"> 
                  <p className="chat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae, nostrum similique explicabo ipsum ipsa. Autem doloribus, earum, iusto ea quae adipisci id, dolor voluptatibus saepe ducimus aut est rerum.</p>
                </div>
                
                </div>
                <div className="chat-input">
                  <ChatForm chatHistory={setchatHistory}/>
                </div>
        </motion.div>
      </div>


      {/* <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
