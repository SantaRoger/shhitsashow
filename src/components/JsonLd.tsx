// Renders one or more schema.org objects as a JSON-LD script tag.
// Server component — the markup ships in the initial HTML for crawlers.

export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
