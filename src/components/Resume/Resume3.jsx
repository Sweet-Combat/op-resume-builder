import React, { useEffect, useState } from 'react'
import './styles.css'
import { useSelector } from 'react-redux'
import { faGithub, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Resume3 = ({showDownload = true}) => {
  const [showSkills, setShowSkills] = useState(false);
  const [showActivities, setShowActivities] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const resumeData = useSelector(state => state.resumeData.value);

  useEffect(() => {

    resumeData.skills.map((skill) => {
      if (skill) {
        setShowSkills(true)
      }
    })

    resumeData.activities.map((activity) => {
      if (activity) {
        setShowActivities(true)
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
  }, [])


  return (
    <div className='resume-container'>
      <div className='resume print:border-none print:m-0 border-2border-black flex flex-col m-5 p-3  sm:gap-5'>
        <div className='header w-full flex justify-between pb-1 sm:pb-4 border-b-2 sm:border-b-4 border-red'>
          <div>
            <h1 className='font-bold  text-2xl sm:text-3xl md:text-5xl lg:text-7xl uppercase text-red '>3. {resumeData.firstname} {resumeData.lastname}</h1>
            <div className='font-semibold text-red text-[10px] sm:text-sm'>
              <p>{resumeData.address}</p>
              <p>{resumeData.phoneNo}
                {
                  (resumeData.phoneNo && resumeData.email) && (
                    <span> | </span>
                  )
                }
                {resumeData.email}</p>
            </div>

          </div>
          <div className=' place-self-end'>
            <div className='social-icons pt-2 flex gap-1 sm:gap-4'>
              {
                resumeData.website && (
                  <a className='text-blue' href={resumeData.website} target='_blank'><FontAwesomeIcon className='sm:w-7 sm:h-7' icon={faGlobe} /></a>
                )
              }
              {
                resumeData.linkedin && (
                  <a className='text-blue' href={resumeData.linkedin} target='_blank'><FontAwesomeIcon className='sm:w-7 sm:h-7' icon={faLinkedin} /></a>
                )
              }
              {
                resumeData.twitter && (
                  <a className='text-sky-400' href={resumeData.twitter} target='_blank'><FontAwesomeIcon className='sm:w-7 sm:h-7' icon={faTwitterSquare} /></a>
                )
              }
              {
                resumeData.github && (
                  <a className='text-black' href={resumeData.github} target='_blank'><FontAwesomeIcon className='sm:w-7 sm:h-7' icon={faGithub} /></a>
                )
              }


            </div>
          </div>
        </div>
        {
          (resumeData.objective) && (
            <div className='objective border-b-2 sm:border-b-4 border-red pb-1 sm:pb-4'>
              <h2 className=' text-red font-bold text-2xl sm:text-4xl  sm:pb-4 uppercase '>objective</h2>
              <p className='font-semibold text-[10px] sm:text-sm'>{resumeData.objective}</p>

            </div>
          )
        }

        {
          showEducation && (
            <div className='education-section pb-1 sm:pb-4 border-b-2 sm:border-b-4 border-red'>
            <h2 className=' text-red font-bold text-2xl sm:text-4xl  sm:pb-4 uppercase '>Education</h2>

            <div className='education font-semibold'>
              <div className='flex justify-between'>
                <div>
                  <span className='font-bold'>{resumeData.education.degree}</span>
                  {
                    resumeData.education.degree && resumeData.education.institute && (
                      <span> | </span>
                    )
                  }
                  {resumeData.education.institute}
                </div>
                <div className='text-[10px] sm:text-normal'>{resumeData.education.startYear}
                  {
                    resumeData.education.startYear && resumeData.education.endYear && (
                      <span> - </span>
                    )
                  }
                  {resumeData.education.endYear}</div>
              </div>
              <p className='text-[10px] sm:text-sm'>{resumeData.education.description}</p>
            </div>
            </div>
          )
        }
        
        { 
          showExperience && (
            <div className='experience-section sm:pb-4 border-b-2 sm:border-b-4 border-red'>
              <h2 className=' text-red font-bold text-2xl sm:text-4xl  sm:pb-4 uppercase '>Experience</h2>
              {
                resumeData.experience.map((exp, indx) => {
                  return (
                    <div className='experience font-semibold' key={indx}>
                      <div className='flex justify-between' >
                        <div>
                          <span>{exp.position}</span>
                          {
                            exp.position && exp.company && (
                              <span> | </span>
                            )
                          }
                          {exp.company}
                        </div>
                        <div className='text-[10px] sm:text-normal'>{exp.startYear}
                          {
                            exp.startYear && exp.endYear && (
                              <span> - </span>
                            )
                          }

                          {exp.endYear}</div>
                      </div>
                      <p className='pb-1 sm:pb-4 text-[10px] sm:text-sm'>{exp.description}</p>
                    </div>
                  );
                })
              }
            </div>
          )
        }
        {
          showSkills && (
            <div className="w-full skills pb-1 sm:pb-4 border-b-2 sm:border-b-4 border-red">
              <h2 className=' text-red font-bold text-2xl sm:text-4xl  sm:pb-4 uppercase'>Skills</h2>
              <div className="w-full grid grid-cols-3 font-semibold">
                {
                  resumeData.skills.map((skill, indx) => {
                    if (!skill) {
                      return null;
                    }

                    return (
                      <li key={indx} className='text-[10px] sm:text-sm'>
                        {skill}
                      </li>
                    );
                  })
                }

              </div>
            </div>
          )
        }


        {
          showActivities && (
            <div className="activities">
              <h2 className=' text-red font-bold text-2xl sm:text-4xl  sm:pb-4 uppercase '>Activities</h2>
              {
                resumeData.activities.map((activity, indx) => {

                  if (!activity) {
                    return null;
                  }

                  return (
                    <li className='sm:pb-2 w-full font-semibold text-[10px] sm:text-sm' key={indx}>
                      {activity}
                    </li>
                  );

                })
              }
            </div>
          )
        }

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

export default Resume3

