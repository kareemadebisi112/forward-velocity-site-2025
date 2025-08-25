import Hero from "./components/Hero";
import FoundersSection from "./components/FoundersSection";
import FixSection from "./components/FixSection";
import StepsSection from "./components/StepsSection";
import CostSection from "./components/CostSection";
import TestimonialsSection from "./components/TestimonialsSection";
import NewsletterSection from "./components/NewsletterSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="bg-black-fade text-white">
      <Hero />
      <FoundersSection />
      <FixSection />
      <StepsSection />
      <CostSection />
      <TestimonialsSection />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
}

export default App;
