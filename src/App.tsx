import { ThemeProvider } from "@/components/providers/theme-provider";
import { SvgFilters } from "@/components/ui/svg-filters";
import { GlobalDrawer } from "@/components/drawer/global-drawer";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { Routes, Route } from "react-router";
import { HomePage } from "@/pages/HomePage";
import { CaseStudyDetailPage } from "@/pages/CaseStudyDetailPage";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { MobileHome } from "@/sections/home-mobile";
import { HowIWorkMobile } from "@/sections/how-i-work-mobile";
import { CaseStudiesMobile } from "@/sections/case-studies-mobile";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { SkillsMobile } from "./sections/skills-mobile";
import { AboutMeMobile } from "./sections/about-me-mobile";
import { SpeedInsights } from '@vercel/speed-insights/react';

function DesktopApp() {
  return (
    <SmoothScrollProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
      </Routes>
    </SmoothScrollProvider>
  );
}

function MobileApp() {
  return (
    <div className="flex min-h-svh flex-col">
      {/* Global Progressive Blur at top of screen */}
      <ProgressiveBlur
        direction="top"
        className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none"
        blurIntensity={1}
      />
      
      {/* Add the existing Sidebar component */}
      <Sidebar />
      
      {/* Mobile Home Section */}
      <MobileHome />
      
      {/* Mobile How I Work Section */}
      <HowIWorkMobile />
      
      {/* Mobile Case Studies Section */}
      <CaseStudiesMobile />

      {/* Mobile Skills Section */}
      <SkillsMobile />

      {/* Mobile About Me Section */}
      <AboutMeMobile />
    </div>
  );
}

function App() {
  const { isMobile } = useBreakpoint();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SvgFilters />
      {isMobile ? <MobileApp /> : <DesktopApp />}
      <GlobalDrawer />
      <SpeedInsights />
    </ThemeProvider>
  );
}

export default App;
