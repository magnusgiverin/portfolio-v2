import HeroSection from "../components/LandingPage/HeroSection";
import AboutSection from "../components/LandingPage/AboutSection";
import ProjectsTeaserSection from "../components/LandingPage/ProjectsTeaserSection";
import SkillsSection from "../components/LandingPage/SkillsSection";
import ContactSection from "../components/LandingPage/ContactSection";
import FiguresSection from "../components/LandingPage/Figures";
import SplitSection from "../components/LandingPage/SplitSection";
import CareerSection from "../components/LandingPage/CareerSection";

export default function Home() {
  return (
    <div className="min-h-screen text-black flex flex-col items-stretch px-0 py-0 font-sans relative overflow-x-hidden ">
        <HeroSection />
        <AboutSection />
        <FiguresSection />
        <ProjectsTeaserSection />
        <SkillsSection />
        <CareerSection />
        <ContactSection />
        <SplitSection />
    </div>
  );
}
