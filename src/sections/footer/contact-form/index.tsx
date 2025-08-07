export function ContactForm() {
    return (
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
    );
  }