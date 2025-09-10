import { ContactMethods } from '../contact-methods';

export function FooterHero() {
  return (
    <div className="flex flex-col">
      <h2 className="font-heading text-4xl [@media(min-width:1055px)]:text-5xl [@media(min-width:1275px)]:text-6xl text-foreground mb-4 text-center [@media(min-width:1024px)]:text-left">
        From Concept to Production
      </h2>
      <p className="font-body text-lg [@media(min-width:1045px)]:text-xl [@media(min-width:1275px)]:text-2xl font-light text-muted-foreground leading-relaxed text-center [@media(min-width:1024px)]:text-left">
        Turn your vision into reality with a partner who<br className="hidden [@media(min-width:1024px)]:inline" />
        {' '}truly understands what your business needs.
      </p>
      <div className="hidden [@media(min-width:1024px)]:block">
        <ContactMethods />
      </div>
    </div>
  );
}