import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import BlogPage from "./components/BlogPage";
import BlogDetailPage from "./components/BlogDetailPage";
import ResourcesPage from "./components/ResourcesPage";
import ToolsPage from "./components/ToolsPage";
import ProjectsPage from "./components/ProjectsPage";
import ProjectDetailPage from "./components/ProjectDetailPage";
import IntakePortal from "./components/IntakePortal";
import useCanonicalURL from "./hooks/useCanonicalURL";
import useSEO from "./hooks/useSEO";

function AppContent() {
  useCanonicalURL(); // Handle dynamic canonical URLs
  useSEO(); // Handle dynamic meta tags and titles
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/start" element={<IntakePortal />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogDetailPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/tools" element={<ToolsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <div className="">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
