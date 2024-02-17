import React from 'react'
import Form from './Form/Form'
import Resume1 from './Resume/Resume1'
import Resume2 from './Resume/Resume2'
import Resume3 from './Resume/Resume3'
import { useSelector } from 'react-redux'


const Builder = () => {
  const templateNumber = useSelector((state) => state.template.value);

  return (
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
  )
}

export default Builder