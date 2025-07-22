import { Button } from "@/components/ui/button";
import { navigationItems } from "@/constants/index";

export function NavBar() {
  return (
    <nav className="fixed top-7 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center justify-center gap-4 bg-neutral-300/20 dark:bg-neutral-400/20 backdrop-blur-[1px] border border-neutral-400/20 rounded-full px-6 py-2">
        {navigationItems.map((item) => (
          <Button
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