import PageShell from '../components/PageShell';

export const metadata = { title: 'Contact — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell title="Contact">
      <p className="lead">
        For general inquiries about PacificVis 2027, please contact the
        Organizing Committee:
      </p>
      <ul className="lead mt-3 space-y-2">
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
        For track-specific inquiries, use the contact address listed on the
        relevant page under{' '}
        <a href="/contribute/common-call-for-papers/" className="link">
          Contribute
        </a>.
      </p>
    </PageShell>
  );
}
