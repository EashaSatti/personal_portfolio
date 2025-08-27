import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Education from "./pages/Educations/Education"; // Fixed path typo
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import { motion } from "framer-motion";
import MobileNav from "./components/MobileNav/MobileNav";
import Courses from "./pages/Courses/Courses";
import ProfessionalCertificates from "./pages/ProfessionalCertificates/ProfessionalCertificates";
import Services from "./pages/Services/services";
import SoftSkills from "./pages/SoftSkills/SoftSkills";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer /> 
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Techstack />
          <Services />
          <ProfessionalCertificates />
          <Projects />
          <Education />
          <Courses />
          <SoftSkills/>
          <Contact />
        </div>

        <div className="footer pb-3 ms-3">
          <motion.div
            animate={{
              scale: [1, 0.9, 0.9, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1],
              rotate: [0, 0, -3, 3, -3, 3, -3, 3, -3, 0],
            }}
            transition={{
              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
              duration: 1,
            }}
          >
            <h4 className="text-center">Made With 😍 EashaSatti &copy; 2024</h4>
          </motion.div>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;