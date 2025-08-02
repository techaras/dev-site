import { ThemeProvider } from "@/components/providers/theme-provider";
import { NavBar } from "@/components/navigation/nav-bar";
import { SvgFilters } from "@/components/ui/svg-filters";
import { Home } from "@/sections/home";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SvgFilters />
      <div className="flex min-h-svh flex-col">
        <NavBar />
        <main className="w-full max-w-[1550px] mx-auto">
          <Home />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
