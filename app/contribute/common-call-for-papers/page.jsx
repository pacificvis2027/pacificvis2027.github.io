import PageShell from '../../components/PageShell';

export const metadata = { title: 'Common Call for Papers — PacificVis 2027' };

const TRACKS = [
  {
    name: 'TVCG Journal Papers',
    href: '/contribute/tvcg-journal-papers/',
    submission: 'September 7, 2026',
    notification: 'October 27, 2026',
  },
  {
    name: 'Conference Papers',
    href: '/contribute/conference-papers/',
    submission: 'November 8, 2026',
    notification: 'December 15, 2026',
  },
  {
    name: 'Short Papers (VisNotes)',
    href: '/contribute/short-papers/',
    submission: 'January 7, 2027',
    notification: 'February 8, 2027',
  },
  {
    name: 'Posters',
    href: '/contribute/posters/',
    submission: 'February 15, 2027',
    notification: 'March 8, 2027',
  },
  {
    name: 'Visual Data Storytelling',
    href: '/contribute/storytelling/',
    submission: 'February 9, 2027',
    notification: 'February 28, 2027',
  },
  {
    name: 'Workshops',
    href: '/contribute/workshops/',
  },
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
        All deadlines are at 11:59pm (23:59) anywhere on Earth (AoE) unless
        otherwise stated.
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
            {TRACKS.filter((t) => t.submission).map((t) => (
              <tr key={t.name}>
                <td className="font-medium text-slate-900">{t.name}</td>
                <td>{t.submission}</td>
                <td>{t.notification}</td>
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
