import { Button } from "@/components/ui/button";
import { navigationItems } from "@/constants/index";

export function NavBar() {
  return (
    <nav className="w-full p-4">
      <div className="flex items-center justify-center gap-4">
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