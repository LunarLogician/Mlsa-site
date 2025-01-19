import React from 'react';
import ProfileCard from './ProfileCard';

const Automation = () => {
  const teamData = [
    {
      name: 'Waiqa Arif',
      designation: 'IT and Automation Co-Lead',
      role: 'Oversees automation projects and workflows.',
      linkedin: 'https://www.linkedin.com/in/waiqaa',
      image: 'waiqa.jpg',
    },
    {
      name: 'Mubashir Raza',
      designation: 'IT and Automation Lead ',
      role: 'Develops and implements automated solutions.',
      linkedin: 'https://www.linkedin.com/in/mubashir17/',
      image: 'Mub.png',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-white">
      {/* Header Section */}
      <header className="py-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-center shadow-md">
  <h1 className="text-4xl font-bold text-white">Automation Department</h1>
  <p className="text-lg text-gray-300 mt-2">
    Meet the team behind innovative automation solutions.
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

export default Automation;
