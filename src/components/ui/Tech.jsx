import React from 'react';
import ProfileCard from './ProfileCard';  // Assuming you're reusing the ProfileCard component

const Technical = () => {
  const teamData = [
    {
      name: 'Muhammad Arham Kakkar',
      designation: 'Technical Lead',
      role: 'Oversees the development and architecture of technical solutions.',
      linkedin: 'https://www.linkedin.com/in/alicejohnson',
      image: 'arham.png',
    },
   
  ];

  return (
    <div className="min-h-screen bg-white text-white">
      {/* Header Section */}
      <header className="py-6 bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-center shadow-md">
        <h1 className="text-4xl font-bold text-white">Technical Team</h1>
        <p className="text-lg text-gray-300 mt-2">
          Building innovative solutions and ensuring smooth technical operations.
        </p>
      </header>

      {/* Main Content Section */}
      <main className="py-10 px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map((member, index) => (
            <ProfileCard key={index} {...member} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Technical;
