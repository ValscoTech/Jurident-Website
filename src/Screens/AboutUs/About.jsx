import React from "react";

import Faq from "../../Components/FAQS/Faq";
import Aboutus from "./AboutUs";
import Layout from "../Layout";

const About = () => {
  return (
    <Layout>
      <Aboutus />
      <Faq />
    </Layout>
  );
};

export default About;
