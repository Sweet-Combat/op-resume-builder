import React from 'react'
import Form from './Form/Form'
import Resume1 from './Resume/Resume1'
import Resume2 from './Resume/Resume2'
import Resume3 from './Resume/Resume3'
import { useSelector } from 'react-redux'
import { useNavigate, useNavigation} from "react-router";


const Builder = () => {
  const templateNumber = useSelector((state) => state.template.value);
  const resumeData = useSelector((state) => state.resumeData.value);

  const navigate = useNavigate();

  const goToSelectTemplate = () => {
    navigate(-1);
  }

  const generateResume = () => {
      switch (templateNumber) {
        case 2: {
          navigate("/resume2");
          break;
        }
        case 3: {
          navigate("/resume3");
          break;
        }
        default: {
          navigate("/resume1");
        }
      }
  }


  return (
    <>
      <div className="font-bold sticky top-0 z-30 text-white py-1 bg-blue  flex justify-between items-center px-10 border-b-2 ">
        <div className="logo text-4xl ">Resume Builder</div>
        {
          resumeData?.firstname && (
            <p className=''>
              Resume: 
              <span className='capitalize'>
                {resumeData.firstname}
              </span>
            </p>
          )
        }
        <div className='flex'>
          <div className='p-4 cursor-pointer ' onClick={goToSelectTemplate}>Back</div>
          <div className='p-4 cursor-pointer ' onClick={generateResume}>
            Download
          </div>
        </div>
      </div>
    {/* <hr className=' mx-5 h-1 mt-2 bg-black '/> */}

    <div className="w-screen flex">

      <div className='w-6/12'>
        <Form />
      </div>
      <div className='fixed top-[-30vh] right-[-15vw] scale-[.6]'>
        {
          templateNumber == 1 && (
            <Resume1 showDownload={false}/>
          )
        }
        {
          templateNumber == 2 && (
            <Resume2 showDownload={false}/>
          )
        }
        {
          templateNumber == 3 && (
            <Resume3 showDownload={false}/>
          )
        }
      </div>
    </div>

        </>
  )
}

export default Builder