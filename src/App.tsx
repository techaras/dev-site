import { ThemeProvider } from "@/components/providers/theme-provider";
import { NavBar } from "@/components/nav-bar";
import { SvgFilters } from "@/components/ui/svg-filters";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SvgFilters />
      <div className="flex min-h-svh flex-col">
        <NavBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
