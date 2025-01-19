import React from 'react';
import ProfileCard from './ProfileCard';  // Assuming you're reusing the ProfileCard component

const Marketing = () => {
  const teamData = [
    {
      name: 'Saim Khan',
      designation: 'Marketing Lead',
      role: 'Leads campaigns, strategy, and digital marketing efforts.',
      linkedin: 'https://www.linkedin.com/in/emilyclark',
      image: 'saim.png',
    },
    
  ];

  return (
    <div className="min-h-screen bg-white text-white">
      {/* Header Section */}
      <header className="py-6 bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-center shadow-md">
        <h1 className="text-4xl font-bold text-white">Marketing</h1>
        <p className="text-lg text-gray-300 mt-2">
          Creating impactful campaigns and driving success.
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

export default Marketing;
