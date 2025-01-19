import React from 'react';
import ProfileCard from './ProfileCard';  // Assuming you're reusing the ProfileCard component

const LogisticsAndOperations = () => {
  const teamData = [
    {
      name: 'Maryam Tanveer',
      designation: 'Logistics & Operations Co-Lead',
      role: 'Manages resources and ensures smooth operations.',
      linkedin: 'https://www.linkedin.com/in/michaeljohnson',
      image: 'maryam.png',
    },
    {
      name: 'Muhammad Abdullah',
      designation: 'Logistics & Operations Lead',
      role: 'Coordinates operational tasks and processes.',
      linkedin: 'https://www.linkedin.com/in/emilydavis',
      image: 'abdullah2.png',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-white">
      {/* Header Section */}
      <header className="py-6 bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-center shadow-md">
        <h1 className="text-4xl font-bold text-white">Logistics and Operations</h1>
        <p className="text-lg text-gray-300 mt-2">
          Managing resources and operational flow efficiently.
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

export default LogisticsAndOperations;
