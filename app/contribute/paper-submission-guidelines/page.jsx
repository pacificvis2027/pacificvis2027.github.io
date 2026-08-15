import PageShell from '../../components/PageShell';

export const metadata = {
  title: 'Paper Submission Guidelines — PacificVis 2027',
};

const PAPER_TRACKS = [
  {
    name: 'TVCG Journal Paper Track',
    href: '/contribute/tvcg-journal-papers/',
    requirements:
      'Up to 9 pages with 2 additional pages of references. Single-blind and double-blind submissions are allowed.',
  },
  {
    name: 'Conference Paper Track',
    href: '/contribute/conference-papers/',
    requirements:
      'Up to 9 + 2 pages, with only acknowledgments and references on the last two pages.',
  },
  {
    name: 'VisNotes (Short Paper) Track',
    href: '/contribute/short-papers/',
    requirements: 'Up to 6 pages, including references.',
  },
  {
    name: 'Posters',
    href: '/contribute/posters/',
    requirements:
      'Poster summaries of up to 2 pages, including figures, tables, and references.',
  },
];

export default function Page() {
  return (
    <PageShell eyebrow="Contribute" title="Paper Submission Guidelines">
      <p className="lead">
        Submission requirements vary by track. The track-specific call is the
        authoritative source for page limits, review policy, deadlines, and
        supplemental material requirements.
      </p>

      <div className="mt-5 overflow-x-auto">
        <table className="table-classic">
          <thead>
            <tr>
              <th>Track</th>
              <th>Confirmed Requirements</th>
            </tr>
          </thead>
          <tbody>
            {PAPER_TRACKS.map((track) => (
              <tr key={track.name}>
                <td className="font-medium text-slate-900">
                  <a href={track.href} className="link">
                    {track.name}
                  </a>
                </td>
                <td>{track.requirements}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section>
        <h2 className="h2">Formatting Guides</h2>
        <ul className="lead mt-4 list-disc space-y-4 pl-8">
          <li>
            TVCG Journal Paper Track:{' '}
            <a
              href="https://tc.computer.org/vgtc/publications/journal/"
              className="link"
            >
              IEEE VGTC journal publication guide
            </a>
          </li>
          <li>
            Conference Papers, VisNotes, and Posters:{' '}
            <a
              href="https://tc.computer.org/vgtc/publications/conference/"
              className="link"
            >
              IEEE VGTC conference publication guide
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="h2">Other Submission Formats</h2>
        <p className="lead mt-4">
          The{' '}
          <a href="/contribute/storytelling/" className="link">
            Visual Data Storytelling Contest
          </a>{' '}
          and{' '}
          <a href="/contribute/workshops/" className="link">
            Visualization Meets AI Workshop
          </a>{' '}
          use specialized submission formats and instructions described on
          their respective pages.
        </p>
      </section>
    </PageShell>
  );
}
