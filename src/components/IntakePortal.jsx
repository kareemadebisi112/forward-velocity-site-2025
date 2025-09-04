import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "./Header";
import FooterSection from "./FooterSection";
import Button from "./mini/Button";
import SecondaryButton from "./mini/SecondaryButton";
import { useProjectInquirySubmission } from "../hooks/useFormSubmission";

const IntakePortal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: What they need (easiest - just clicking)
    projectType: "",
    
    // Step 2: Basic info (medium easy - just name/email)
    name: "",
    email: "",
    
    // Step 3: Project details (medium - multiple choice)
    timeline: "",
    painPoints: [],
    
    // Step 4: Business context (getting more personal)
    company: "",
    role: "",
    teamSize: "",
    
    // Step 5: Budget & contact (hardest - money & phone)
    budget: "",
    phone: "",
    message: "",
    
    // Step 6: Success - confirmation
    preferredContact: "email",
    
    // CAPTCHA verification
    captchaToken: null,
    
    // Newsletter signup
    newsletterSignup: false
  });

  const { isSubmitting, submitted, submit } = useProjectInquirySubmission({
    onSuccess: () => {
      setCurrentStep(6);
    }
  });

  const totalSteps = 6;

  // Step components
  const renderStep = () => {
    if (currentStep === 1) {
      return (
        <div className="text-center w-full max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What brings you here today?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Let's start with what you're looking to accomplish. Pick the option that best describes your needs:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              {
                id: "performance",
                title: "🚀 Speed Up My Site",
                description: "My website is slow and I'm losing customers",
                popular: true
              },
              {
                id: "integration", 
                title: "🔗 Connect My Systems",
                description: "I need different tools to work together"
              },
              {
                id: "cleanup",
                title: "🧹 Fix & Clean Up",
                description: "Something's broken and needs fixing"
              },
              {
                id: "custom",
                title: "⚡ Build Something New",
                description: "I have a custom project in mind"
              },
              {
                id: "consultation",
                title: "🔍 Free Tech Checkup",
                description: "Not sure what I need, want expert advice"
              },
              {
                id: "not-sure",
                title: "🤔 I'm Not Sure Yet",
                description: "Let's figure it out together"
              }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  setFormData(prev => ({ ...prev, projectType: option.id }));
                  setTimeout(() => setCurrentStep(2), 300);
                }}
                className={`relative p-6 rounded-xl border-2 text-left transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                  formData.projectType === option.id
                    ? "border-green-400 bg-green-400/10"
                    : "border-gray-700 bg-gray-900 hover:border-green-400/50 hover:bg-gray-800"
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-2 -right-2 bg-green-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <h3 className="text-white text-lg font-semibold mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {option.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (currentStep === 2) {
      return (
        <div className="text-center max-w-2xl mx-auto w-full">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" />
              </svg>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nice to meet you! 👋
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            What should we call you? Just the basics for now.
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-white text-lg font-medium mb-3 text-left">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white text-lg placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-white text-lg font-medium mb-3 text-left">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white text-lg placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="flex justify-between mt-12">
            <SecondaryButton onClick={() => setCurrentStep(1)}>
              ← Back
            </SecondaryButton>
            <Button 
              onClick={() => setCurrentStep(3)}
              disabled={!formData.name || !formData.email}
              glow={formData.name && formData.email}
            >
              Continue →
            </Button>
          </div>
        </div>
      );
    }

    if (currentStep === 3) {
      return (
        <div className="text-center max-w-4xl mx-auto w-full">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm8 0H8v8h8V5z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Timeline & Budget
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            When do you need this done? And what's your budget range?
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-white text-xl font-semibold mb-6 text-left">
                Timeline Preference:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { id: "asap", label: "🔥 ASAP", desc: "Rush job" },
                  { id: "1-4weeks", label: "⚡ 1-4 weeks", desc: "Soon" },
                  { id: "4months", label: "📅 4 months", desc: "Planning ahead" },
                  { id: "flexible", label: "🌱 Flexible", desc: "When it's right" }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setFormData(prev => ({ ...prev, timeline: option.id }))}
                    className={`p-4 rounded-xl border-2 text-center transition-all duration-300 ${
                      formData.timeline === option.id
                        ? "border-green-400 bg-green-400/10"
                        : "border-gray-700 bg-gray-900 hover:border-green-400/50"
                    }`}
                  >
                    <div className="text-lg font-semibold text-white mb-1">
                      {option.label}
                    </div>
                    <div className="text-sm text-gray-400">
                      {option.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white text-xl font-semibold mb-6 text-left">
                Budget Range (Optional but helpful):
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: "under-5k", label: "Under $5,000", desc: "Small fixes" },
                  { id: "5k-15k", label: "$5,000 - $15,000", desc: "Medium project" },
                  { id: "15k-50k", label: "$15,000 - $50,000", desc: "Major rebuild" },
                  { id: "50k-plus", label: "$50,000+", desc: "Enterprise" },
                  { id: "not-sure", label: "Not sure yet", desc: "Let's discuss" }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setFormData(prev => ({ ...prev, budget: option.id }))}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                      formData.budget === option.id
                        ? "border-green-400 bg-green-400/10"
                        : "border-gray-700 bg-gray-900 hover:border-green-400/50"
                    }`}
                  >
                    <div className="text-white font-semibold">{option.label}</div>
                    <div className="text-gray-400 text-sm">{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-12">
            <SecondaryButton onClick={() => setCurrentStep(2)}>
              ← Back
            </SecondaryButton>
            <Button 
              onClick={() => setCurrentStep(4)}
              disabled={!formData.timeline}
              glow={formData.timeline}
            >
              Continue →
            </Button>
          </div>
        </div>
      );
    }

    if (currentStep === 4) {
      return (
        <div className="text-center max-w-3xl mx-auto w-full">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            A bit about your business
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            This helps us understand your context and provide better recommendations.
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-white text-lg font-medium mb-3 text-left">
                Company/Organization (Optional)
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white text-lg placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
                placeholder="Your company name"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-lg font-medium mb-3 text-left">
                  Your Role
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white text-lg focus:border-green-400 focus:outline-none transition-colors"
                >
                  <option value="">Select your role</option>
                  <option value="founder">Founder/CEO</option>
                  <option value="cto">CTO/Tech Lead</option>
                  <option value="marketing">Marketing</option>
                  <option value="operations">Operations</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-white text-lg font-medium mb-3 text-left">
                  Team Size
                </label>
                <select
                  value={formData.teamSize}
                  onChange={(e) => setFormData(prev => ({ ...prev, teamSize: e.target.value }))}
                  className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white text-lg focus:border-green-400 focus:outline-none transition-colors"
                >
                  <option value="">Select team size</option>
                  <option value="solo">Just me</option>
                  <option value="2-10">2-10 people</option>
                  <option value="11-50">11-50 people</option>
                  <option value="51-200">51-200 people</option>
                  <option value="200+">200+ people</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-12">
            <SecondaryButton onClick={() => setCurrentStep(3)}>
              ← Back
            </SecondaryButton>
            <Button onClick={() => setCurrentStep(5)} glow>
              Almost Done →
            </Button>
          </div>
        </div>
      );
    }

    if (currentStep === 5) {
      return (
        <div className="text-center max-w-3xl mx-auto w-full">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4z" />
                <path d="M6 8a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V8zm6 4a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How can we reach you?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Last step! Tell us how to reach you and any project details.
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-white text-lg font-medium mb-3 text-left">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white text-lg placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-white text-lg font-medium mb-3 text-left">
                Project Details / Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                rows={4}
                className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white text-lg placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors resize-vertical"
                placeholder="Describe your project, goals, or any specific questions you have..."
              />
            </div>

            <div>
              <h3 className="text-white text-xl font-semibold mb-6 text-left">
                How would you prefer we contact you?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: "email", label: "📧 Email", desc: "Send me details" },
                  { id: "call", label: "📞 Phone Call", desc: "Let's talk" }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setFormData(prev => ({ ...prev, preferredContact: option.id }))}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                      formData.preferredContact === option.id
                        ? "border-green-400 bg-green-400/10"
                        : "border-gray-700 bg-gray-900 hover:border-green-400/50"
                    }`}
                  >
                    <div className="text-white font-semibold">{option.label}</div>
                    <div className="text-gray-400 text-sm">{option.desc}</div>
                  </button>
                ))}
              </div>
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

            <div className="flex justify-center mt-8">
              <ReCAPTCHA
                sitekey="6LdfN70rAAAAAPvCS2lwpq9AfiioXKLkUcDeq5Py" // You'll need to replace this with your actual site key
                onChange={(token) => setFormData(prev => ({ ...prev, captchaToken: token }))}
                onExpired={() => setFormData(prev => ({ ...prev, captchaToken: null }))}
                theme="dark"
              />
            </div>
          </div>

          <div className="flex justify-between mt-12">
            <SecondaryButton onClick={() => setCurrentStep(4)}>
              ← Back
            </SecondaryButton>
            <Button 
              onClick={async () => {
                if (!formData.captchaToken) {
                  alert("Please complete the verification by checking the box above.");
                  return;
                }
                
                await submit(
                  "intake",
                  "site-intake",
                  {
                    project_type: formData.projectType,
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    role: formData.role,
                    team_size: formData.teamSize,
                    timeline: formData.timeline,
                    pain_points: formData.painPoints,
                    budget: formData.budget,
                    phone: formData.phone,
                    message: formData.message,
                    preferred_contact: formData.preferredContact,
                    form_type: "intake_portal",
                    step_completed: currentStep
                  },
                  {
                    consent: {
                      terms: true,
                      captcha_verified: true,
                      newsletter: formData.newsletterSignup
                    }
                  }
                );
              }}
              disabled={isSubmitting || !formData.captchaToken}
              glow={!isSubmitting && formData.captchaToken}
            >
              {isSubmitting ? "Sending..." : "Submit My Project →"}
            </Button>
          </div>
        </div>
      );
    }

    if (currentStep === 6) {
      return (
        <div className="text-center max-w-2xl mx-auto w-full">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🎉 Awesome, {formData.name?.split(' ')[0]}!
          </h1>
          
          <p className="text-xl text-gray-400 mb-8">
            We've received your project details and will get back to you within 24 hours with a custom plan.
          </p>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 mb-8">
            <h3 className="text-white text-xl font-semibold mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-sm">1</span>
                </div>
                <p className="text-gray-300">We review your project details</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-sm">2</span>
                </div>
                <p className="text-gray-300">Get a custom proposal within 24 hours</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-sm">3</span>
                </div>
                <p className="text-gray-300">Schedule a call to discuss next steps</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button onClick={() => window.location.href = "/"} glow>
              Back to Home
            </Button>
            <div className="text-sm text-gray-500">
              Questions? Email us at hello@forwardvelocity.com
            </div>
          </div>
        </div>
      );
    }

    // Return placeholder for other steps for now
    return <div>Other steps...</div>;
  };

  // Step components
  const Step1 = () => (
    <div className="text-center w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        What brings you here today?
      </h2>
      <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
        Let's start with what you're looking to accomplish. Pick the option that best describes your needs:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {[
          {
            id: "performance",
            title: "🚀 Speed Up My Site",
            description: "My website is slow and I'm losing customers",
            popular: true
          },
          {
            id: "integration", 
            title: "🔗 Connect My Systems",
            description: "I need different tools to work together"
          },
          {
            id: "cleanup",
            title: "🧹 Fix & Clean Up",
            description: "Something's broken and needs fixing"
          },
          {
            id: "custom",
            title: "⚡ Build Something New",
            description: "I have a custom project in mind"
          },
          {
            id: "consultation",
            title: "🔍 Free Tech Checkup",
            description: "Not sure what I need, want expert advice"
          },
          {
            id: "not-sure",
            title: "🤔 I'm Not Sure Yet",
            description: "Let's figure it out together"
          }
        ].map((option) => (
          <button
            key={option.id}
            onClick={() => {
              updateFormData("projectType", option.id);
              setTimeout(nextStep, 300);
            }}
            className={`relative p-6 rounded-xl border-2 text-left transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
              formData.projectType === option.id
                ? "border-green-400 bg-green-400/10"
                : "border-gray-700 bg-gray-900 hover:border-green-400/50 hover:bg-gray-800"
            }`}
          >
            {option.popular && (
              <div className="absolute -top-2 -right-2 bg-green-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                Popular
              </div>
            )}
            <h3 className="text-white text-lg font-semibold mb-2">
              {option.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {option.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );

  const Step2 = () => (
    <div className="text-center max-w-2xl mx-auto w-full">
      <div className="mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
            <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" />
          </svg>
        </div>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Nice to meet you! 👋
      </h2>
      <p className="text-xl text-gray-400 mb-12">
        What should we call you? Just the basics for now.
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-white text-lg font-medium mb-3 text-left">
            Your Name *
          </label>
          <input
            type="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white text-lg placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-white text-lg font-medium mb-3 text-left">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white text-lg placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="flex justify-between mt-12">
        <SecondaryButton onClick={prevStep}>
          ← Back
        </SecondaryButton>
        <Button 
          onClick={nextStep}
          disabled={!formData.name || !formData.email}
          glow={formData.name && formData.email}
        >
          Continue →
        </Button>
      </div>
    </div>
  );

  const Step3 = () => (
    <div className="text-center max-w-4xl mx-auto w-full">
      <div className="mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm8 0H8v8h8V5z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Tell us about your timeline
      </h2>
      <p className="text-xl text-gray-400 mb-12">
        When do you need this done? And what's causing you the most frustration right now?
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="text-white text-xl font-semibold mb-6 text-left">
            Timeline Preference:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: "asap", label: "🔥 ASAP", desc: "Rush job" },
              { id: "1-4weeks", label: "⚡ 1-4 weeks", desc: "Soon" },
              { id: "4months", label: "📅 4 months", desc: "Planning ahead" },
              { id: "flexible", label: "🌱 Flexible", desc: "When it's right" }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => updateFormData("timeline", option.id)}
                className={`p-4 rounded-xl border-2 text-center transition-all duration-300 ${
                  formData.timeline === option.id
                    ? "border-green-400 bg-green-400/10"
                    : "border-gray-700 bg-gray-900 hover:border-green-400/50"
                }`}
              >
                <div className="text-lg font-semibold text-white mb-1">
                  {option.label}
                </div>
                <div className="text-sm text-gray-400">
                  {option.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white text-xl font-semibold mb-6 text-left">
            What's bugging you most? (Select all that apply)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "💔 Site is too slow",
              "🤯 Systems don't talk to each other", 
              "😤 Constantly fixing things",
              "💸 Losing money due to tech issues",
              "⏰ Wasting time on manual work",
              "📱 Not mobile-friendly",
              "🔒 Security concerns",
              "📊 Can't track what's working"
            ].map((pain) => (
              <button
                key={pain}
                onClick={() => {
                  const current = formData.painPoints || [];
                  const updated = current.includes(pain)
                    ? current.filter(p => p !== pain)
                    : [...current, pain];
                  updateFormData("painPoints", updated);
                }}
                className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                  formData.painPoints?.includes(pain)
                    ? "border-green-400 bg-green-400/10"
                    : "border-gray-700 bg-gray-900 hover:border-green-400/50"
                }`}
              >
                <span className="text-white font-medium">{pain}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-12">
        <SecondaryButton onClick={prevStep}>
          ← Back
        </SecondaryButton>
        <Button 
          onClick={nextStep}
          disabled={!formData.timeline}
          glow={formData.timeline}
        >
          Continue →
        </Button>
      </div>
    </div>
  );

  const Step4 = () => (
    <div className="text-center max-w-3xl mx-auto w-full">
      <div className="mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        A bit about your business
      </h2>
      <p className="text-xl text-gray-400 mb-12">
        This helps us understand your context and provide better recommendations.
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-white text-lg font-medium mb-3 text-left">
            Company/Organization (Optional)
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
            className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white text-lg placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
            placeholder="Your company name"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white text-lg font-medium mb-3 text-left">
              Your Role
            </label>
            <select
              value={formData.role}
              onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
              className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white text-lg focus:border-green-400 focus:outline-none transition-colors"
            >
              <option value="">Select your role</option>
              <option value="founder">Founder/CEO</option>
              <option value="cto">CTO/Tech Lead</option>
              <option value="marketing">Marketing</option>
              <option value="operations">Operations</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-white text-lg font-medium mb-3 text-left">
              Team Size
            </label>
            <select
              value={formData.teamSize}
              onChange={(e) => setFormData(prev => ({ ...prev, teamSize: e.target.value }))}
              className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white text-lg focus:border-green-400 focus:outline-none transition-colors"
            >
              <option value="">Select team size</option>
              <option value="solo">Just me</option>
              <option value="2-10">2-10 people</option>
              <option value="11-50">11-50 people</option>
              <option value="51-200">51-200 people</option>
              <option value="200+">200+ people</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-12">
        <SecondaryButton onClick={prevStep}>
          ← Back
        </SecondaryButton>
        <Button onClick={nextStep} glow>
          Almost Done →
        </Button>
      </div>
    </div>
  );

  const Step5 = () => (
    <div className="text-center max-w-3xl mx-auto w-full">
      <div className="mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4z" />
            <path d="M6 8a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V8zm6 4a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </div>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Let's talk details
      </h2>
      <p className="text-xl text-gray-400 mb-12">
        Last step! Tell us about your budget and how to reach you.
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-white text-lg font-medium mb-3 text-left">
            Budget Range (Optional but helpful)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "under-5k", label: "Under $5,000", desc: "Small fixes" },
              { id: "5k-15k", label: "$5,000 - $15,000", desc: "Medium project" },
              { id: "15k-50k", label: "$15,000 - $50,000", desc: "Major rebuild" },
              { id: "50k-plus", label: "$50,000+", desc: "Enterprise" },
              { id: "not-sure", label: "Not sure yet", desc: "Let's discuss" }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => updateFormData("budget", option.id)}
                className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                  formData.budget === option.id
                    ? "border-green-400 bg-green-400/10"
                    : "border-gray-700 bg-gray-900 hover:border-green-400/50"
                }`}
              >
                <div className="text-white font-semibold">{option.label}</div>
                <div className="text-gray-400 text-sm">{option.desc}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-white text-lg font-medium mb-3 text-left">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white text-lg placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-white text-lg font-medium mb-3 text-left">
            Project Details / Message
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            rows={4}
            className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white text-lg placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors resize-vertical"
            placeholder="Describe your project, goals, or any specific questions you have..."
          />
        </div>

        <div>
          <h3 className="text-white text-xl font-semibold mb-6 text-left">
            How would you prefer we contact you?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "email", label: "📧 Email", desc: "Send me details" },
              { id: "call", label: "📞 Phone Call", desc: "Let's talk" }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => updateFormData("preferredContact", option.id)}
                className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                  formData.preferredContact === option.id
                    ? "border-green-400 bg-green-400/10"
                    : "border-gray-700 bg-gray-900 hover:border-green-400/50"
                }`}
              >
                <div className="text-white font-semibold">{option.label}</div>
                <div className="text-gray-400 text-sm">{option.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-12">
        <SecondaryButton onClick={prevStep}>
          ← Back
        </SecondaryButton>
        <Button 
          onClick={handleSubmit}
          disabled={isSubmitting}
          glow={!isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit My Project →"}
        </Button>
      </div>
    </div>
  );

  const Step6 = () => (
    <div className="text-center max-w-2xl mx-auto w-full">
      <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
        <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        🎉 Awesome, {formData.name?.split(' ')[0]}!
      </h1>
      
      <p className="text-xl text-gray-400 mb-8">
        We've received your project details and will get back to you within 24 hours with a custom plan.
      </p>

      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 mb-8">
        <h3 className="text-white text-xl font-semibold mb-4">What happens next?</h3>
        <div className="space-y-3 text-left">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-black font-bold text-sm">1</span>
            </div>
            <p className="text-gray-300">We review your project details</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-black font-bold text-sm">2</span>
            </div>
            <p className="text-gray-300">Get a custom proposal within 24 hours</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-black font-bold text-sm">3</span>
            </div>
            <p className="text-gray-300">Schedule a call to discuss next steps</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Button onClick={() => window.location.href = "/"} glow>
          Back to Home
        </Button>
        <div className="text-sm text-gray-500">
          Questions? Email us at hello@forwardvelocity.com
        </div>
      </div>
    </div>
  );

  if (submitted) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <Step6 />
        </section>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-center mb-4">
              <div className="text-sm text-gray-400">
                Step {currentStep} of {totalSteps - 1}
              </div>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 max-w-md mx-auto">
              <div
                className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
              />
            </div>
          </div>

          {/* Step Content */}
          <div className="min-h-[600px] flex items-center justify-center">
            <div className="w-full">
              {renderStep()}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntakePortal;
