import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
// import Resume from "../../assets/docs/resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  const [theme, setTheme] = useTheme();
  // handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 4 }}
          >
            <h2>Hi 👋 I'm</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["Easha Zeb Satti", "Full-Stack Developer","AI Enthusiast"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://www.linkedin.com/in/easha-zeb-s-91b79823a/"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              {/* <a
                className="btn btn-cv"
                href={Resume}
                // download="Easha's Resume.pdf"
              >
                My Resume
              </a> */}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;