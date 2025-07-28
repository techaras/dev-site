import { ThemeProvider } from "@/components/providers/theme-provider";
import { NavBar } from "@/components/navigation/nav-bar";
import { SvgFilters } from "@/components/ui/svg-filters";
import { Hero } from "@/sections/hero";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SvgFilters />
      <div className="flex min-h-svh flex-col">
        <NavBar />
        <main>
          <Hero />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
