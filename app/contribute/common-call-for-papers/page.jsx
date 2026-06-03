import PageShell from '../../components/PageShell';

export const metadata = { title: 'Common Call for Papers — PacificVis 2027' };

const TRACKS = [
  { name: 'TVCG Journal Papers',     href: '/contribute/tvcg-journal-papers/' },
  { name: 'Conference Papers',       href: '/contribute/conference-papers/' },
  { name: 'Short Papers (VisNotes)', href: '/contribute/short-papers/' },
  { name: 'Posters',                 href: '/contribute/posters/' },
  { name: 'Visual Data Storytelling',href: '/contribute/storytelling/' },
  { name: 'Workshops',               href: '/contribute/workshops/' },
];

export default function Page() {
  return (
    <PageShell eyebrow="Contribute" title="Common Call for Papers">
      <p className="lead">
        We invite original contributions across the full spectrum of
        visualization research — from theoretical foundations and novel
        techniques to application-driven case studies and storytelling.
        Detailed submission guidelines for each track will be posted on the
        respective pages as they are confirmed.
      </p>

      <h2 className="h2 mt-4">Tracks</h2>
      <ul className="mt-3 space-y-3">
        {TRACKS.map((t) => (
          <li key={t.name} className="border-l-2 border-ocean-700 pl-4">
            <a href={t.href} className="link h3">
              {t.name}
            </a>
          </li>
        ))}
      </ul>

      <h2 className="h2 mt-8">Important Dates</h2>
      <p className="muted">
        All deadlines are tentative and will be confirmed soon. Times are
        anywhere on Earth (AoE) unless otherwise stated.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="table-classic">
          <thead>
            <tr>
              <th>Track</th>
              <th>Submission Deadline</th>
              <th>Notification</th>
            </tr>
          </thead>
          <tbody>
            {TRACKS.map((t) => (
              <tr key={t.name}>
                <td className="font-medium text-slate-900">{t.name}</td>
                <td>TBA</td>
                <td>TBA</td>
              </tr>
            ))}
            <tr>
              <td className="font-medium text-slate-900">Conference Dates</td>
              <td colSpan={2}>April 19-22, 2027</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
