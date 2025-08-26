import React from "react";
import Button from "./mini/Button";
import Logo from "./mini/Logo";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const FooterSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 15,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <footer className="w-full relative pt-16 px-4 md:px-16">
      <motion.div
        className="absolute left-1/2 bottom-0 w-[90vw] max-w-7xl h-[250px] pointer-events-none -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, #159653cc 0%, #6FD28788 60%, transparent 100%)",
          filter: "blur(100px)",
          opacity: 1,
        }}
        animate={{
          // scale: [1, 0.9, 1],
          opacity: [1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="max-w-7xl relative mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between pb-10"
          variants={containerVariants}
        >
          <motion.div className="mb-6 md:mb-0" variants={itemVariants}>
            <motion.h2
              className="text-white font-semibold text-2xl mb-2"
              variants={itemVariants}
            >
              Stay sharp.
            </motion.h2>
            <motion.p
              className="text-gray-text text-base mb-4 max-w-2xl"
              variants={itemVariants}
            >
              Join our list for occasional insights on fixing broken systems,
              streamlining operations, and using tech to move faster -- whether
              you're starting out or scaling up.
            </motion.p>
          </motion.div>

          <motion.form
            className="flex gap-2 items-center w-full md:w-auto"
            variants={itemVariants}
          >
            <motion.input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-lg bg-black/50 text-white border-none outline-none w-48 md:w-64 transition-all duration-300"
              whileFocus={{
                boxShadow: "0 0 0 2px rgb(34 197 94)",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              }}
              variants={itemVariants}
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <Button className="bg-green-500 text-black font-semibold px-6 py-2">
                Subscribe
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>

        <motion.div
          className="flex bg-black rounded-t-[2rem] flex-col justify-between min-h-[250px] p-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.2,
          }}
        >
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between md:items-center">
            <motion.div
              className="flex items-center gap-3 mb-4 md:mb-0 justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5,
                }}
              >
                <Logo size={32} className="mr-2" />
              </motion.div>
              <motion.span
                className="text-white font-bold text-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Forward Velocity
              </motion.span>
            </motion.div>

            <motion.nav
              className="flex flex-wrap gap-x-6 gap-y-2 text-white text-base mb-4 md:mb-0 justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delayChildren: 0.7, staggerChildren: 0.1 }}
            >
              {[
                "Home",
                "Services",
                "Industries",
                "How It Works",
                "Contact",
                "Testimonials",
              ].map((nav, idx) => (
                <motion.a
                  key={nav}
                  href="#"
                  className="hover:text-green-400 transition-colors duration-300 relative group"
                  variants={navItemVariants}
                  whileHover={{ y: -2 }}
                >
                  {nav}
                  <motion.span
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-400 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.nav>
          </div>

          <motion.div
            className="flex flex-col items-center gap-4 mt-6 md:flex-row md:justify-between md:items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-gray-text-fade text-center md:text-left"
              variants={itemVariants}
            >
              © {new Date().getFullYear()} Forward Velocity. All rights
              reserved.
            </motion.div>
            <motion.div
              className="flex gap-2 justify-center md:justify-end"
              variants={containerVariants}
            >
              {[
                { icon: FaFacebookF, className: "bg-green-600" },
                {
                  icon: FaInstagram,
                  className: "bg-black border border-gray-700",
                },
                {
                  icon: FaLinkedinIn,
                  className: "bg-black border border-gray-700",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`${social.className} rounded-full w-8 h-8 flex items-center justify-center text-white shadow-lg`}
                  variants={socialIconVariants}
                  whileHover="hover"
                  transition={{
                    delay: 0.9 + index * 0.1,
                  }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
