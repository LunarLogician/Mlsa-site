import React from 'react';

const ProfileCard = ({ image, name, designation, role, linkedin }) => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-50 p-8 w-80 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={`${name}'s Profile`}
          className="w-48 h-48 rounded-full mb-4 object-cover shadow-md border-4 border-blue-500"
        />
        <h3 className="text-3xl font-semibold text-blue-800">{name}</h3>
        <p className="text-blue-600 font-medium text-xl">{designation}</p>
        <p className="text-gray-600 text-sm mb-4 text-center">{role}</p>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-semibold hover:underline transition duration-300"
        >
          LinkedIn Profile
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
