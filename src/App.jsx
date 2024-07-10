import ContactSection from "./components/ContactSection"
import CVPortfolioSection from "./components/CVPortfolioSection"
import ExperienceEducationSection from "./components/ExperienceEducationSection"
import Header from "./components/Header"
import PortfolioGallerySection from "./components/PortfolioGallerySection"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="relative">
      <Sidebar />
      <Header />
      <ExperienceEducationSection />
      <PortfolioGallerySection />
      <CVPortfolioSection />
      <ContactSection />
    </div>
  )
}

export default App
