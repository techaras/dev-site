import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import RainbowButton from '@/components/magicui/rainbow-button';
import { useContactForm } from '@/hooks/useContactForm';

export function ContactForm() {
  const { isSubmitting, isSuccess, message, isSubmitSuccessful, onSubmit } = useContactForm();

  // Fireworks confetti effect
  useEffect(() => {
    if (isSubmitSuccessful && isSuccess) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      const interval = window.setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);

      // Cleanup function to clear interval if component unmounts
      return () => clearInterval(interval);
    }
  }, [isSubmitSuccessful, isSuccess]);

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 rounded-lg border border-border">
        {isSuccess ? (
          <>
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-heading text-xl text-foreground mb-2">Message sent!</h3>
            <p className="font-body text-muted-foreground mb-6">{message}</p>
          </>
        ) : (
          <>
            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="font-heading text-xl text-foreground mb-2">Something went wrong</h3>
            <p className="font-body text-muted-foreground mb-6">{message}</p>
          </>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      {/* Name Field */}
      <div>
        <label className="block font-body text-sm font-medium text-foreground mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          required
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
          name="email"
          placeholder="john@example.com"
          required
          className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring transition-colors"
        />
      </div>

      {/* Message Text Area */}
      <div>
        <label className="block font-body text-sm font-medium text-foreground mb-2">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Tell me about your project..."
          rows={8}
          required
          className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring transition-colors resize-none"
        />
      </div>

      {/* Send Button */}
      <RainbowButton 
        type="submit"
        size="lg" 
        className="w-full font-heading pt-0.5"
        variant="outline"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send a message"}
      </RainbowButton>
    </form>
  );
}