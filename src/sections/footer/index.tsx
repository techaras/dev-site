import { GithubIcon } from '@/components/icons/socials/github-icon';
import { LinkedinIcon } from '@/components/icons/socials/linkedin-icon';

export function Footer() {
  return (
    <section 
      id="footer" 
      className="py-20 px-6 md:px-12 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="font-heading text-6xl text-foreground mb-4">
              From Concept to Production
            </h2>
            <p className="font-body text-2xl font-light text-muted-foreground leading-relaxed">
              Turn your vision into reality with a partner who<br />truly understands what your business needs.
            </p>
          </div>

          {/* Right Column - Form */}
          <div className="flex flex-col gap-6">
            {/* Name Field */}
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring transition-colors"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring transition-colors"
              />
            </div>

            {/* Message Text Area */}
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows={8}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring transition-colors resize-none"
              />
            </div>

            {/* Send Button */}
            <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-body font-medium cursor-pointer hover:bg-primary/90 transition-colors">
              Send a message
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
          {/* Left - Copyright */}
          <button className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            Copyright © 2025 Stavros Symeonidis
          </button>

          {/* Center - Social Links */}
          <div className="flex items-center gap-6">
            <button className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-2">
              <GithubIcon className="w-4 h-4" />
              Github
            </button>
            <button className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-2">
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </button>
          </div>

          {/* Right - Links */}
          <div className="flex items-center gap-6">
            <button className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              RSS
            </button>
            <button className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}