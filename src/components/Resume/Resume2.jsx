import React, { useEffect, useState } from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEnvelopeOpen,
  faGlobe,
  faLocation,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Resume2 = ({showDownload = true, inBuilder = false}) => {
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
    <div className='resume-container'>
      <div className='resume print:border-none print:m-0 border-2 border-black flex flex-col m-5 p-3  sm:gap-5'>

        <div className="section-A  h-60 flex justify-around items-center ">
          {
            resumeData.image && (
              <div className="section-AA   ">
                <img className="rounded-[32rem] h-44 w-44" src={resumeData.image} alt="Not found" />
              </div>
            )
          }
          <div className="section-AB ">
          {
            (resumeData.firstname || resumeData.lastname ) && (
              <h1 className="text-4xl font-medium text-cyan-600">
                {`${resumeData.firstname} ${resumeData.lastname}`}
              </h1>
            )
          }
            <p>{resumeData.title}</p>
          </div>
        </div>

        <div className="section-B">
          <div className="section-BA h-4 bg-cyan-600 mx-6 "></div>
        </div>

        <div className="section-C flex ">
          <div className="section-CA bg-cyan-600 mx-4 my-4 w-52 p-4  text-white ">

            {
              (resumeData.address || resumeData.contact || resumeData.email || resumeData.github) && (
                  <div className="section-CAA contacts  mb-6 grid gap-2">
      
                <h3 className="font-semibold text-[0.9rem]">CONTACTS</h3>

              {
                resumeData.address && (
                  <div className="text-sm ">
                    <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
                    {resumeData.address}
                  </div>
                )
              }
              {
                resumeData.contact && (
                  <div className="text-sm ">
                    <FontAwesomeIcon className="mr-2" icon={faPhone} />
                    {resumeData.contact}
                  </div>
                )
              }
              {
                resumeData.email && (
                  <div className="flex items-center break-words">
                    <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
                    <p className="w-24 break-words text-xs">{resumeData.email}</p>
                  </div>
                )
              }
            </div>
              )
            }
          


            {
              (resumeData.linkedin || resumeData.website || resumeData.twitter || resumeData.github) && (
                <>
                  <hr />
          
                  <div className="section-CAB my-4 grid gap-2 ">
                    <div>
                      <h3 className="font-semibold text-[0.9rem]  ">SOCIAL MEDIA</h3>
                    </div>
                    {
                      resumeData.website && (
                        <a className="text-sm" href={resumeData.website} target="_blank" >
                          <FontAwesomeIcon
                            className="sm:w-3 sm:h-3 mr-2"
                            icon={faGlobe}
                          />
                          Website
                        </a>
                      )
                    }
                    {
                      resumeData.linkedin && (
                        <a className="text-sm" href={resumeData.linkedin} target="_blank" >
                          <FontAwesomeIcon
                            className="sm:w-3 sm:h-3 mr-2"
                            icon={faLinkedin}
                          />
                          Linkedin
                        </a>
                      )
                    }
                    {
                      resumeData.github && (
                        <a className="text-sm" href={resumeData.github} target="_blank" >
                          <FontAwesomeIcon
                            className="sm:w-3 sm:h-3 mr-2"
                            icon={faGithub}
                          />
                          GitHub
                        </a>
                      )
                    }
                    
                    {
                      resumeData.twitter && (
                        <a className="text-sm" href={resumeData.twitter} target="_blank" >
                          <FontAwesomeIcon
                            className="sm:w-3 sm:h-3 mr-2"
                            icon={faTwitter}
                          />
                          Twitter
                        </a>
                      )
                    }
                  </div>
                </>

              )
            }
            {
              showSkills && (
                <>
                  <hr />
                  <div className="section-CAC my-4  grid gap-2">
                    <h3 className="font-semibold text-[0.9rem]">SKILLS</h3>
                    <div className="text-xs ">
                      <ul className="list-disc pl-4  grid gap-2">
                        {
                          resumeData.skills.map((skill, index) => {
                            if(!skill) return null;

                            return <li key={index}>{skill}</li>
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </>
              )
            }

          </div>

          <div className="section-CB w-full mr-2">

            {
              showExperience && (

                <div className="section-CBA experiences p-5 font-medium text-2xl ">
                  <h3 className=" font-bold">WORK EXPERINCE</h3>
                  {
                    resumeData.experience.map((exp, indx) => {

                      return (
                        <div className="experience" key={indx}>
                          <p className="text-sm ">{exp.position}</p>    
                          <p className="text-sm ">{exp.company}</p>          
                          <p className="text-sm">{exp.description}</p>
                        </div>
                      )
                    })
                  }
                </div>

              )
            }

            {
              showProjects && (
                <>
                
                  <div className=" bg-black"><hr /></div>
                              
                  <div className="section-CBB projects p-5 font-medium text-2xl  ">
                      <h3 className="font-bold">PROJECTS</h3>

                      {
                        resumeData.projects.map((project, index) => {

                          return (
                            <div className="project" key={index}>
                              <p className="text-lg font-medium">{project.name}</p>    
                              <p className="text-sm font-medium">{project.role}</p>          
                              <p className="text-sm font-xs">{project.description}</p>          
                            </div>
                          )
                          
                        })
                      }
                  </div>

                </>
              )
            }

            {
              showEducation && (
                <>

                  <div className=" bg-black"><hr /></div>

                  <div className="section-CBC educations px-5 pt-2 font-medium text-2xl ">
                    <div className="education">
                      <h3 className="font-bold">EDUCATION</h3>
                      <p className="text-lg font-medium">{resumeData.education.institute}</p>    
                      <p className="text-xs font-medium">{resumeData.education.degree}</p>           
                      <p className="text-xs font-medium">{resumeData.education.startYear}</p>          
                      <p className="text-xs font-medium">{resumeData.education.endYear}</p>          
                    </div>
                  </div>

                </>
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
  )
}

export default Resume2

