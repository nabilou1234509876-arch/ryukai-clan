import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import AboutSection from "./components/AboutSection";
import DiscordWidget from "./components/DiscordWidget";
import FoundersSection from "./components/FoundersSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <DiscordWidget />
      <FoundersSection />
    </div>
  );
}
