import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FormInput = ({ type, name, placeholder, icon, value, onChange }) => {

  return (
    <div className="relative border-2 border-indigo-200/100">
      <input
        className={`${!icon? 'px-2 sm:px-5': 'pr-6 sm:pr-16 pl-2 sm:pl-5'}  py-2 w-full`}
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={onChange}
      />
      {
        icon &&
        (
          <FontAwesomeIcon className="absolute right-2 sm:right-5 top-3 pl-3 width-3 height-4" icon={icon} />
        )
      }
    </div>
  );
};

export default FormInput;
