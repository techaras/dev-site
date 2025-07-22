import { ThemeProvider } from "@/components/providers/theme-provider";
import { NavBar } from "@/components/nav-bar";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col">
        <NavBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
