import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import CurvedCard from "./mini/CurvedCard";
import Button from "./mini/Button";
import SecondaryButton from "./mini/SecondaryButton";
import Header from "./Header";
import FooterSection from "./FooterSection";
import TechnologiesSection from "./TechnologiesSection";

const services = [
  {
    title: "Custom Solutions That Scale",
    subtitle: "BUILD FOR GROWTH",
    description: "Ready for something new? We build custom software that automates your processes and scales with your business.",
    features: [
      "Custom web applications",
      "Internal automation tools", 
      "Customer-facing platforms",
      "API development & integration",
      "Database design & optimization"
    ],
    icon: "/assets/vector_4.svg",
    // price: "Starting at $5,000",
    timeline: "2-8+ weeks"
  },
  {
    title: "Systems & Integration",
    subtitle: "CONNECT YOUR TOOLS",
    description: "Stop doing everything twice. We make your CRM, website, and internal systems talk to each other—automatically.",
    features: [
      "CRM & website integration",
      "Automated workflows",
      "Data synchronization",
      "Third-party API connections",
      "Form & lead management"
    ],
    icon: "/assets/vector_5.svg",
    // price: "Starting at $2,000",
    timeline: "2-4 weeks"
  },
  {
    title: "Speed & Performance",
    subtitle: "MAKE IT FAST",
    description: "Your site shouldn't make customers wait. We fix slow pages and optimize everything behind your customer experience.",
    features: [
      "Site speed optimization",
      "Database performance tuning",
      "Code optimization",
      "CDN setup & configuration",
      "Performance monitoring"
    ],
    icon: "/assets/vector_6.svg",
    // price: "Starting at $1,500",
    timeline: "5-14 days"
  },
  {
    title: "Cleanup & Fixes",
    subtitle: "FIX WHAT'S BROKEN",
    description: "Broken features, mystery bugs, half-built tools—we debug it and get you back on track. Clear pricing upfront, fast turnaround guaranteed.",
    features: [
      "Bug fixes & debugging",
      "Code refactoring",
      "Legacy system updates",
      "Security patches",
      "Technical debt cleanup"
    ],
    icon: "/assets/vector_7.svg",
    // price: "Starting at $500",
    timeline: "1-5 days"
  }
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    description: "30 minutes to understand your needs and current setup."
  },
  {
    step: "02", 
    title: "Technical Audit",
    description: "We find your bottlenecks and create an action plan."
  },
  {
    step: "03",
    title: "Proposal & Timeline",
    description: "Fixed pricing, clear timeline, exact deliverables."
  },
  {
    step: "04",
    title: "Build & Deploy",
    description: "Regular updates, zero downtime deployment."
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center px-4 md:px-8">
        {/* Glowing background effects */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <div
            className="absolute top-1/4 right-1/4 w-1/3 h-1/3"
            style={{
              background: "radial-gradient(circle, #15965366 0%, transparent 70%)",
              filter: "blur(90px)",
              opacity: 0.9,
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6">
            Services that get
            <br />
            your tech working
          </h1>
          
          <p className="text-xl max-w-2xl mx-auto mb-8 text-white">
            Quick fixes to custom builds, we handle the technical headaches so you can focus on growth.
          </p>

          <div className="flex gap-4">
            <div>
              <Link to="/contact">
                <Button glow className="px-10 py-5 text-lg">
                  Get Started
                </Button>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <SecondaryButton className="px-10 py-5 text-lg">
                  View Pricing
                </SecondaryButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative w-full py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
              What we do
            </h2>
            <p className="text-gray-text text-xl max-w-2xl mx-auto">
              Our four services that solve the tech problems killing your productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`bg-black-dark p-8 rounded-xl border border-gray-800 ${
                  idx === 0 ? 'lg:col-span-3' : 'lg:col-span-1'
                }`}
              >
                <div className="flex items-start gap-6 mb-6">
                  <img
                    src={service.icon}
                    alt="service icon"
                    className="w-16 h-16 flex-shrink-0"
                  />
                  
                  <div className="flex-1">
                    <div className="text-green-400 text-sm font-medium mb-2">
                      {service.subtitle}
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-text text-base mb-6">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="text-gray-text text-sm flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-white font-semibold text-lg">
                        {service.price}
                      </div>
                      <div className="text-gray-text text-sm">
                        Timeline: {service.timeline}
                      </div>
                    </div>
                    
                    <SecondaryButton className="w-full">
                      Learn More
                    </SecondaryButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto bg-white rounded-[2rem] shadow-xl flex flex-col items-center p-8 md:p-14">
          <h2 className="text-black text-4xl md:text-5xl font-bold text-center mb-12">
            How we work together
          </h2>
          {/* <div className="text-gray-text text-base text-center mb-12">
            A clear, predictable process from start to finish.
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full pb-12">
            {process.map((step, idx) => (
              <div key={idx}>
                <CurvedCard color="#E7EBE7">
                  <div className="relative rounded-2xl p-8 flex flex-col justify-between min-h-[250px]">
                    <div>
                      <div className="text-green-600 font-bold text-5xl mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-black font-bold text-xl mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm pb-4">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CurvedCard>
              </div>
            ))}
          </div>
        </div>
      </section>

        <div>
          <TechnologiesSection />
        </div>


      {/* CTA Section */}
      <section className="relative w-full py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Stop fighting your tech.
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Start with a free audit. We'll show you what's broken and exactly how to fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div>
              <Button glow className="px-8 py-4">
                Get Free Audit
              </Button>
            </div>
            <div>
              <SecondaryButton className="px-8 py-4">
                Schedule Call
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default ServicesPage;
