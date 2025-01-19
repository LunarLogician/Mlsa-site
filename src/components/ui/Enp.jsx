import React from 'react';
import ProfileCard from './ProfileCard';  // Assuming you're reusing the ProfileCard component

const EventsAndProtocol = () => {
  const teamData = [
    {
      name: 'Muhammad Zaviyar Chouhdry  ',
      designation: 'Event and Protocol Lead',
      role: 'Manages all event logistics and coordination.',
      linkedin: 'https://www.linkedin.com/in/michaeljohnson',
      image: 'zav.png',
    },
   
  ];

  return (
    <div className="min-h-screen bg-white text-white">
      {/* Header Section */}
      <header className="py-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-center shadow-md">
        <h1 className="text-4xl font-bold text-white">Events and Protocol</h1>
        <p className="text-lg text-gray-300 mt-2">
          Ensuring seamless event management and coordination.
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

export default EventsAndProtocol;
