import FormInput from "./FormInput";
import {
  faCaretDown,
  faEnvelope,
  faGlobe,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../store/features/resumeData/resumeData.slice";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Form = () => {
  const navigate = useNavigate();
  const resumeData = useSelector((state) => state.resumeData.value);
  const template = useSelector((state) => state.template.value);

  const dispatch = useDispatch();

  const [education, setEducation] = useState({
    degree: "",
    institute: "",
    description: "",
    startYear: "",
    endYear: "",
  });
  const [experience, setExperience] = useState([
    {
      position: "",
      company: "",
      description: "",
      startYear: "",
      endYear: "",
    },
    {
      position: "",
      company: "",
      description: "",
      startYear: "",
      endYear: "",
    },
  ]);

  const [projects, setProjects] = useState(
    [
      {
        name: "",
        role: "",
        description: "",
      },
      {
        name: "",
        role: "",
        description: "",
      }
    ]
  );

  
  const [skills, setSkills] = useState(["", "", "", "", "", ""]);

  const [activities, setActivities] = useState(["", "", ""]);

  const updateSkillOrActivity = (type, array, indx, value) => {
    const newArr = [...array];
    newArr[indx] = value;

    if (type === "activity") {
      setActivities(newArr);
    } else {
      setSkills(newArr);
    }
  };

  const updateObjectField = (name, value) => {
    dispatch(update({ name, value }));
  };
  const updateField = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    dispatch(update({ name, value }));
  };

  const updateExperienceState = (index, name, value) => {
    const newArray = experience.map((item, i) => {
      if (index === i) {
        return { ...item, [name]: value };
      } else {
        return item;
      }
    });
    setExperience(newArray);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the image preview
        updateObjectField('image', reader.result);
      };

      reader.readAsDataURL(file);
    }
  } 

  const updateProjectState = (index, name, value) => {
    const newArray = projects.map((item, i) => {
      if (index === i) {
        return { ...item, [name]: value };
      } else {
        return item;
      }
    });

    setProjects(newArray);
  };

  useEffect(() => {
    updateObjectField("education", education);
  }, [education]);

  useEffect(() => {
    updateObjectField("experience", experience);
  }, [experience]);

   useEffect(() => {
    updateObjectField("projects", projects);
  }, [projects]);

  useEffect(() => {
    updateObjectField("activities", activities);
  }, [activities]);

  useEffect(() => {
    updateObjectField("skills", skills);
  }, [skills]);

  useEffect(() => {
    if (resumeData) {
      setEducation(resumeData.education);
      setExperience(resumeData.experience);
      setActivities(resumeData.activities);
      setSkills(resumeData.skills);
      setProjects(resumeData.projects);
    }
  }, []);

  return (
    <div>
        <div>
          <div className="m-4">
            <h1 className="text-2xl mb-2 font-bold ">Personal Details</h1>
            <hr className=" border-black mb-2" />
            <div className="grid justify-center grid-cols-2 gap-4 ">

              <div className="relative hover:scale-[1.05] shadow-lg shadow-zinc-300  outline-none pl-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  placeholder="Select your Image"
                  
                  className="hover:scale-[1.05] py-4 w-full appearance-none"
                  />
              </div>

              <FormInput
                type={"text"}
                maxlength={25}
                name={"firstname"}
                placeholder={"First Name"}
                value={resumeData.firstname}
                onChange={updateField}
                icon={null}
              />
              <FormInput
                type={"text"}
                maxlength={25}
                name={"lastname"}
                placeholder={"Last Name"}
                value={resumeData.lastname}
                onChange={updateField}
                icon={null}
              />
              <FormInput
                type={"text"}
                maxlength={50}
                name={"title"}
                placeholder={"Software Engineer"}
                value={resumeData.title}
                onChange={updateField}
                icon={null}
              />
              <FormInput
                type={"text"}
                name={"objective"}
                placeholder={"Objective"}
                value={resumeData.objective}
                onChange={updateField}
                icon={null}
              />
              <FormInput
                type={"tel"}
                name={"contact"}
                maxlength={14}
                placeholder={"Contact Number"}
                value={resumeData.contact}
                onChange={updateField}
                icon={faPhone}
              />

              <FormInput
                type={"text"}
                name={"address"}
                placeholder={"Address"}
                value={resumeData.address}
                onChange={updateField}
                icon={faHouse}
              />

              <FormInput
                type={"text"}
                name={"website"}
                placeholder={"Your Website"}
                value={resumeData.website}
                onChange={updateField}
                icon={faGlobe}
              />

              <FormInput
                type={"text"}
                name={"github"}
                placeholder={"GitHub"}
                icon={faGithub}
                value={resumeData.github}
                onChange={updateField}
              />

              <FormInput
                type={"text"}
                name={"linkedin"}
                placeholder={"LinkedIn"}
                icon={faLinkedinIn}
                value={resumeData.linkedin}
                onChange={updateField}
              />

              <FormInput
                type={"email"}
                name={"email"}
                placeholder={"Email"}
                icon={faEnvelope}
                value={resumeData.email}
                onChange={updateField}
              />

              <FormInput
                type={"text"}
                name={"twitter"}
                placeholder={"twitter"}
                icon={faTwitterSquare}
                value={resumeData.twitter}
                onChange={updateField}
              />
            </div>
          </div>
        </div>
    <div className="educational-details px-2 md:px-2">
      <h1 className="text-2xl mt-10 font-bold ">Education Details</h1>
      <hr className=" border-black mb-2" />
      <div className="flex-col grid justify-center grid-cols-1 sm:grid-cols-2 gap-3">
        {Object.keys(education).map((key) => {
          return (
            <FormInput
              key={key}
              type={`${
                key === "startYear" || key === "endYear" ? "number" : "text"
              }`}
              name={key}
              placeholder={key}
              value={education[key]}
              onChange={(e) => {
                setEducation({ ...education, [key]: e.target.value });
              }}
              icon={null}
            />
          );
        })}
      </div>
    </div>

    <div className="Experience Details">
      {experience.map((exp, indx) => {
        return (
          <div key={indx} className="px-2 md:px-2">
            <h1 className="text-2xl mt-10 mb-2 font-bold ">
            Experience Details {indx}
            </h1>
            <hr className=" border-black mb-2" />
            <div className="grid sm:grid-cols-2 gap-3">
              {Object.keys(exp).map((key) => {
                return (
                  <FormInput
                    key={key}
                    type={`${
                      key === "startYear" || key === "endYear"
                        ? "number"
                        : "text"
                    }`}
                    name={key}
                    placeholder={key}
                    value={experience[indx][key]}
                    onChange={(e) => {
                      updateExperienceState(indx, key, e.target.value);
                    }}
                    icon={null}
                    required
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>

    <div className="Project Details">
      {projects.map((project, indx) => {
        return (
          <div key={indx} className="px-2 md:px-2">
            <h1 className="text-2xl mt-10 mb-2 font-bold ">
            Project Details {indx}
            </h1>
            <hr className=" border-black mb-2" />
            <div className="grid sm:grid-cols-2 gap-3">
              {Object.keys(project).map((key) => {
                return (
                  <FormInput
                    key={key}
                    type={'text'}
                    name={key}
                    placeholder={key}
                    value={projects[indx][key]}
                    onChange={(e) => {
                      updateProjectState(indx, key, e.target.value);
                    }}
                    icon={null}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>

    <div className="skills-and-activities px-2 md:px-2 mb-10">
      <h1 className="text-2xl my-2 mt-10 font-bold ">Skills </h1>
      <hr className=" border-black mb-2" />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((skill, indx) => {
          return (
            <FormInput
              key={indx}
              type="text"
              name="skill"
              placeholder={`skill ${indx}`}
              value={skill}
              onChange={(e) => {
                updateSkillOrActivity("skill", skills, indx, e.target.value);
              }}
              icon={null}
              required
            />
          );
        })}
      </div>
      <h1 className="text-2xl mt-10 mb-2 font-bold ">Activities</h1>
      <hr className=" border-black mb-2" />
      <div className="grid sm:grid-cols-3 gap-3">
        {activities.map((activity, indx) => {
          return (
            <FormInput
              key={indx}
              type="text"
              name="activity"
              placeholder={`Activity ${indx}`}
              value={activity}
              onChange={(e) => {
                updateSkillOrActivity(
                  "activity",
                  activities,
                  indx,
                  e.target.value
                );
              }}
              icon={null}
            />
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Form;
