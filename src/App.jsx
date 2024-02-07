import ContactSection from "./components/ContactSection"
import ExperienceEducationSection from "./components/ExperienceEducationSection"
import Header from "./components/Header"
import PortfolioGallerySection from "./components/PortfolioGallerySection"
import Sidebar from "./components/Sidebar"
import Title from "./components/title"

function App() {
  return (
    <div className="relative">
      <Sidebar />
      <Header />
      <ExperienceEducationSection />
      <PortfolioGallerySection />
      <ContactSection />
    </div>
  )
}

export default App
