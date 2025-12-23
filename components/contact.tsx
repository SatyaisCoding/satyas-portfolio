"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submitButton";
import toast from "react-hot-toast";


function Contact() {
  const { ref } = useSectionInView("Contact");


  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center mx-auto px-4 relative z-[1] mt-8"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-5 dark:text-white/80 mb-8">
        Please contact me directly at{" "}
        <a 
          className="underline font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors" 
          href="mailto:satya.sk.prakash@gmail.com"
        >
          satya.sk.prakash@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col items-center dark:text-black" action={async (formData) => {
        const {data, error} = await sendEmail(formData)
          if(error){
           toast.error(error)
              return;

          }
         toast.success('Email sent successfully!')
        }}>
        <input
          className="h-14 w-full rounded-lg px-4 borderBlack dark:bg-white/90 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
          aria-label="Your email address"
        />
        <textarea
          className="h-52 w-full my-3 rounded-lg borderBlack p-4 dark:bg-white/90 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm resize-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          aria-label="Your message"
        />
        <div className="w-full flex justify-center">
          <SubmitButton />
        </div>
      </form>
    </motion.section>
  );
}

export default Contact;