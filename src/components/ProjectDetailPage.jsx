import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import FooterSection from "./FooterSection";
import { motion } from "motion/react";
import Button from "./mini/Button";
import { projectsData, relatedProjects } from "./data";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black-fade">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-green-link hover:text-green-light transition-colors">
            ← Back to Projects
          </Link>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black-fade">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link to="/projects" className="text-green-link hover:text-green-light transition-colors">
              ← Back to Projects
            </Link>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Tags */}
              <div className="mb-8">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="brand-tag mr-3 mb-2 inline-block">{tag}</span>
                ))}
              </div>
              
              <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
                {project.title}
              </h1>
              
              <p className="text-gray-text text-xl mb-8 leading-relaxed">
                {project.fullDescription}
              </p>

              {/* Project Info */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm mb-8">
                <div>
                  <p className="text-gray-text uppercase tracking-wide mb-1">Duration</p>
                  <p className="text-white font-medium">{project.duration}</p>
                </div>
                <div>
                  <p className="text-gray-text uppercase tracking-wide mb-1">Team Size</p>
                  <p className="text-white font-medium">{project.teamSize}</p>
                </div>
                <div>
                  <p className="text-gray-text uppercase tracking-wide mb-1">Status</p>
                  <p className="text-green-light font-medium">{project.status}</p>
                </div>
              </div>

              {/* Action Buttons */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex flex-wrap gap-4">
                  {/* {project.liveUrl && (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <Button>View Live Project</Button>
                      </a>
                    </motion.div>
                  )} */}
                  {/* {project.githubUrl && (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border-2 border-green-link text-green-link hover:bg-green-link hover:text-white transition-all duration-300 rounded-lg font-medium"
                      >
                        View Code
                      </a>
                    </motion.div>
                  )} */}
                </div>
              )}
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-white text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Technology Stack
          </motion.h2>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag-large">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenges, Solutions, Results */}
      <section className="py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-white text-2xl font-bold mb-6">
                Challenges
              </h3>
              <div className="space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <div key={idx} className="border-l-4 border-green-link pl-4">
                    <p className="text-gray-text leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-white text-2xl font-bold mb-6">
                Solutions
              </h3>
              <div className="space-y-4">
                {project.solutions.map((solution, idx) => (
                  <div key={idx} className="border-l-4 border-green-light pl-4">
                    <p className="text-gray-text leading-relaxed">{solution}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-white text-2xl font-bold mb-6">
                Results
              </h3>
              <div className="space-y-4">
                {project.results.map((result, idx) => (
                  <div key={idx} className="border-l-4 border-green-light pl-4">
                    <p className="text-green-light leading-relaxed font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 px-4 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-white text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            More Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedProjects.filter(p => p.id !== project.id).slice(0, 3).map((relatedProject, index) => (
              <motion.div
                key={relatedProject.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8 }}
              >
                <Link to={`/projects/${relatedProject.id}`}>
                  <div className="bg-card-bg border border-card-border rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-green-link">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {relatedProject.tags.map((tag, idx) => (
                          <span key={idx} className="brand-tag-small">{tag}</span>
                        ))}
                      </div>
                      <h3 className="text-white text-xl font-bold group-hover:text-green-light transition-colors">
                        {relatedProject.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 md:px-12 flex items-center justify-center min-h-[400px] relative">
        {/* Background glow effect */}
        <div
          className="absolute left-1/2 top-1/2 w-[90vw] max-w-7xl h-[300px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center, #159653cc 0%, #6FD28788 60%, transparent 100%)",
            filter: "blur(100px)",
            opacity: 0.6,
          }}
        />
        
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center text-center relative z-10">
          <motion.h2
            className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Ready for your next project?
          </motion.h2>
          
          <motion.p
            className="text-gray-text text-lg md:text-xl mb-8 max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Let's discuss how we can help you achieve similar results. 
            We're ready to turn your vision into reality.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact">
                <Button>Start Your Project</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
      
      <style jsx>{`
        .brand-tag {
          background: #159653;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }
        
        .brand-tag-small {
          background: #159653;
          color: white;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .tech-tag-large {
          background: #159653;
          color: white;
          padding: 12px 20px;
          border-radius: 25px;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .tech-tag-large:hover {
          background: #6FD287;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default ProjectDetailPage;
