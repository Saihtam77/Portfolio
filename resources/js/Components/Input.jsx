import React from "react";

const Input = ({ value, name, type, id, placeholder, onChange }) => {
    return (
        <input
            className=" text-sm rounded-lg  block w-full p-2.5 bg-white placeholder-gray-600 text-black focus:ring-[#F5CC00] focus:border-[#F5CC00] "
            id={id}
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default Input;
