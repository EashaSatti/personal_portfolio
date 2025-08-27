import React from "react";
import "../Projects/Projects.css";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <div className="container project" id="services">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Services
        </h2>
        <hr />
        <p className="pb-3 text-center">
          I am dedicated to crafting cutting-edge tech solutions with my expertise in AI, data science, and web development. Explore my services below and visit the projects section to see my work in action!
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <motion.div
            initial={{ rotate: 360, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="d-flex flex-row flex-wrap"
          >
            <div className="col-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://markoskills.com/wp-content/uploads/2025/04/full-pro.jpg"
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
                    <h6 className="text-uppercase">Full-stack Website Development</h6>
                    <p className="text-muted small mt-2">Building responsive web applications with front-end flair (HTML, CSS, React) and back-end functionality, tailored to client needs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.jpg?s=612x612&w=0&k=20&c=AcxzQAe1LY4lGp0C6EQ6reI7ZkFC2ftS09yw_3BVkpk="
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Python</span>
                  <span className="card-detail-badge">ML</span>
                  <span className="card-detail-badge">NLP</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">AI-Powered Data Solutions</h6>
                    <p className="text-muted small mt-2">Designing intelligent data models and visualizations to solve complex problems.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://imageio.forbes.com/specials-images/imageserve/67e252b93cf4dd3365504649/AI-agents-represent-the-next-evolutionary-leap-beyond-generative-AI--capable-of/960x0.jpg?format=jpg&width=960"
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Python</span>
                  <span className="card-detail-badge">AI</span>
                  <span className="card-detail-badge">NLP</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">AI Agent Development</h6>
                    <p className="text-muted small mt-2">Building smart, interactive agents like voice assistants to automate and enhance tasks.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;