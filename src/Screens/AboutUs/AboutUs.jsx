import React from 'react'
import lawyer from './Lawyerpic.png'
import './Aboutus.css'
import Layout from '../Layout'
import { motion } from 'framer-motion'
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
} from './motion'

const Aboutus = () => {
    return (
        <>
            <title>ABoutUs Page</title>
            <meta
                name="description"
                content="About Jurident and it's objective"
            />

            <motion.div className="container1" {...slideAnimation('up')}>
                <div className="newstitle">
                    <div className="newsline"></div>
                    <h1 className="heading">About Us</h1>
                    <div className="newsline"></div>
                </div>

                <div class="newsheader">
                    <div class="newsheaderleftitem">
                        No. 49,367
                    </div>
                    <div class="newsheadercenteritem">
                        A FRIEND FOR ALL YOUR LEGAL NEEDS !
                    </div>
                    <div class="newsheaderrightitem">21/01/2024</div>
                </div>

                <div className='bluebar'>
                  Jurident - Legal App - Bestselling Application - Law Simulator - Practical Law - Legal Buddy - Jurident
                </div>

                <div className="newstext">
                    <div className="col1">
                        <p className="para">
                            Jurident is a cutting-edge application designed for
                            legal professionals and law students. It offers
                            comprehensive solutions to enhance efficiency and
                            services, empowering lawyers, law firms, and
                            students. With a focus on bridging theory and
                            practice, Jurident equips students with essential
                            tools for success, streamlining schedules, aiding in
                            document generation, and offering collaborative
                            learning platforms in law colleges. Beyond
                            academics,
                        </p>
                        <img
                            src={lawyer}
                            alt="lawyer"
                            className="imglawyer"
                            width="60%"
                            height="60%"
                            
                        />
                    </div>
                    <div className="col2" >
                        <p className="para">
                            Jurident prepares students for real legal careers by
                            simulating practical scenarios, facilitating
                            document management, time tracking, and providing
                            access to legal information. It also includes free
                            courses from Lawyers for student guidance.
                            Additionally, Jurident enables clients to find
                            lawyers and seek advice, offering substantial
                            revenue potential. Its strategic distribution in law
                            colleges enhances learning experiences while
                            generating valuable business revenue through
                            subscriptions for students, lawyers, and clients.
                        </p>
                        <p className="para">
                            In essence, Jurident revolutionizes LegalTech by
                            offering solutions like blockchain-secured records,
                            document templates, bare acts, and tailored support
                            features for law students and clients. Join us in
                            reshaping India's legal ecosystem!
                        </p>
                    </div>
                </div>
                <div className="newsfooter"></div>
            </motion.div>
            <div className="line"></div>
        </>
    )
}

export default Aboutus
