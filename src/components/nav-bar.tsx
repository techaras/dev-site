import { Button } from "@/components/ui/button";
import { navigationItems } from "@/constants/index";

export function NavBar() {
  return (
    <nav className="fixed top-7 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-texture rounded-full flex items-center justify-center gap-4 px-6 py-2">
        {navigationItems.map((item) => (
          <Button
            className="hover:rounded-full hover:glass-texture hover:px-6 hover:py-2"
            key={item.name}
            variant="ghost"
            asChild
          >
            <a href={item.link}>{item.name}</a>
          </Button>
        ))}
      </div>
    </nav>
  );
}