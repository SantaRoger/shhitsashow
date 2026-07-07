// Interior-page banner: a painted faire sign nailed to a wood wall. Used at the
// top of every sub-page so they feel like posts on a fairground, not app pages.

export default function PageBanner({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="wood px-6 pt-14 pb-16">
      <div className="mx-auto max-w-3xl text-center">
        <div className="paint-sign mx-auto inline-block px-8 py-6 sm:px-12">
          {eyebrow && (
            <p className="font-hand text-lg text-gold-light mb-1">{eyebrow}</p>
          )}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-cream-light leading-tight">
            {title}
          </h1>
        </div>
        {subtitle && (
          <p className="font-hand text-xl sm:text-2xl text-cream/90 mt-6">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
