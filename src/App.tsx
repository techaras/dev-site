import { Routes, Route } from "react-router";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SvgFilters } from "@/components/ui/svg-filters";
import { GlobalDrawer } from "@/components/drawer/global-drawer";
import { HomePage } from "@/pages/HomePage";
import { CaseStudyDetailPage } from "@/pages/CaseStudyDetailPage";
import { useBreakpoint } from "@/hooks/useBreakpoint";

function DesktopApp() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
    </Routes>
  );
}

function MobileApp() {
  return (
    <div className="flex min-h-svh flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-heading text-center">Mobile Version Coming Soon</h1>
        <p className="text-center text-muted-foreground mt-4">
          Building a mobile-optimized experience...
        </p>
      </div>
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
