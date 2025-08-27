import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2021 - 2025"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BSIT</h3>
            <h4 className="vertical-timeline-element-subtitle">
              RWU Satelite Town, PAK
            </h4>
            <p className="vertical-timeline-element-text">
              CGPA 3.12/4.00 (A Grade)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019 - 2021"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              FSC in Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              IMCG I-14/3, PAK
            </h4>
            <p className="vertical-timeline-element-text">82% (A1 Grade)</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2017 - 2019"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Matric in Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              F.G SIR SYED(Mall Road), PAK
            </h4>
            <p className="vertical-timeline-element-text">80% (A1 Grade)</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
