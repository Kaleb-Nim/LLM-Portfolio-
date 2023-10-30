import React from "react";

interface CardProps {
    heading: string;
    description: string;
    link: string;
    keyPoints: string[];
}

export const Card: React.FC<CardProps> = ({ heading, description, link, keyPoints }) => {

    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-lg rounded-lg">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url('${link}')` }} title={heading}>
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{heading}</div>
            <p className="text-gray-700 text-base">{description}</p>
            <ul className="list-disc ml-5 mt-2">
              {keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Jonathan Reinink</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    )
}
