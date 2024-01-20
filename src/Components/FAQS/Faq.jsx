import React from "react";
import Accordion from "./Accordion";
import { accordionData } from "./Content";
import "./Faq.css";
import { motion } from "framer-motion";
import { slideAnimation } from "../../Screens/AboutUs/motion";

const Faq = () => {
  return (
    <motion.div {...slideAnimation('left')}>
      <h1 className="faq1">FAQ</h1>
      <h1 className="faq2">Frequently Asked Questions</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))}
      </div>
    </motion.div>
  );
};

export default Faq;
