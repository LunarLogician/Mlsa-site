import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Layers, Globe, Palette, Settings, Calendar, ChartBar } from 'lucide-react';

const DepartmentCard = () => {
  const departmentData = [
    {
      name: "IT and Automation",
      description: "Streamlining processes with innovative technology.",
      icon: <Briefcase className="h-8 w-8 text-blue-500" />,
      handleClick: () => handleITAndAutomation(),
    },
    {
      name: "Events and Protocol",
      description: "Ensuring seamless event management and coordination.",
      icon: <Calendar className="h-8 w-8 text-yellow-500" />,
      handleClick: () => handleEventsAndProtocol(),
    },
    {
      name: "Human Resources",
      description: "Fostering team growth and maintaining harmony.",
      icon: <Users className="h-8 w-8 text-green-500" />,
      handleClick: () => handleHumanResources(),
    },
    {
      name: "Logistics and Operations",
      description: "Managing resources and operational flow efficiently.",
      icon: <Layers className="h-8 w-8 text-orange-500" />,
      handleClick: () => handleLogisticsAndOperations(),
    },
    {
      name: "External Relations",
      description: "Building partnerships and external collaborations.",
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      handleClick: () => handleExternalRelations(),
    },
    {
      name: "Marketing and Corporation",
      description: "Creating impactful campaigns to drive success.",
      icon: <ChartBar className="h-8 w-8 text-red-500" />,
      handleClick: () => handleMarketingAndCorporation(),
    },
    {
      name: "Media and Design",
      description: "Designing creative visuals and managing media.",
      icon: <Palette className="h-8 w-8 text-pink-500" />,
      handleClick: () => handleMediaAndDesign(),
    },
    {
      name: "Management",
      description: "Leading the team and ensuring smooth operations.",
      icon: <Settings className="h-8 w-8 text-gray-500" />,
      handleClick: () => handleManagement(),
    },
    {
      name: "Social Outreach Program ",
      description: ".",
      icon: <Settings className="h-8 w-8 text-gray-500" />,
      handleClick: () => handleoutreach(),
    },{
      name: "Technical ",
      description: "Manages Technical aspects of the organization.",
      icon: <Settings className="h-8 w-8 text-gray-500" />,
      handleClick: () => handletech(),
    },
  ];

  // Functions for each button click
  const handleITAndAutomation = () => {
    window.location.href = '/It-and-Auto';

    // Add your logic here
  }; 
  
  const handletech = () => {
    window.location.href = '/tech';

    // Add your logic here
  };

  const handleEventsAndProtocol = () => {
    window.location.href = '/enp';

    // Add your logic here
  };
  const handleoutreach = () => {
    window.location.href = '/out';

    // Add your logic here
  };
  const handleHumanResources = () => {
    window.location.href = '/hr';

    // Add your logic here
  };

  const handleLogisticsAndOperations = () => {
    window.location.href = '/logi';

    // Add your logic here
  };

  const handleExternalRelations = () => {
    window.location.href = '/ext';
   
    // Add your logic here
  };

  const handleMarketingAndCorporation = () => {

    window.location.href = '/mark';


    // Add your logic here
  };

  const handleMediaAndDesign = () => {
    window.location.href = '/Media';

    // Add your logic here
  };

  const handleManagement = () => {
    window.location.href = '/man';
  
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="text-center py-6 bg-gradient-to-r from-blue-500 to-indigo-500">
        <h1 className="text-4xl font-bold text-white">MSLA Departments</h1>
        <p className="text-lg text-gray-200 mt-2">Explore each department to learn more about its functions and goals.</p>
      </header>

      <main className="py-10 px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departmentData.map((department, index) => (
            <Card
              key={index}
              className="p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out bg-white"
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 mb-4">
                  {department.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{department.name}</h3>
                <p className="text-sm text-gray-600 text-center mb-4">{department.description}</p>
                <Button
                  className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
                  onClick={department.handleClick}
                >
                  Explore
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DepartmentCard;
