import { ContactMethods } from '../contact-methods';

export function FooterHero() {
    return (
      <div className="flex flex-col">
        <h2 className="font-heading text-6xl text-foreground mb-4">
          From Concept to Production
        </h2>
        <p className="font-body text-2xl font-light text-muted-foreground leading-relaxed">
          Turn your vision into reality with a partner who<br />truly understands what your business needs.
        </p>
        <ContactMethods />
      </div>
    );
  }