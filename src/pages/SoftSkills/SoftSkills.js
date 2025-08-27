import React from "react";
import "../Techstack/Techstack.css";
import { motion } from "framer-motion";
import { TechstackList } from "../../utils/softSkills";


const SoftSkills = () => {
  return (
    <>
      <div className="container techstack" id="softskills">
        <motion.div
          animate={{
            scale: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 0.95, 1],
          }}
          transition={{
            times: [0, 0.2, 0.4, 0.5, 0.65, 0.75, 0.85, 1],
            duration: 1,
          }}
        >
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Soft Skills
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 Leveraging key soft skills to drive innovation and collaboration, including adaptability to new challenges, problem-solving, teamwork, effective communication, time management, and resilience in pursuing tech solutions.
          </p>
        </motion.div>
        <div className="row">
          {TechstackList.map((tech) => (
            <motion.div
              key={tech._id}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="col-md-3"
            >
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="alig-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SoftSkills;