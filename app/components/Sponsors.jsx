const TIERS = [
  {
    title: 'Hosts & Co-Sponsors',
    items: [
      {
        name: 'IEEE',
        href: 'https://www.ieee.org/',
        logo: '/images/ieee-mb-blue.png',
      },
      {
        name: 'IEEE Computer Society',
        href: 'https://www.computer.org/',
        logo: '/images/ieee-cs-logo-orange.png',
      },
      {
        name: 'IEEE VGTC',
        href: 'https://tc.computer.org/vgtc/',
        logo: '/images/vgtc-color.jpg',
      },
    ],
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="section border-t border-slate-200">
      <div className="container-page">
        <h2 className="h2">Sponsors</h2>
        <p className="muted mt-2">
          Additional sponsor and partner information will be published as it is
          confirmed.
        </p>

        <div className="mt-6 space-y-6">
          {TIERS.map((tier) => (
            <div key={tier.title}>
              <p className="text-sm font-semibold text-slate-700">
                {tier.title}
              </p>
              <ul className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {tier.items.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="grid aspect-[3/2] place-items-center border border-slate-200 bg-white px-4 text-center text-xs text-slate-600 hover:bg-slate-50"
                    >
                      {s.logo ? (
                        <img
                          src={s.logo}
                          alt={`${s.name} logo`}
                          className="max-h-16 max-w-full object-contain"
                        />
                      ) : (
                        s.name
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="muted mt-6">
          Interested in sponsoring PacificVis 2027?{' '}
          <a href="/contact/" className="link">
            Contact the Organizing Committee
          </a>
          .
        </p>
      </div>
    </section>
  );
}
