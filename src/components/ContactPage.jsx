import React, { useState } from "react";
import { motion } from "motion/react";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "./Header";
import FooterSection from "./FooterSection";
import Button from "./mini/Button";
import SecondaryButton from "./mini/SecondaryButton";
import { useProjectInquirySubmission } from "../hooks/useFormSubmission";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    projectType: "",
    timeline: "",
    budget: "",
    message: "",
    newsletterSignup: false,
    captchaToken: null
  });

  const { isSubmitting, submitted, submit } = useProjectInquirySubmission({
    onSuccess: () => {
      // Form submission successful, submitted state will be true
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.captchaToken) {
      alert("Please complete the verification by checking the box above.");
      return;
    }
    
    await submit(
      "contact",
      "contact-page",
      {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        role: formData.role,
        phone: formData.phone,
        project_type: formData.projectType,
        timeline: formData.timeline,
        budget: formData.budget,
        message: formData.message,
        form_type: "contact_page"
      },
      {
        consent: {
          terms: true,
          newsletter: formData.newsletterSignup,
          captcha_verified: true
        }
      }
    );
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <motion.div
            className="text-center max-w-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
            >
              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </motion.div>
            <h1
              className="text-white text-4xl md:text-5xl font-bold mb-6"
            >
              Thanks for reaching out!
            </h1>
            <motion.p
              className="text-gray-400 text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              We'll review your project details and get back to you within 24 hours with a custom plan.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <SecondaryButton onClick={() => window.location.href = "/"}>
                Back to Home
              </SecondaryButton>
            </motion.div>
          </motion.div>
        </section>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-white text-5xl md:text-7xl font-bold mb-6"
          >
            Let's build something
            <br />
            <span className="text-green-400">amazing together</span>
          </h1>
          
          <motion.p
            className="text-gray-400 text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tell us about your project. We'll get you a custom plan within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
                      placeholder="Company Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Your Role
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select your role</option>
                      <option value="founder">Founder/CEO</option>
                      <option value="cto">CTO/Tech Lead</option>
                      <option value="marketing">Marketing Director</option>
                      <option value="operations">Operations Manager</option>
                      {/* <option value="product">Product Manager</option> */}
                      {/* <option value="developer">Developer</option> */}
                      {/* <option value="consultant">Consultant</option> */}
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      What do you need? *
                    </label>
                    <select
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="performance">Speed & Performance</option>
                      <option value="integration">Systems & Integration</option>
                      <option value="cleanup">Cleanup & Fixes</option>
                      <option value="custom">Custom Solutions</option>
                      <option value="consultation">Free Tech Check</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (Rush job)</option>
                      <option value="1-4weeks">1-4 weeks</option>
                      <option value="4months">Within 4 months</option>
                      <option value="flexible">Flexible</option>
                      <option value="not-sure">Not sure yet</option>

                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    What's the problem? *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors resize-vertical"
                    placeholder="Describe what you're looking to build, fix, or improve. The more details you provide, the better we can help you."
                  />
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-700 bg-gray-900/50">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.newsletterSignup}
                      onChange={(e) => setFormData(prev => ({ ...prev, newsletterSignup: e.target.checked }))}
                      className="mt-1 w-5 h-5 rounded border-2 border-gray-600 bg-gray-800 checked:bg-green-400 checked:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      I'd like to receive your monthly newsletter with marketing tips, case studies, and industry insights
                    </span>
                  </label>
                </div>

                <div className="flex justify-center">
                  <ReCAPTCHA
                    sitekey="6LdfN70rAAAAAPvCS2lwpq9AfiioXKLkUcDeq5Py"
                    onChange={(token) => setFormData(prev => ({ ...prev, captchaToken: token }))}
                    onExpired={() => setFormData(prev => ({ ...prev, captchaToken: null }))}
                    theme="dark"
                  />
                </div>

                <motion.div
                  className="pt-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    disabled={isSubmitting || !formData.captchaToken}
                    className="w-full py-4 text-lg font-semibold"
                    glow={!isSubmitting && formData.captchaToken}
                  >
                    {isSubmitting ? "Sending..." : "Send Project Details"}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Right Side - Info */}
            <motion.div
              className="lg:pl-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-white text-2xl font-bold mb-6">
                  What happens next?
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-black font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        Quick Response
                      </h4>
                      <p className="text-gray-400">
                        We review your project and respond within 24 hours.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-black font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        Custom Proposal
                      </h4>
                      <p className="text-gray-400">
                        Detailed proposal with timeline, pricing, and deliverables.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-black font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        Get Started
                      </h4>
                      <p className="text-gray-400">
                        Most projects begin within days of approval.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800">
                  <h4 className="text-white font-semibold mb-4">
                    Prefer to talk first?
                  </h4>
                  <div className="space-y-3">
                    <a
                      href="mailto:kareem@forward-velocity.com"
                      className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      kareem@forward-velocity.com
                    </a>
                    {/* <a
                      href="tel:+1234567890"
                      className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      (555) 123-4567
                    </a> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ContactPage;
