import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttonsound from "/audio.mp3";


const FormInput = ({ type, name, placeholder, icon, value, onChange, maxlength=null }) => {

  const handleChange = (e) => {
    onChange(e);

    playAudio();
  }

  const playAudio = () => {
    const audio = new Audio(buttonsound);

    audio.volume = 0.4;

    audio.play();
  }

  return (
    <div className="relative shadow-lg shadow-zinc-300  outline-none">
      <input
        className={`${!icon? 'px-2 sm:px-5': 'pr-6 sm:pr-16 pl-2 sm:pl-5'} hover:scale-[1.05] py-4 w-full`}
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={handleChange}
        maxLength={maxlength}
        onMouseEnter={playAudio}
      />
      {
        icon &&
        (
          <FontAwesomeIcon className="absolute right-2 sm:right-5 top-5 pl-3 width-3 height-4" icon={icon} />
        )
      }
    </div>
  );
};

export default FormInput;
