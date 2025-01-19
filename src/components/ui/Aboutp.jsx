import React from 'react';

const AboutProgram = () => {
  return (
    <section id="about" className="py-8 sm:py-16 md:py-24 bg-gray-50">
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 lg:py-0">
  
      <div className="mx-auto max-w-full text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl py-0 font-bold tracking-tight text-gray-900">
          About Our Program
        </h2>
        <p className="mt-4 sm:mt-6 text-left text-base sm:text-lg md:text-xl lg:text-xl lg:text-center leading-7 text-gray-600 ">
          Microsoft Learn Student Ambassadors (MLSA) - Pakistan
          Microsoft Learn Student Ambassadors (MLSA) is a global program that empowers students to grow their technical skills, build leadership capabilities, and engage in real-world technology initiatives. The MLSA program connects passionate students with learning opportunities, workshops, and access to exclusive Microsoft resources. Ambassadors are equipped with the knowledge and tools to make a tangible impact within their communities by promoting technology education and collaboration.

MLSA Pakistan, a part of the global MLSA initiative, provides students with the opportunity to build on their passion for technology while contributing to the development of their local tech ecosystem. The program promotes learning, community building, and skill development through initiatives such as hackathons, coding workshops, and networking events, all powered by Microsoft’s vast array of products and tools. MLSA Pakistan has become a significant player in bridging the gap between students and professionals in the tech industry.

The MLSA Pakistan chapter is continuously growing, offering students the chance to engage in various Microsoft-led programs and campaigns aimed at inspiring innovation, collaboration, and professional growth.

Vision: To empower students in Pakistan with the knowledge, resources, and opportunities to become future leaders in technology.

Mission: To foster a community of passionate tech enthusiasts who are ready to learn, share knowledge, and contribute to solving real-world challenges using Microsoft technologies.

If you are a student passionate about technology and looking to become a part of a vibrant community, MLSA Pakistan is the platform for you. Whether you're looking to learn new skills, network with industry professionals, or make a difference in your community, the MLSA Pakistan chapter offers a host of exciting opportunities to help you grow.

For collaboration opportunities or any queries, feel free to reach out to us at mlsapakistan@microsoft.com.
          {/* Content continues... */}
        </p>
      </div>
  
      <div className="mx-auto mt-12 sm:mt-16 md:mt-24 max-w-full sm:max-w-3xl lg:max-w-none">
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:max-w-none">
          <div className="flex flex-col">
            <dt className="text-lg sm:text-xl font-semibold leading-7 text-gray-900">
              Learning Opportunities
            </dt>
            <dd className="mt-4 text-base sm:text-lg md:text-xl leading-7 text-gray-600">
              Access exclusive Microsoft learning resources, certifications, and hands-on workshops.
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-lg sm:text-xl font-semibold leading-7 text-gray-900">
              Community Engagement
            </dt>
            <dd className="mt-4 text-base sm:text-lg md:text-xl leading-7 text-gray-600">
              Connect with like-minded students and industry professionals through events and forums.
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-lg sm:text-xl font-semibold leading-7 text-gray-900">
              Career Growth
            </dt>
            <dd className="mt-4 text-base sm:text-lg md:text-xl leading-7 text-gray-600">
              Build your professional network and gain real-world experience through projects.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
  
  );
};

export default AboutProgram;
