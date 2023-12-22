import React from "react";
import lawyer from "./Lawyerpic.jpeg";
import "./Aboutus.css";
import Layout from "../Layout";

const Aboutus = () => {
  return (
    <>
      <title>ABoutUs Page</title>
      <meta name="description" content="About Jurident and it's objective" />

      <div className="container1">
        <div className="col1">
          <img src={lawyer} alt="lawyer" className="img-lawyer" />
        </div>
        <div className="col2">
          <h1 className="heading">About Us</h1>
          <p className="para">
          Jurident is a cutting-edge application designed for legal professionals and law students. It offers comprehensive solutions to enhance efficiency and services, empowering lawyers, law firms, and students. With a focus on bridging theory and practice, Jurident equips students with essential tools for success, streamlining schedules, aiding in document generation, and offering collaborative learning platforms in law colleges.
Beyond academics, Jurident prepares students for real legal careers by simulating practical scenarios, facilitating document management, time tracking, and providing access to legal information. It also includes free courses from Lawyers for student guidance.
Additionally, Jurident enables clients to find lawyers and seek advice, offering substantial revenue potential. Its strategic distribution in law colleges enhances learning experiences while generating valuable business revenue through subscriptions for students, lawyers, and clients.
In essence, Jurident revolutionizes LegalTech by offering solutions like blockchain-secured records, document templates, bare acts, and tailored support features for law students and clients. 
Join us in reshaping India's legal ecosystem!
          </p>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
