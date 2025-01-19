import React from 'react';
import ProfileCard from './ProfileCard';  // Assuming you're reusing the ProfileCard component

const MediaAndDesign = () => {
  const teamData = [
    {
      name: 'Moheez Ishfaq',
      designation: 'Media & Design Co-Lead',
      role: 'Leads design projects, creating stunning visuals and media.',
      linkedin: 'https://www.linkedin.com/in/sophialee',
      image: 'moheez.png',
    },
    {
      name: 'Muhammad Ibtisam Naveed ',
      designation: 'Media & Design Lead',
      role: 'Designs creative assets and maintains brand consistency.',
      linkedin: 'https://www.linkedin.com/in/danielkim',
      image: 'ibt.png',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-white">
      {/* Header Section */}
      <header className="py-6 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-center shadow-md">

        <h1 className="text-4xl font-bold text-white">Media and Design</h1>
        <p className="text-lg text-gray-300 mt-2">
          Designing creative visuals and managing media.
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

export default MediaAndDesign;
