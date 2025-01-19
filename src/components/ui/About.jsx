import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaChalkboardTeacher, FaUsers, FaSuitcase } from 'react-icons/fa';

function About() {
  return (
    <div className="bg-white">
      {/* About section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">About Us</h2>
            <p className="mt-6 text-lg leading-8 opacity-80">
              The Microsoft Student Learning Ambassador Program is a global initiative to empower students
              with technical skills, leadership opportunities, and professional networking. Join us in
              transforming the future of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Learning Opportunities */}
            <Card className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl">
              <FaChalkboardTeacher className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-2xl font-semibold">Learning Opportunities</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Access exclusive Microsoft learning resources, certifications, and hands-on workshops to
                build your technical expertise.
              </p>
            </Card>

            {/* Community Engagement */}
            <Card className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl">
              <FaUsers className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-2xl font-semibold">Community Engagement</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Connect with like-minded students, participate in events, and engage in discussions with industry professionals.
              </p>
            </Card>

            {/* Career Growth */}
            <Card className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl">
              <FaSuitcase className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-2xl font-semibold">Career Growth</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Gain hands-on experience, access internships, and expand your professional network for career advancement.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">What Our Ambassadors Say</h2>
            <p className="mt-6 text-lg leading-8 opacity-80">
              Hear from our ambassadors about how this program has shaped their careers and provided them with valuable skills.
            </p>
          </div>

          {/* Testimonials */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
              <p className="text-lg leading-8 text-gray-600">
                "Being a Microsoft Ambassador has allowed me to connect with tech leaders and peers from around the world, and I’ve grown my skills beyond what I imagined!"
              </p>
              <p className="mt-4 font-semibold text-indigo-600">- John Doe, Ambassador</p>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
              <p className="text-lg leading-8 text-gray-600">
                "The learning resources provided helped me earn certifications, and the networking opportunities have been priceless in securing internships."
              </p>
              <p className="mt-4 font-semibold text-indigo-600">- Jane Smith, Ambassador</p>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
              <p className="text-lg leading-8 text-gray-600">
                "I highly recommend this program to anyone passionate about technology and looking for ways to make a real impact in their community."
              </p>
              <p className="mt-4 font-semibold text-indigo-600">- Alex Brown, Ambassador</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Join the Program Today
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Become a part of our global network of passionate learners and future tech leaders. Gain access to exclusive events,
            resources, and career opportunities.
          </p>
          <div className="mt-10">
            <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg">
              Join Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
