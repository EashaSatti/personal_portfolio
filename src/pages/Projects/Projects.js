import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          KEY PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center margin-set">
          I've developed a Food Delivery Website, a Music App, and a Simple
          Animated Website using HTML, CSS, React, and GSAP Animation Library.
          These projects highlight my skills in creating intuitive user
          interfaces and dynamic web experiences.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <motion.div
            initial={{ rotate: 360, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="d-flex flex-row flex-wrap margin-set"
          >
            <div className="col-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZk_vlE6g736NLjGedRNCDITHFtKyVjWs9PQ&s"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">React</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Food Delivery Website</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://eashasatti.github.io/Food-Delivery-ReactApp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full-stack</span>
                  <img
                    src="https://www.teneo.ai/_next/image?url=https%3A%2F%2Fteneo.fun%2Fwp-content%2Fuploads%2F2024%2F09%2FUnlocking-the-Power-of-Voice-AI-Chatbot-in-Enhancing-Customer-Service-Experiences.jpg&w=640&q=75"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">Python</span>
                  <span className="card-detail-badge">Sqlite3</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">AI Agent(Desktop)</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://1drv.ms/v/c/6e1a76e2aeb28287/ER8thnPuhSRDtxCjDEIpzsABVLWhZDn5EhmBWCYY_h1qNA?e=1gRLhA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVS7vIQPGaJe3KVkSWYxCTMR4Yia849h9mLw&s"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Reactjs</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Music App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://eashasatti.github.io/Spotify_Simple_Music_App/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNXFbrda1Ow-jzLQCeWgcUAbA33dIvKuctqw&s"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">
                    GSAP Animation library
                  </span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Simple animated Website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://eashasatti.github.io/Simple_webEffect_with_gsap-/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
             <div className="col-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5612AQEpXqDIhLDLVw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1701084371845?e=1761782400&v=beta&t=V01TjOc4NLOeUvX1JGGnVL5nugnIxK83I-hTmaa3bqs"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">streamlit</span>
                  <span className="card-detail-badge">python</span>
                  <span className="card-detail-badge">
                   Matplotlib,pandas
                  </span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Cricket Dashboard (Data visualization)</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://1drv.ms/v/c/6e1a76e2aeb28287/EUygjGskAzNDmO4wJlVONDcBvG7e5402c0X28bBEN-LkpQ?e=xeYRyx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>           
             <div className="col-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://daxg39y63pxwu.cloudfront.net/images/blog/sentiment-analysis-project-ideas-with-source-code/Top_Sentiment_Analysis_Project_Ideas.webp"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">NLP</span>
                  <span className="card-detail-badge">python</span>
                  <span className="card-detail-badge">
                   streamlit, sklearn
                  </span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Sentiment Analysis</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://1drv.ms/v/c/6e1a76e2aeb28287/EQ_JNbm_-nxIhCqCBKq54bcB1fI1JOjOYUoa4qOI6VWUAQ?e=UAHWww"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>           
             <div className="col-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://media.istockphoto.com/id/1283050796/vector/flat-design-under-construction-concept.jpg?s=612x612&w=0&k=20&c=CATQe8sEl7YdpwxZ4VHwYh5FjHY9MkbyRNhALyslZwA="
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">Bootstrap</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Contruction Website dashboard</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://1drv.ms/v/c/6e1a76e2aeb28287/EehQldPh0F9OllUooYAuKKMBp2R2dCT_wHUUk4RlD9u93g?e=vSGZib"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>           
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;