import PageShell from '../../components/PageShell';

export const metadata = { title: 'Visa Information — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Travel" title="Visa Information">
      <p className="lead">
        Visa and entry requirements for South Korea depend on nationality,
        passport type, and length of stay. Travelers eligible for visa-free
        entry may need a Korea Electronic Travel Authorization (K-ETA), subject
        to the rules in effect for their travel dates.
      </p>
      <p className="lead">
        Temporary K-ETA exemptions currently announced for 2026 should not be
        assumed to apply in 2027. Please verify your individual requirements on
        the official Korean government websites before making travel plans.
      </p>
      <ul className="lead mt-3 list-disc space-y-3 pl-8">
        <li>
          K-ETA (Korea Electronic Travel Authorization):{' '}
          <a
            href="https://www.k-eta.go.kr/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            k-eta.go.kr
          </a>
        </li>
        <li>
          Korean Visa Portal:{' '}
          <a
            href="https://www.visa.go.kr/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            visa.go.kr
          </a>
        </li>
      </ul>
      <p className="muted">
        Invitation or visa support letters will be issued after registration
        upon request through the registration process. Additional instructions
        will be posted when registration opens.
      </p>
    </PageShell>
  );
}
