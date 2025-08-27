import React, { useState } from "react";
import { toast } from "react-toastify";
// No need for axios anymore
import "./Contact.css";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { TbBrandFiverr } from "react-icons/tb";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !msg) {
      toast.error("Please provide all fields");
      return;
    }

    const formData = {
      access_key: "146b945e-41a2-495a-a01a-a7ce13f4bd99",  // Replace with the key from Web3Forms email
      name: name,
      email: email,
      message: msg,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error. Please check your internet and try again.");
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <motion.div
                    initial={{ x: -200, skewX: 30, opacity: 0 }}
                    animate={{ x: 0, skewX: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="contact"
                      className="image"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <motion.div
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <a
                          href="https://www.linkedin.com/in/easha-zeb-s-91b79823a/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsLinkedin color="blue" size={30} className="ms-2" />
                        </a>
                        <a
                          href="https://github.com/EashaSatti"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsGithub color="black" size={30} className="ms-2" />
                        </a>
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" onClick={handleSubmit}>
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;