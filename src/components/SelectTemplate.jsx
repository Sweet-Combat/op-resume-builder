import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateTemplate } from "../store/features/template.slice";

const SelectTemplate = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();

  const templates = [1, 2, 3];

  const updateSelected = (value) => {
    dispatch(updateTemplate({ id: value }));
    setSelected(value);
  };

  const goToBuilder = () => {
    navigate("/builder");
  };

  return (
    <div>
        <div className="font-bold p-5  bg-blue text-neutral-50 text-3xl">
        <div className="logo">Resume Builder</div>
      </div>
      <div className="flex flex-col items-center my-4 gap-3">
        <h1 className="text-5xl mb-6 font-bold">Select Template</h1>
        <div className="templates flex gap-3">
          {templates.map((value) => {
            return (
              <button
                className={`${
                  selected === value
                    ? "outline outline-2 outline-green-300 scale-[1.1] "
                    : ""
                } p-4 bg-pink-300`}
                key={value}
                onClick={() => {
                  updateSelected(value);  
                }}
              >
                <img  className= " w-92 h-96 hover:scale-[1.05]"src={`/op-resume-template-${value}.png`}></img>
              
              </button>
            );
          })}
        </div>

        {selected && selected > 0 ? (
          <button
            className={
              "w-max p-4 mt-6 text-2xl rounded-md hover:bg-blue hover:text-white shadow-xl bg-stone-50"
            }
            onClick={goToBuilder}
          >
            Build Resume
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SelectTemplate;
