import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from 'react';
import AboutProgram from './components/ui/Aboutp';
import { events } from './events';
import resources from './resources';
import { organizers } from './Organizers';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import About from './components/ui/About';
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import DepartmentCard from './components/ui/DepCard';
import Automation from './components/ui/Automation';
import EventsAndProtocol from './components/ui/Enp';
import HumanResources from './components/ui/Hr';
import LogisticsAndOperations from './components/ui/Log';
import ExternalRelations from './components/ui/Ext';
import Marketing from './components/ui/Mark';
import MediaAndDesign from './components/ui/Media';
import Management from './components/ui/Man';
import SocialOutreach from './components/ui/Outreach';

function App() {
  const path = window.location.pathname;

  if (path === '/It-and-Auto') {
    return <Automation/>;
  }
  if (path === '/hr') {
    return <HumanResources/>;
  } if (path === '/enp') {
    return <EventsAndProtocol/>;
  }
  if (path === '/logi') {
    return <LogisticsAndOperations/>;
  }
  if (path === '/ext') {
    return <ExternalRelations/>;
  }
  if (path === '/mark') {
    return <Marketing/>;
  }
  if (path === '/Media') {
    return <MediaAndDesign/>;
  }
  if (path === '/man') {
    return <Management/>;
  }if (path === '/out') {
    return <SocialOutreach/>;
  }
 
 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">

    <Header/>
     
      <main>
        {/* Hero section */}
        <div className="relative isolate">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-blue-800 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>

          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  MLSA BSEAS Empowering Students to Learn, Share, and Grow with Microsoft!
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Join our community of passionate learners and future tech leaders. Get access to exclusive resources,
                  events, and networking opportunities.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button size="lg">
                    Join the Community
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    View Events
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About section */}
        <AboutProgram/>
       <DepartmentCard/>
        {/* Events section */}
        <section id="events" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Upcoming Events</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Join our upcoming workshops, seminars, and networking events.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {events.map((event) => (
                <Card key={event.title} className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                  <div className="mt-4 text-sm text-gray-600">
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                    <p>Location: {event.location}</p>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">{event.description}</p>
                  <Button className="mt-6 w-full">Register Now</Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resources section */}
        <section id="resources" className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Resources</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Access valuable learning materials and tools to enhance your skills.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {resources.map((resource) => (
                <Card key={resource.title} className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                  <p className="mt-4 text-sm text-gray-600">{resource.description}</p>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-blue-600 hover:text-blue-800"
                  >
                    Learn More →
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Organizers section */}
        <section id="organizers" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Get to know the passionate individuals leading our community.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {organizers.map((organizer) => (
                <Card key={organizer.name} className="p-6">
                  <img
                    src={organizer.image}
                    alt={organizer.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-center text-gray-900">{organizer.name}</h3>
                  <p className="text-sm text-center text-blue-600">{organizer.role}</p>
                  <p className="mt-4 text-sm text-center text-gray-600">{organizer.bio}</p>
                  <div className="mt-6 flex justify-center">
                    <a
                      href={organizer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600"
                    >
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Have questions? We'd love to hear from you.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-xl">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

       <Footer/>      
    </div>
  );
}

export default App;
