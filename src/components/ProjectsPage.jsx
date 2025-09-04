import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import FooterSection from "./FooterSection";
import { motion } from "motion/react";
import Button from "./mini/Button";
import { projectsData, categories } from "./data";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.li
      className="card_wrapper work_card tile scale-anm"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Link to={`/projects/${project.slug}`}>
        <div className="card_inner_wrapper">
          <div className="img_wrapper">
            <img
              src={project.image}
              alt={project.title}
              title={project.title}
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="tag-box p_b_8 p_t_24">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>
          <h4 className="d3-link">{project.title}</h4>
          <p className="card_description text_6a6b70">{project.description}</p>
        </div>
      </Link>
    </motion.li>
  );
};

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects
  const filteredProjects = projectsData.filter(project => 
    selectedCategory === "All" || project.tags.includes(selectedCategory)
  );

  return (
    <div className="min-h-screen bg-black-fade">
      <Header />
      
      {/* Hero Section */}
      <section className="work pt-32 pb-20 px-4 md:px-12 our_work">
        <div className="container max-w-7xl mx-auto">
          <div className="row">
            <div className="col-12">
              <h1
                className="text-white text-5xl md:text-7xl font-bold leading-tight mb-12 font-archivo"
              >
                Our work — built with precision <br />and innovation
              </h1>
            </div>
            
            {/* Filter Toolbar */}
            <div className="col-12">
              <motion.div
                className="toolbar mb-8 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              >
                {categories.map(category => (
                  <button
                    key={category}
                    className={`btn filtro ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                    data-rel={category.toLowerCase().replace(/\s+/g, '-')}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            </div>
            
            {/* Projects Grid */}
            <div className="col-12">
              <ul className="p_b_0 work_cards_wrapper p_t_64 p_m_t_80 m_b_0" id="portfolio">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Using your existing design elements */}
      <section className="w-full py-20 px-4 md:px-12 flex items-center justify-center min-h-[400px] relative">
        {/* Background glow effect like your footer */}
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
            Ready to build something incredible?
          </motion.h2>
          
          <motion.p
            className="text-gray-text text-lg md:text-xl mb-8 max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Let's turn your vision into reality. Whether you need a complete system overhaul 
            or want to build something from scratch, we're here to help you move faster.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact">
                <button className="inline-flex items-center px-8 py-3 border-2 border-green-link text-green-link hover:bg-green-link hover:text-white transition-all duration-300 rounded-lg font-medium">
                  Let's discuss your needs
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
      
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .toolbar {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 24px 0;
        }
        
        .btn.filtro {
          background: transparent;
          border: 2px solid #2B2B2B;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn.filtro:hover,
        .btn.filtro.active {
          background: #159653;
          border-color: #159653;
          color: white;
          transform: translateY(-2px);
        }
        
        .work_cards_wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .card_wrapper {
          background: #191919;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid #2B2B2B;
          group: true;
        }
        
        .card_wrapper:hover {
          border-color: #159653;
          box-shadow: 0 20px 40px rgba(21, 150, 83, 0.15);
        }
        
        .card_inner_wrapper {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        
        .img_wrapper {
          position: relative;
          height: 240px;
          overflow: hidden;
        }
        
        .img_wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .tag-box {
          padding: 24px 24px 8px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .tag {
          background: #159653;
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .d3-link {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 24px 16px;
          line-height: 1.3;
          transition: color 0.3s ease;
        }
        
        .card_wrapper:hover .d3-link {
          color: #6FD287;
        }
        
        .card_description {
          color: #A0ACA1;
          font-size: 16px;
          line-height: 1.5;
          margin: 0 24px 24px;
        }
        
        .text_6a6b70 {
          color: #A0ACA1;
        }
        
        @media (max-width: 768px) {
          .work_cards_wrapper {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          .toolbar {
            gap: 8px;
          }
          
          .btn.filtro {
            font-size: 12px;
            padding: 8px 16px;
          }
        }
        
        .scale-anm {
          opacity: 1;
          transform: scale(1);
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
