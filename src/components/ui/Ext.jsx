import React from 'react';
import ProfileCard from './ProfileCard';  // Assuming you're reusing the ProfileCard component

const ExternalRelations = () => {
  const teamData = [
    {
      name: 'Talha Shahzad',
      designation: 'Partnership Manager',
      role: 'Builds and maintains external partnerships and collaborations.',
      linkedin: 'https://www.linkedin.com/in/emilycarter',
      image:'talha2.png',
    },
    {
      name: 'Hasnain Ayaz',
      designation: 'External Relation & Affiliation Lead',
      role: 'Works on strengthening relationships with external stakeholders.',
      linkedin: 'https://www.linkedin.com/in/jamesthompson',
      image: 'hasnain.png',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-white">
      {/* Header Section */}
      <header className="py-6 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-center shadow-md">

        <h1 className="text-4xl font-bold text-white">External Relations</h1>
        <p className="text-lg text-gray-300 mt-2">
          Building partnerships and external collaborations.
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

export default ExternalRelations;
