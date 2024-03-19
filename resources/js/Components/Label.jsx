import React from "react";

const Label = ({ htmlFor, value }) => {
   return (
      <label htmlFor={htmlFor} className="block font-medium text-white">
         {value}
      </label>
   );
};

export default Label;