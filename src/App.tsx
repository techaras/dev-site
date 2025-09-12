import { ThemeProvider } from "@/components/providers/theme-provider";
import { SvgFilters } from "@/components/ui/svg-filters";
import { GlobalDrawer } from "@/components/drawer/global-drawer";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { Routes, Route } from "react-router";
import { HomePage } from "@/pages/HomePage";
import { CaseStudyDetailPage } from "@/pages/CaseStudyDetailPage";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { useBreakpoint } from "@/hooks/useBreakpoint";

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
      {/* Add the existing Sidebar component */}
      <Sidebar />
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
    </ThemeProvider>
  );
}

export default App;
