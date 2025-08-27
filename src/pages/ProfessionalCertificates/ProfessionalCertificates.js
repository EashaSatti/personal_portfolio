import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../Educations/Education.css";
const ProfessionalCertificates = () => {
  return (
    <>
      <div className=" education" id="experience">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Professional Experiences
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2024(September) - (December)"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Data Science Intern at Ezitech Software House RWP, PAK
            </h4>
            <p className="vertical-timeline-element-text">
              Duration: 3 Months
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2024(June) - (August)"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Remote Internship
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Frontend web developer at Interns.pk
            </h4>
            <p className="vertical-timeline-element-text">Duration: 6 weeks</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default ProfessionalCertificates;
