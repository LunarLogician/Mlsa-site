import React from 'react';
import ProfileCard from './ProfileCard';  // Assuming you're reusing the ProfileCard component

const HumanResources = () => {
  const teamData = [
    {
      name: 'Sadeed Ullah',
      designation: 'HR Co  Lead',
      role: 'Oversees recruitment and employee relations.',
      linkedin: 'https://www.linkedin.com/in/sophiawilliams',
      image: '3.JPG',
    },
    {
      name: 'Zainab Asif ',
      designation: 'HR Specialist',
      role: 'Manages employee benefits and training programs.',
      linkedin: 'https://www.linkedin.com/in/davidbrown',
      image: 'Zainab Asif.jpg',
    },
    {
      name: 'Suleman Sohail Sarwar ',
      designation: 'HR Specialist',
      role: 'Manages employee benefits and training programs.',
      linkedin: 'https://www.linkedin.com/in/davidbrown',
      image: 'Suleman.png',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-white">
      {/* Header Section */}
      <header className="py-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-center shadow-md">
        <h1 className="text-4xl font-bold text-white">Human Resources</h1>
        <p className="text-lg text-gray-300 mt-2">
          Fostering team growth and maintaining harmony.
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

export default HumanResources;
