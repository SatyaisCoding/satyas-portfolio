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
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
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
      <p className="text-gray-700 -mt-5 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:satya.sk.prakash@gmail.com">
          satya.sk.prakash@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col dark:text-black" action={async (formData) => {
        const {data, error} = await sendEmail(formData)
          if(error){
           toast.error(error)
              return;

          }
         toast.success('Email sent successfully')
        }}>
        <input
          className="h-14 rounded-lg px-4 borderBlack orderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4  dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}

export default Contact;