import React from "react";
import "./About.css";
import profile from "../../assets/images/profile_pic.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
      >
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={profile} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I'm Easha Zeb Satti, a recent BSIT graduate from Rawalpindi Women University, driven by a deep passion for technology and its potential to transform lives. I’m committed to growing my skills in AI, data science, and full-stack development, with a goal to master cutting-edge tools and contribute to innovative solutions that address global challenges.
My journey is fueled by a desire to make a meaningful impact, pushing me to pursue international opportunities such as internships, scholarships, and freelancing roles. I’m eager to excel in diverse environments, honing my abilities while collaborating on projects that inspire change. With a strong foundation in Python, ML, NLP, and web technologies, I aim to build a career that blends technical expertise with a global perspective.
Let’s connect to explore opportunities or ideas that can shape the future together!
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;