import PageShell from '../components/PageShell';

export const metadata = { title: 'Contact — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell title="Contact">
      <p className="lead">
        For general inquiries about PacificVis 2027, please contact the
        Organizing Committee:
      </p>
      <ul className="mt-3 space-y-2 text-slate-700">
        <li>
          Email:{' '}
          <a href="mailto:pacificvis27@gmail.com" className="link">
            pacificvis27@gmail.com
          </a>
        </li>
        <li>Conference location: Busan, South Korea</li>
        <li>
          Steering Committee:{' '}
          <a
            href="https://pacificvis.github.io/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            pacificvis.github.io
          </a>
        </li>
      </ul>
      <p className="muted">
        Specific track inquiries (papers, posters, workshops) will route to
        respective chairs once their contact addresses are published on the{' '}
        <a href="/committee/" className="link">
          Committee
        </a>{' '}
        page.
      </p>
    </PageShell>
  );
}
