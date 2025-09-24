import { Link } from "react-router";

export function FooterNav() {
  return (
    <div className="flex items-center gap-6">
      <button className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
        RSS
      </button>
      <Link 
        to="/privacy-policy"
        className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        Privacy Policy
      </Link>
    </div>
  );
}