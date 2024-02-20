import React, { useState } from 'react'
// import './builder.css' //import to use builder css for preview
import './builder-resume.css'
import Form from './Form/Form'
import Resume1 from './Resume/Resume1'
import Resume2 from './Resume/Resume2'
import Resume3 from './Resume/Resume3'
import { useSelector } from 'react-redux'
import { useNavigate} from "react-router";


const Builder = () => {

  const navigate = useNavigate();
  const templateNumber = useSelector((state) => state.template.value);
  const resumeData = useSelector((state) => state.resumeData.value);

  const [resumePreviewVisible, setResumePreviewVisible] = useState(false);

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
      <div className="font-bold sticky top-0 z-30 text-white py-2 md:py-1 bg-blue flex flex-row justify-between items-center px-10 border-b-2 text-xs md:text-normal">
        <div className='w-full md:w-7/12 flex items-center justify-center md:justify-between flex-col md:flex-row'>
          <div className="logo text-xl sm:text-2xl md:text-4xl ">Resume Builder</div>
          {
            resumeData?.firstname && (
              <p className=''>
                {'Resume: '}
                <span className='capitalize'>
                  {resumeData.firstname}
                </span>
              </p>
            )
          }
        </div>
        <div className='flex flex-col md:flex-row items-center gap-1'>
          <div className='sm:p-2 md:p-4 cursor-pointer ' onClick={goToSelectTemplate}>Back</div>
          <div className='sm:p-2 md:p-4 cursor-pointer ' onClick={generateResume}>
            Download
          </div>
        </div>
      </div>

    <div className="w-screen flex justify-center">
        {
          resumePreviewVisible === false && (
            <div className='w-auto'>
              <Form />
            </div>
          )
        }
      <div className='resume-container-builder hidden lg:block w-8/12'>
        {
          templateNumber == 1 && (
            <Resume1 showDownload={false} />
          )
        }
        {
          templateNumber == 2 && (
            <Resume2 showDownload={false} inBuilder={true}/>
          )
        }
        {
          templateNumber == 3 && ( 
            <Resume3 showDownload={false} inBuilder={true}/>
          )
        }
      </div>
    </div>

    <div className='fixed block lg:hidden right-10 bottom-8 w-max p-4 bg-blue text-white rounded-md z-20' onClick={() => {setResumePreviewVisible(!resumePreviewVisible)}}>
      {
        resumePreviewVisible ? (
          <p>Close</p>
        ): (
          <p>Preview</p>
        )
      }
      
    </div>

    {
      resumePreviewVisible && (
        <div className='absolute h-max w-screen top-[12vh] bg-white z-10'>
          {
            templateNumber == 1 && (
              <Resume1 showDownload={false} />
            )
          }
          {
            templateNumber == 2 && (
              <Resume2 showDownload={false} inBuilder={true}/>
            )
          }
          {
            templateNumber == 3 && ( 
              <Resume3 showDownload={false} inBuilder={true}/>
            )
          }
        </div>
      )
    }

        </>
  )
}

export default Builder