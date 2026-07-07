const SECTORS = [
  "Fintech",
  "Public Sector",
  "Renewable Energy",
  "Healthcare",
  "Logistics",
  "Education",
];

export function ClientLogos() {
  return (
    <section className="bg-surface-50 py-12" aria-label="Sectors served">
      <div className="container">
        <p className="text-center text-label uppercase text-ink-400">
          Trusted across sectors that can&apos;t afford to guess
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-6">
          {SECTORS.map((sector) => (
            <li
              key={sector}
              className="flex items-center justify-center text-center text-body-sm font-medium text-ink-400 transition-colors duration-250 hover:text-ink-900"
            >
              {sector}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
