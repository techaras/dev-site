import { FooterSocials } from '../footer-socials';
import { FooterNav } from '../footer-nav';

export function FooterBottom() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
      {/* Left - Copyright */}
      <button className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
        Copyright © 2025 Stavros Symeonidis
      </button>

      {/* Center - Social Links */}
      <FooterSocials />

      {/* Right - Navigation Links */}
      <FooterNav />
    </div>
  );
}