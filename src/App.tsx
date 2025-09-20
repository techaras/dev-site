import { ThemeProvider } from "@/components/providers/theme-provider";
import { SvgFilters } from "@/components/ui/svg-filters";
import { GlobalDrawer } from "@/components/drawer/global-drawer";
import { Routes, Route } from "react-router";
import { HomePage } from "@/pages/HomePage";
import { MobileHomePage } from "@/pages/MobileHomePage";
import { CaseStudyDetailPage } from "@/pages/CaseStudyDetailPage";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { useBreakpoint } from "@/hooks/useBreakpoint";
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
    <Routes>
      <Route path="/" element={<MobileHomePage />} />
      <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
    </Routes>
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
