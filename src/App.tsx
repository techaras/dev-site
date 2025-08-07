import { ThemeProvider } from "@/components/providers/theme-provider";
import { NavBar } from "@/components/navigation/nav-bar";
import { SvgFilters } from "@/components/ui/svg-filters";
import { Home } from "@/sections/home";
import { HowIWork } from "@/sections/how-i-work";
import { CaseStudies } from "@/sections/case-studies";
import { Skills } from "@/sections/skills";
import { AboutMe } from "@/sections/about-me";
import { useBreakpoint } from "@/hooks/useBreakpoint";

function DesktopApp() {
  return (
    <div className="flex min-h-svh flex-col">
      <NavBar />
      <main className="w-full max-w-[1550px] mx-auto">
        <Home />
        <HowIWork />
        <CaseStudies />
        <Skills />
        <AboutMe />
      </main>
    </div>
  );
}

function MobileApp() {
  return (
    <div className="flex min-h-svh flex-col">
      {/* TODO: Replace with mobile-specific components */}
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
    </ThemeProvider>
  );
}

export default App;
