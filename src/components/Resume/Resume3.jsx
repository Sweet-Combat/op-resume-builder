import React, { useEffect, useState } from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import {
  faGithub,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Resume3 = ({ showDownload = true }) => {
  const [showSkills, setShowSkills] = useState(false);
  const [showActivities, setShowActivities] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const resumeData = useSelector((state) => state.resumeData.value);

  useEffect(() => {
    resumeData.skills.map((skill) => {
      if (skill) {
        setShowSkills(true);
      }
    });

    resumeData.activities.map((activity) => {
      if (activity) {
        setShowActivities(true);
      }
    });

    Object.keys(resumeData.education).map((key) => {
      if (resumeData.education[key]) {
        setShowEducation(true);
      }
    });

    resumeData.experience.map((exp) => {
      Object.keys(exp).map((key) => {
        if (exp[key]) {
          setShowExperience(true);
        }
      });
    });
  }, []);

  return (
    <div className="resume-container">
      <div className="resume resume-3 min-h-screen  pt-16 ">
        <div className="header grid grid-cols-2 border-b-4 border-t3-blue px-20">
          <div className="">
            <h1 className="name text-t3-grey text-6xl ">{resumeData.firstname} {resumeData.lastname}</h1>
            <h2 className="role text-sky-600 text-3xl py-3">
              Computer Scientist?????-?????-
            </h2>
            <p className="objective font-semibold text-2xl">
            {resumeData.objective}
            </p>
          </div>
          <div className="justify-self-end text-[1.2rem] text-right flex flex-col gap-3 py-12">
            <div className=" ">
            {resumeData.email}
              <FontAwesomeIcon className="mr-2 ml-2" icon={faEnvelope} />
            </div>
            <div className="">
            {resumeData.phoneNo}
              <FontAwesomeIcon className="mr-2 ml-2" icon={faPhone} />
            </div>
            <div className=" ">
              {resumeData.address}
              <FontAwesomeIcon className="mr-2 ml-2" icon={faLocationDot} />
            </div>
            <a
              className="text-blue flex justify-end "
              href={resumeData.linkedin}
              target="_blank"
            >
              {resumeData.linkedin}
              <FontAwesomeIcon
                className="sm:w-7 ml-2 sm:h-7 "
                icon={faLinkedin}
              />
            </a>
            <a
              className="text-black flex justify-end"
              href={resumeData.github}
              target="_blank"
            >
              {resumeData.github}
              <FontAwesomeIcon className="sm:w-7 sm:h-7 ml-2" icon={faGithub} />
            </a>
          </div>
        </div>
        <div className="sec-section  grid grid-cols-2 min-h-screen px-20 py-10">
          <div className="sec-A  mr-10">
            <div className="sec-AA mb-20">
              <h3 className=" font-bold text-4xl ">WORK EXPERINCE</h3>
              <p className=" font-semibold text-3xl">Postion</p>
              <p className=" font-semibold text-3xl">Company name</p>
              <ul className="list-disc  pl-6 text-lg">
                <h1 className="text-2xl text-cyan-400">Desc</h1>
                <li className="ml-4 text-cyan-400">
                  <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugit ut facilis sapiente!
                  </p>
                </li>
                <li className="ml-4 text-cyan-400">
                  <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugit ut facilis sapiente!
                  </p>
                </li>
              </ul>
            </div>
            <div className="sec-AB ">
              <h3 className="font-bold text-3xl">PROJECT</h3>
              <p className="font-semibold text-3xl">ProjectName</p>
              <p className=" font-semibold text-3xl">Postion</p>
              <ul className="list-disc pl-6 text-lg">
                <h1 className="text-2xl tex-cyan-400">Desc</h1>
                <li className="ml-4 text-cyan-400">
                  <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugit ut facilis sapiente!
                  </p>
                </li>
                <li className="ml-4 text-cyan-400">
                  <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugit ut facilis sapiente!
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="sec-B  ml-10 flex flex-col justify-self-center  w-full">
            <div className="sec-BA mb-32">
              <h3 className="font-bold text-3xl">EDUCATION</h3>
              <p className="font-semibold text-3xl">
              {resumeData.education.institute}
              </p>
              <p className=" text-3xl">{resumeData.education.degree}</p>
              <p className=" text-3xl">Cse</p>
              <p className="text-xs font-medium">{resumeData.education.startYear}</p>
              <p className="text-xs font-medium">{resumeData.education.endYear}</p>
              <div className="text-2xl font-medium">{resumeData.education.description}</div>
            </div>
            <div className="sec-BB">
              <h3 className="font-semibold text-4xl mb-4">SKILLS</h3>
              <div className="text-lg ">
                <ul className=" grid grid-cols-3 gap-2  w-full">
                  <li className="bg-cyan-400 text-white inline w-max p-2  rounded-lg">
                    Lorem ipsum dolor
                  </li>
                  <li className="bg-cyan-400 text-white inline w-max p-2  rounded-lg">
                    Lorem ipsum dolor
                  </li>
                  <li className="bg-cyan-400 text-white inline w-max p-2  rounded-lg">
                    Lorem ipsum{" "}
                  </li>
                  <li className="bg-cyan-400 text-white inline w-max p-2  rounded-lg">
                    Lorem ipsum dolor
                  </li>
                  <li className="bg-cyan-400 text-white inline w-max p-2  rounded-lg">
                    Lorem ipsum dolor
                  </li>
                  <li className="bg-cyan-400 text-white inline w-max p-2  rounded-lg">
                    Lorem ipsum{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume3;
