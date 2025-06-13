import HeroSection from "../components/LandingPage/HeroSection";
import AboutSection from "../components/LandingPage/AboutSection";
import ProjectsTeaserSection from "../components/LandingPage/ProjectsTeaserSection";
import SkillsSection from "../components/LandingPage/SkillsSection";
import ContactSection from "../components/LandingPage/ContactSection";
import FiguresSection from "../components/LandingPage/Figures";
import SplitSection from "../components/LandingPage/SplitSection";
import CareerSection from "../components/LandingPage/CareerSection";
import RoadMap from "../components/LandingPage/RoadmapSection";
import ImageSection from "../components/LandingPage/ImageSection";

export default function Home() {
  return (
    <div className="min-h-screen text-black flex flex-col items-stretch px-0 py-0 font-sans relative overflow-x-hidden"  id="top">
        <HeroSection />
        <RoadMap/>
        <AboutSection />
        <ImageSection />
        <FiguresSection />
        <ProjectsTeaserSection />
        <SkillsSection />
        <CareerSection />
        <ContactSection />
        <SplitSection />
    </div>
  );
}
