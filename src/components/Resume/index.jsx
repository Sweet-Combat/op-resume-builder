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
  faGlobe,
  faLocation,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import image from "/full-katherine-langford.jpg";

const Resume = () => {
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
    <div className=" conatiner px-64 py-32 ">
      <div className="main-container mx-32 border-2 border-black">
        <div className="section-A  h-60 flex justify-around items-center ">
          <div className="section-AA   ">
            <img className="rounded-[32rem] h-44" src={image} alt="Not found" />
          </div>
          <div className="section-AB ">
            <h1 className="text-4xl font-medium text-cyan-600">
              KATHERINE LANGFORDS
            </h1>
            <p>FULL STACK WEB DEVLOPER</p>
          </div>
        </div>

        <div className="section-B">
          <div className="section-BA h-4 bg-cyan-600 mx-6 "></div>
        </div>

        <div className="section-C flex ">
          <div className="section-CA bg-cyan-600 mx-4 my-4 w-52 p-4  text-white ">
            <div className="section-CAA  mb-6 grid gap-2">
              <div>
                <h3 className="font-semibold text-[0.9rem]">CONTACTS</h3>
              </div>
              <div className="text-sm ">
                <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
                Location
              </div>
              <div className="text-sm ">
                <FontAwesomeIcon className="mr-2" icon={faPhone} />
                +919999555544
              </div>
              <div className="text-sm flex items-center w-2">
                <FontAwesomeIcon className="mr-2 " icon={faEnvelope} />
                <p className="w-28 break-words ">example1245634@gmail.com</p>
              </div>
            </div>
            <hr />
            <div className="section-CAB my-4 grid gap-2 ">
              <div>
                <h3 className="font-semibold text-[0.9rem]  ">SOCIAL MEDIA</h3>
              </div>
              <a className="text-sm ">
                <FontAwesomeIcon
                  className="sm:w-3 sm:h-3 mr-2"
                  icon={faLinkedin}
                />
                Linkedin
              </a>
              <a className="text-sm ">
                <FontAwesomeIcon
                  className="sm:w-3 sm:h-3 mr-2"
                  icon={faGithub}
                />
                Github
              </a>
              <a href="#" className="text-sm ">
                <FontAwesomeIcon
                  className="sm:w-3 sm:h-3 mr-2"
                  icon={faGlobe}
                />
                Website
              </a>
              <a className="text-sm ">
                <FontAwesomeIcon
                  className="sm:w-3 sm:h-3 mr-2"
                  icon={faTwitter}
                />
                Twitter
              </a>
            </div>
            <hr />
            <div className="section-CAC my-4  grid gap-2">
              <h3 className="font-semibold text-[0.9rem]">SKILLS</h3>
              <div className="text-xs ">
                <ul className="list-disc pl-4  grid gap-2">
                <li>asd</li>
                <li>sfdfgd</li>
                <li>sdgdbd</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="section-CB w-full mr-2">
            <div className="section-CBA p-5 font-medium text-2xl ">
              <div>
                <h3 className=" font-bold">WORK EXPERINCE</h3>
                <p className="text-sm ">Postion</p>    
                <p className="text-sm ">Company name</p>          
                <ul className="list-disc pl-6 text-xs">
                  <li>1ad</li>
                  <li>1svf</li>
                </ul>
              </div>
            </div>

            <div className=" bg-black"><hr /></div>
            
            <div className="section-CBB  p-5  font-medium text-2xl  ">
              <div>
                <h3 className="font-bold">PROJECT</h3>
                <p className="text-lg font-medium">ProjectName</p>    
                <p className="text-sm font-medium">Position</p>          
                <p className="text-sm font-xs">Desc</p>          
                      
              </div>
            </div>

           <div className=" bg-black"><hr /></div>

            <div className="section-CBC px-5 pt-2 font-medium text-2xl ">
              <div>
                <h3 className="font-bold">EDUCATION</h3>
                <p className="text-lg font-medium">CollegeName</p>    
                <p className="text-xs font-medium">Btech</p>          
                <p className="text-xs font-medium">Cse</p>          
                <p className="text-xs font-medium">Startingyear</p>          
                <p className="text-xs font-medium">Passingyear</p>          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
