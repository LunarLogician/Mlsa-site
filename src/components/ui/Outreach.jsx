import React from 'react';
import ProfileCard from './ProfileCard';  // Assuming you're reusing the ProfileCard component

const SocialOutreach = () => {
  const teamData = [
    {
      name: 'Areesha Anjum',
      designation: 'Social Outreach Program Co-Lead',
      role: 'Coordinates and leads social outreach initiatives and projects.',
      linkedin: 'https://www.linkedin.com/in/areeshaanjum',
      image: 'areesha.png',
    },
    {
      name: 'Kainat Rasheed',
      designation: 'Social Outreach Program Lead',
      role: 'Designs strategies for community engagement and social causes.',
      linkedin: 'https://www.linkedin.com/in/kainatrasheed',
      image: 'kainat.png',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-white">
      {/* Header Section */}
      <header className="py-6 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 text-center shadow-md">
        <h1 className="text-4xl font-bold text-white">Social Outreach Program</h1>
        <p className="text-lg text-gray-300 mt-2">
          Empowering communities and making a difference through outreach.
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

export default SocialOutreach;
