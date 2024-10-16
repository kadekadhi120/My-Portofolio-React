import { CONTACT } from "../constants";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="my-10 text-center text-4xl">
        Get In Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="my-4">
          {CONTACT.address}
        </motion.p>
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="my-4">
          {CONTACT.phoneNo}
        </motion.p>
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=i.nugraha005@binus.ac.id&tf=cm&su=Feedback" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
