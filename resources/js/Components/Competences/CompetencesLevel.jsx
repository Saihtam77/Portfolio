import React, { useState, useEffect } from 'react';

const CompetencesLevel = ({ level }) => {
    const [circumference, setCircumference] = useState(2 * 22 / 7 * 120);
    const [offset, setOffset] = useState(circumference);

    useEffect(() => {
        setOffset(circumference - level / 100 * circumference);
    }, [level, circumference]);

    return(
        <div className="flex items-center justify-center">
            <svg className="transform -rotate-90 w-72 h-72">
                <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent"
                    className="text-gray-700" />

                <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className="text-blue-500 " />
            </svg>
            <span className="absolute text-5xl">{`${level}%`}</span>
        </div>
    );
}

export default CompetencesLevel;