import Hero from "./components/Hero";
import FoundersSection from "./components/FoundersSection";
import FixSection from "./components/FixSection";
import StepsSection from "./components/StepsSection";
import CostSection from "./components/CostSection";
import CurvedCard from "./components/mini/CurvedCard";

function App() {
  return (
    <div className="bg-black-fade text-white">
      <Hero />
      <FoundersSection />
      <FixSection />
      <StepsSection />
      <CostSection />
      <CurvedCard /> 
    </div>
  );
}

export default App;
