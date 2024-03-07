import React from "react";

const Label = ({ htmlFor, name }) => {
   return (
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-900 dark:text-white">
         {name}
      </label>
   );
};

export default Label;