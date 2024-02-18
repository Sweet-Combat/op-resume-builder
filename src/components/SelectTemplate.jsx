import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { updateTemplate } from '../store/features/template.slice';

const SelectTemplate = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();

  const templates = [1, 2, 3];

  const updateSelected = (value) => {
    dispatch(updateTemplate({id: value}));
    setSelected(value);
  }

  const goToBuilder = () => {
    navigate('/builder');
  }

  return (
    <div className='flex flex-col items-center my-20 gap-3'>
      <h1 className='text-2xl'>Select Template</h1>
      <div className='templates flex gap-3'>
        {
          templates.map((value) => {
            return (
              <button className={`${selected === value? 'outline outline-2 outline-green-300': ''} p-4 bg-pink-300`} key={value} onClick={() => {updateSelected(value)}}>
                {value}
              </button>
            )
          })
        }
      </div>
      
        {
          (selected && selected > 0) ? (
            <button className={'w-max p-4 rounded-md hover:bg-green-300 border-2 border-gray-400'} onClick={goToBuilder}>
              Build Resume
            </button>
          ): <></>
        }
    </div>
  )
}

export default SelectTemplate