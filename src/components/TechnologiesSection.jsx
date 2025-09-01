import React from "react";
import { motion } from "motion/react";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiAmazonwebservices,
  SiGooglecloud,
  SiDocker,
  SiNextdotjs,
  SiVuedotjs,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiVercel,
  SiStripe,
  SiSalesforce,
  SiHubspot,
  SiZapier,
  SiSlack,
  SiNotion,
  SiShopify,
  SiWordpress,
  SiFigma,
  SiDiscord,
  SiObsidian,
  SiOpenai,
} from "react-icons/si";

const technologies = [

    // Backend
  { name: "Python", icon: SiPython, category: "Backend", color: "#3776AB" },
  { name: "Django", icon: SiDjango, category: "Backend", color: "#092E20" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend", color: "#339933" },
//   { name: "Express", icon: SiExpress, category: "Backend", color: "#000000" },

  // Frontend
  { name: "React", icon: SiReact, category: "Frontend", color: "#61DAFB" },
//   { name: "Next.js", icon: SiNextdotjs, category: "Frontend", color: "#000000" },
//   { name: "Vue.js", icon: SiVuedotjs, category: "Frontend", color: "#4FC08D" },
//   { name: "TypeScript", icon: SiTypescript, category: "Frontend", color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, category: "Frontend", color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend", color: "#06B6D4" },
  
  
  // Database
  { name: "PostgreSQL", icon: SiPostgresql, category: "Database", color: "#336791" },
//   { name: "MongoDB", icon: SiMongodb, category: "Database", color: "#47A248" },
//   { name: "MySQL", icon: SiMysql, category: "Database", color: "#4479A1" },
  { name: "Firebase", icon: SiFirebase, category: "Database", color: "#FFCA28" },
  
  // Cloud & DevOps
  { name: "AWS", icon: SiAmazonwebservices, category: "Cloud", color: "#FF9900" },
//   { name: "Google Cloud", icon: SiGooglecloud, category: "Cloud", color: "#4285F4" },
//   { name: "Docker", icon: SiDocker, category: "DevOps", color: "#2496ED" },
//   { name: "Vercel", icon: SiVercel, category: "Cloud", color: "#000000" },
  
  // Business Tools
  { name: "Salesforce", icon: SiSalesforce, category: "CRM", color: "#00A1E0" },
  { name: "HubSpot", icon: SiHubspot, category: "CRM", color: "#FF7A59" },
  { name: "Stripe", icon: SiStripe, category: "Payments", color: "#008CDD" },
//   { name: "Zapier", icon: SiZapier, category: "Automation", color: "#FF4A00" },
  { name: "Shopify", icon: SiShopify, category: "E-commerce", color: "#7AB55C" },
  { name: "WordPress", icon: SiWordpress, category: "CMS", color: "#21759B" },
  
  // Productivity
  { name: "Slack", icon: SiSlack, category: "Communication", color: "#4A154B" },
//   { name: "Notion", icon: SiNotion, category: "Productivity", color: "#000000" },
//   { name: "Figma", icon: SiFigma, category: "Design", color: "#F24E1E" },
  { name: "Discord", icon: SiDiscord, category: "Communication", color: "#7289DA" },
  { name: "Obsidian", icon: SiObsidian, category: "Productivity", color: "#3B0B45" },

  // AI
  { name: "ChatGPT", icon: SiOpenai, category: "AI", color: "#10B981" },
];

const TechnologiesSection = () => {
  return (
  <section className="w-full flex flex-col items-center pt-20 px-4 md:px-8">
      <div className="max-w-[1440px] bg-white rounded-[2rem] shadow-xl flex flex-col items-center p-8 md:p-14">
        <motion.div
          className="max-w-7xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-black text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Technologies We Master
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From modern frameworks to enterprise platforms, we speak the language of your existing tools 
            and know exactly how to make them work better together.
          </motion.p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.name}
                className="group relative bg-white rounded-lg p-4 border border-gray-200 hover:border-green-400 transition-all duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.4 + (index * 0.02),
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent 
                      size={32} 
                      style={{ color: tech.color }}
                      className="transition-transform duration-200"
                    />
                  </motion.div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                    {tech.name}
                  </span>
                  
                  {/* Category badge */}
                  <span className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {tech.category}
                  </span>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.color}10 0%, transparent 70%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 text-base">
            Don't see your tech stack? <span className="font-semibold text-black">We work with 100+ technologies.</span>
            <br />
            <span className="text-sm">If you use it, we probably know it — and if we don't, we'll learn it fast.</span>
          </p>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
