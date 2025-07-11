import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope,FaGithub,FaPhone,FaLinkedin} from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .send(
  //       import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  //       import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  //       {
  //         from_name: form.name,
  //         to_name: "JavaScript Mastery",
  //         from_email: form.email,
  //         to_email: "sujata@jsmastery.pro",
  //         message: form.message,
  //       },
  //       import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  //     )
  //     .then(
  //       () => {
  //         setLoading(false);
  //         alert("Thank you. I will get back to you as soon as possible.");

  //         setForm({
  //           name: "",
  //           email: "",
  //           message: "",
  //         });
  //       },
  //       (error) => {
  //         setLoading(false);
  //         console.error(error);

  //         alert("Ahh, something went wrong. Please try again.");
  //       }
  //     );
  // };

  return (
    <div
      className={`xl:mt-2 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-auto bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p> 
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="flex flex-col gap-4">
  <div className="flex items-center gap-2">
    <FaEnvelope className="text-white text-2xl" />
    <a href="mailto:akshatraj22@iitk.ac.in" className="text-white text-sm">
      akshatraj22@iitk.ac.in
    </a>
  </div>
  <div className="flex items-center gap-2">
    <FaEnvelope className="text-white text-2xl" />
    <a href="mailto:akshatraj20105@gmail.com" className="text-white text-sm">
      akshatraj20105@gmail.com
    </a>
  </div>
  <div className="flex items-center gap-2">
    <FaGithub className="text-white text-2xl" />
    <a href="https://github.com/Akshat20105" className="text-white text-sm">
      Akshat20105
    </a>
  </div>
  <div className="flex items-center gap-2">
    <FaLinkedin className="text-white text-2xl" />
    <a href="https://linkedin.com/in/Akshat20105" className="text-white text-sm">
      Akshat Raj
    </a>
  </div>
  <div className="flex items-center gap-2">
    <FaPhone className="text-white text-2xl" />
    <a href="tel:+91-964-826-4084" className="text-white text-sm">
      +91-964-826-4084
    </a>
  </div><div className="flex items-center gap-2">
    <FaRegFileLines className="text-white text-2xl" />
    <a href="https://1drv.ms/b/c/930EAA556B035C78/EUBayi3atIhMi3S2bv9jQbcBVwwcU9USvjBzZjjpv1kmQA?e=Zqgb3L" className="text-white text-sm">
      Resume
    </a>
  </div>
</div>
        {/* <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form> */}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
