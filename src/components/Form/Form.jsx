import FormInput from "./FormInput";
import {
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
import { useEffect, useMemo, useState } from "react";

const Form = () => {
  const navigate = useNavigate();
  const resumeData = useSelector((state) => state.resumeData.value);
  const dispatch = useDispatch();

  const [education, setEducation] = useState(
    {
      degree: "",
      institute: "",
      description: "",
      startYear: "",
      endYear: "",
    }
  );
  const [experience, setExperience] = useState(
    [
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
      }
    ]
  )
  const[skills,setSkills] = useState(
   [
    '' ,'' ,'','','','',
   ]
  )

  const [activities, setActivities] = useState([
    '' ,'' ,''
   ]);

  const updateSkillOrActivity = (type, array, indx, value) => {
    const newArr = [...array]
    newArr[indx] = value;
    
    if(type === 'activity'){
      setActivities(newArr)
    } else {
      setSkills(newArr);
    }
  }
  
  const submitHandler = () => {
    navigate("/resume");
  };

  const updateObjectField = (name, value) => {
    dispatch(update({ name, value }));
  }
  const updateField = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    dispatch(update({ name, value }));
  };

  const [fieldToShow, setFieldToShow] = useState(0);
  
  const FORM_FIELDS = [
    <div>
  
  <div className="px-2 md:px-2">
    <h2 className="flex justify-center p-4 sm:px-28 sm:py-10 mb-6 border-4">
      Personal Details
    </h2>
    <div className="grid justify-center grid-cols-2 gap-4 sm:gap-14">
      <FormInput
        type={"text"}
        name={"firstname"}
        placeholder={"First Name"}
        value={resumeData.firstname}
        onChange={updateField}
        icon={null}
      />
      <FormInput
        type={"text"}
        name={"lastname"}
        placeholder={"Last Name"}
        value={resumeData.lastname}
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
        type={"text"}
        name={"phoneNo"}
        placeholder={"Phone Number"}
        value={resumeData.phoneNo}
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
 
    </div>,
      <div className="educational-details px-2 md:px-2">
        <h2 className="flex justify-center p-4 sm:px-28 sm:py-10 mb-6 border-4">
          Educational Details
        </h2>
        <div className="flex-col grid justify-center grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-14">

          {
            Object.keys(education).map((key) => {
              return (
                <FormInput
                  key={key}
                  type={`${key === 'startYear' || key === 'endYear' ? 'number' : 'text'}`}
                  name={key}
                  placeholder={key}
                  value={education[key]}
                  onChange={(e) => {
                    setEducation({ ...education, [key]: e.target.value })
                  }}
                  icon={null}
                />
              )
            })
          }

        </div>
      </div>, 

      <div className="Experience Details">
          {
            experience.map((exp, indx) => {
              return (
                <div  key={indx} className="px-2 md:px-2">
                  <h2 className="flex justify-center p-4 sm:px-28 sm:py-10 my-6 border-4">Experience {indx}</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                  {
                    Object.keys(exp).map((key) => {
                      return (
                        
                        <FormInput
                          key={key}
                          type={`${key === 'startYear' || key === 'endYear' ? 'number' : 'text'}`}
                          name={key}
                          placeholder={key}
                          value={experience[indx][key]}
                          onChange={(e) => {
                            updateExperienceState(indx, key, e.target.value);
                          }}
                          icon={null}
                          required
                        />
                      )
                    })
                  }
                </div>
                </div>
              )
            })
          }
      </div>,

    <div className="skills-and-activities px-2 md:px-2">
      <h2 className="flex justify-center p-4 sm:px-28 sm:py-10 mb-6 border-4">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {
        skills.map((skill , indx ) => {
          return (
           
            
            <FormInput
              key={indx}
              type= 'text'
              name='skill'
              placeholder={`skill ${indx}`}
              value={skill}
              onChange={(e) => {
                updateSkillOrActivity('skill', skills, indx, e.target.value)
              }}
              icon={null}
              required
            />
          
          )
        })
      }
      </div>
     
      <h2 className="flex justify-center p-4 sm:px-28 sm:py-10 my-6 border-4">Activities</h2>
      <div className="grid sm:grid-cols-3 gap-4" >
        {
          activities.map((activity, indx) => {
            return (
              
                <FormInput
                  key={indx}
                  type='text'
                  name='activity'
                  placeholder={`Activity ${indx}`}
                  value={activity}
                  onChange={(e) => {
                    updateSkillOrActivity('activity', activities, indx, e.target.value)
                  }}
                  icon={null}
                />
              )
          })
        }

        </div>
      </div>
  ]

  const changeField = (indx) => {
    if(indx < 0 || indx >= FORM_FIELDS.length) return;//invalid index

    setFieldToShow(indx);
  } 

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

  useEffect(() => {
    updateObjectField("education", education)
  }, [education])

  useEffect(() => {
    updateObjectField("experience", experience)
  }, [experience])

  useEffect(() => {
    updateObjectField("activities", activities)
  },[activities])
  
  useEffect(() => {
    updateObjectField("skills", skills)
  },[skills])

  useEffect(() => {
    if(resumeData){
      setEducation(resumeData.education)
      setExperience(resumeData.experience)
      setActivities(resumeData.activities)
      setSkills(resumeData.skills)
    }
  }, [])

  return (
    <div>
      
    <h2 className="font-bold p-5 sm:p-8 mb-5 sm:mb-5 bg-blue text-neutral-50   text-center">
    Resume Builder
    </h2>
      {FORM_FIELDS[fieldToShow]} 

      <div className="w-full flex justify-around p-5 sm:p-10">  
      {
        fieldToShow > 0 && (
          <button 
            className="bg-orange-300 p-2 sm:p-4 rounded-md font-bold"
            onClick={() => {changeField(fieldToShow - 1)}}
          >
            PREV
          </button>
        )
      }

        {
          (fieldToShow === FORM_FIELDS.length - 1) && (
            <button 
              className="bg-green-300 p-2 sm:p-4 rounded-md font-bold"
              onClick={submitHandler}
            >
              Generate Resume
            </button>
          )
        }

        {
          (fieldToShow < FORM_FIELDS.length - 1) && (
            <button 
              className="bg-sky-300 p-2 sm:p-4 rounded-md font-bold"
              onClick={() => {changeField(fieldToShow + 1)}}
            >
              NEXT
            </button>
          )
        }

      </div>

      

      
    </div>
  );
};

export default Form;
