import React from "react";

const TextArea = ({ value, name, type, id, placeholder, onChange }) => {
    return (
        <textarea
            rows={6}
            className="block p-2.5 w-full text-sm text-black rounded-lg border bg-white placeholder-gray-600 focus:ring-[#F5CC00] focus:border-[#F5CC00]"
            value={value}
            name={name}
            type={type}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default TextArea;
