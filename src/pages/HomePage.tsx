import { NavBar } from "@/components/navigation/nav-bar";
import { Home } from "@/sections/home";
import { HowIWork } from "@/sections/how-i-work";
import { CaseStudies } from "@/sections/case-studies";
import { Skills } from "@/sections/skills";
import { AboutMe } from "@/sections/about-me";
import { Footer } from "@/sections/footer";
import { useSectionTracker } from "@/hooks/useSectionTracker";

export function HomePage() {
  useSectionTracker();

  return (
    <div className="flex min-h-svh flex-col">
      <NavBar />
      <main className="w-full max-w-[1550px] mx-auto">
        <Home />
        <HowIWork />
        <CaseStudies />
        <Skills />
        <AboutMe />
        <Footer />
      </main>
    </div>
  );
}