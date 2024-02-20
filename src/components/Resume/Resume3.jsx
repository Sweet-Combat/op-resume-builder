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

const Resume3 = ({ showDownload = true, inBuilder = false }) => {
  const [showSkills, setShowSkills] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const resumeData = useSelector(state => state.resumeData.value);

  useEffect(() => {

    resumeData.skills.map((skill) => {
      if (skill) {
        setShowSkills(true)
      }
    })

    Object.keys(resumeData.education).map((key) => {
      if (resumeData.education[key]) {
        setShowEducation(true)
      }
    })

    resumeData.experience.map((exp) => {
      Object.keys(exp).map((key) => {
        if (exp[key]) {
          setShowExperience(true)
        }
      })
    })

    resumeData.projects.map((project) => {
      Object.keys(project).map((key) => {
        if (project[key]) {
          setShowProjects(true)
        }
      })
    })

  }, [])



  return (
    <div className="resume-container">
      <div className="resume resume-3 print:border-none print:m-0 min-h-screen pt-5   sm:pt-16 border-2 border-black m-1">
        <div className="header print:px-0 grid grid-cols-2 border-b-4 border-t3-blue px-5 sm:px-20">
          <div className="">
            <h1 className="name text-t3-grey text-6xl ">{resumeData.firstname} {resumeData.lastname}</h1>
            <h2 className="title text-sky-600 text-3xl sm:py-3">
              {resumeData.title}
            </h2>
            <p className="objective font-semibold text-2xl">
              {resumeData.objective}
            </p>

          </div>
          <div className="justify-self-end text-[1.2rem] text-right flex flex-col gap-2 pb-2 sm:gap-3 sm:py-3">
            {
              resumeData.email && (
                <div className=" ">
                  {resumeData.email}
                  <FontAwesomeIcon className="mr-2 ml-2" icon={faEnvelope} />
                </div>
              )
            }
            {
              resumeData.contact && (
                <div className=" ">
                  {resumeData.contact}
                  <FontAwesomeIcon className="mr-2 ml-2" icon={faPhone} />
                </div>
              )
            }
            {
              resumeData.address && (
                <div className=" ">
                  {resumeData.address}
                  <FontAwesomeIcon className="mr-2 ml-2" icon={faLocationDot} />
                </div>
              )
            }
            {
              resumeData.linkedin && (
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
              )
            }
            {
              resumeData.github && (
                <a
                  className="text-black flex justify-end"
                  href={resumeData.github}
                  target="_blank"
                >
                  {resumeData.github}
                  <FontAwesomeIcon className="sm:w-7 sm:h-7 ml-2" icon={faGithub} />
                </a>
              )
            }

          </div>
        </div>

        <div className="sec-section print:px-0  grid grid-cols-2 sm:min-h-screen px-5 sm:px-20 py-5 sm:py-10 gap-3 sm:gap-10">
          <div className="sec-A ">
            {
              showExperience && (
                <div className="sec-AA mb-5 sm:mb-20">
                  <h3 className=" font-bold text-4xl ">WORK EXPERINCE</h3>
                  {
                    resumeData.experience.map((exp, indx) => {

                      if (!exp.position) return null;

                      return (
                        <div key={indx}>
                          <p className=" font-semibold text-3xl">{exp.position}</p>
                          <p className=" font-semibold text-3xl">{exp.company}</p>
                          <ul className="list-disc pl-6 text-lg">
                            <li className=" text-cyan-400">
                              <p className="text-black">
                                {exp.description}
                              </p>
                            </li>
                          </ul>
                        </div>
                      )
                    })
                  }

                </div>
              )
            }

            {
              showProjects && (
                <div className="sec-AB ">
                  <h3 className="font-bold text-3xl">PROJECT</h3>

                  {
                    resumeData.projects.map((project, index) => {



                      return (
                        <div key={index}>
                          <p className="font-semibold text-3xl">{project.name}</p>
                          <p className=" font-semibold text-3xl">{project.role}</p>

                          {
                            project.description && (

                              <ul className="list-disc pl-6 text-lg">
                                <li className=" text-cyan-400">
                                  <p className="text-black">
                                    {project.description}
                                  </p>
                                </li>

                              </ul>
                            )
                          }
                        </div>
                      )

                    })
                  }

                </div>
              )
            }

          </div>
          <div className="sec-B  flex flex-col justify-self-center w-full">

            {
              showEducation && (

                <div className="sec-BA mb-5 sm:mb-20">
                  <h3 className="font-bold text-3xl">EDUCATION</h3>
                  <p className="font-semibold text-3xl">
                    {resumeData.education.institute}
                  </p>
                  <p className=" text-3xl">{resumeData.education.degree}</p>
                  <p className="text-xs font-medium">{resumeData.education.startYear}</p>
                  <p className="text-xs font-medium">{resumeData.education.endYear}</p>
                  <div className="text-2xl font-medium">{resumeData.education.description}</div>
                </div>
              )
            }

            {
              showSkills && (

                <div className="sec-BB">
                  <h3 className="font-semibold text-4xl mb-4">SKILLS</h3>
                  <div className="text-lg ">
                    <ul className=" grid grid-cols-3 gap-2  w-full">
                      {

                        resumeData.skills.map((skill, index) => {
                          if (!skill) return null;

                          return (
                            <li key={index} className=" bg-cyan-400 text-white inline w-max p-2  rounded-lg">
                              {skill}
                            </li>
                          )
                        })
                      }

                    </ul>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>

      {
        showDownload && (
          <div className=' print:hidden  download my-8 flex justify-center w-full'>
            <button className='text-center bg-blue-200 text-white p-4 rounded-full ' onClick={() => {
              window.print()
            }} >Download Resume</button>
          </div>
        )
      }
    </div>
  );
};

export default Resume3;
