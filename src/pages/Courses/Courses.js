import React from "react";
import "./courses.css";
import { motion } from "framer-motion";

const Courses = () => {
  return (
    <>
      <div className="container project certificates" id="certificates">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Certificates
        </h2>
        <hr />
        <p className="pb-3 text-center">
          I have earned certifications in Python for Data Science, AI, and
          Development from IBM, Creating a Website with WordPress from Coursera
          Project Network, Building a Full-Stack App with React and Express from
          Coursera Project Network, and AI for Everyone from DeepLearning.AI.
          These credentials reflect my expertise in data science, web
          development, and artificial intelligence.
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnLRpIDupqSOm_B-5DQkVj-fIUlBIs8KS8VA&s"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Ezitech Software House</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Data Science, AI Internship
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://1drv.ms/b/c/6e1a76e2aeb28287/EQ6hQT9WODdOlQ6fA7hv50QB5ZbViu-SnVgYAOxaYcWNOQ?e=Aa7UP3=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certificate
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR3bJe76FAg8eCS7YE8eLKgNGQWET9NUBpkA&s"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Interns.pk</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Web Developement Remote Internship
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://1drv.ms/b/c/6e1a76e2aeb28287/ERPgxcn6VH1GhxSGIF0WoPkBe068dQqigMXF3Ko5aHF1fw?e=7c8o7q=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certificate
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1WmVnFhpWmNP7q6iN5KxYsqgN7Dsud0czg&s"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">IBM</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Python for Data Science, AI and Development
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://drive.google.com/file/d/13whNmBzIHuzwdhDgeqZoSYJBTXJf6C6r/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certificate
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nRUSXE02uWUqKGUhPAMPF4Hi1kU21v3JRg&s"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">
                    COURSERA PROJECT NETWORK
                  </span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Create a Website Using Wordpress: Free Hosting and Domain
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://drive.google.com/file/d/1pZWZQCW8TJKm9lNdiHcRsZ7Npn2ImG2B/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certificate
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TvXYkd-i9L4TETD7NbFu5FEt8IKAYKTo9g&s"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">
                    COURSERA PROJECT NETWORK
                  </span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Build a Full-Stack App Using React and Express
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://drive.google.com/file/d/1nRx6eYY6aXi_XjxvWJhKQvazlRKt0InK/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certificate
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkS2Rp5xQgYaA9z48nTX-lglgNGM_yjBCJSA&s"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">DEEPLEARNING.AI</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">AI for Everyone</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://drive.google.com/file/d/1grKrW0e1uvMiXpvjH9PkuIBkeFoTN5KO/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certificate
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

export default Courses;