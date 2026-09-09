import PageShell from '../../components/PageShell';

export const metadata = { title: 'Common Call for Papers — PacificVis 2027' };

const TRACKS = [
  {
    name: 'TVCG Journal Paper Track',
    href: '/contribute/tvcg-journal-papers/',
    abstract: 'September 1, 2026',
    submission: 'September 8, 2026',
    notification: 'October 27, 2026',
    cameraReady: 'January 5, 2027',
  },
  {
    name: 'Conference Paper Track',
    href: '/contribute/conference-papers/',
    abstract: 'November 2, 2026',
    submission: 'November 9, 2026',
    notification: 'December 16, 2026',
    cameraReady: 'February 8, 2027',
  },
  {
    name: 'VisNotes (Short Paper) Track',
    href: '/contribute/short-papers/',
    submission: 'January 4, 2027',
    notification: 'February 4, 2027',
    cameraReady: 'February 18, 2027',
  },
  {
    name: 'Posters',
    href: '/contribute/posters/',
    submission: 'February 19, 2027',
    notification: 'March 12, 2027',
    cameraReady: 'March 21, 2027',
  },
  {
    name: 'Visual Data Storytelling Contest',
    href: '/contribute/storytelling/',
    submission: 'February 1, 2027',
    notification: 'February 15, 2027',
    cameraReady: 'March 1, 2027',
  },
  {
    name: 'Visualization Meets AI Workshop',
    href: '/contribute/workshops/',
    submission: 'December 18, 2026',
    notification: 'February 1, 2027',
    cameraReady: 'March 1, 2027 (source files)',
  },
];

export default function Page() {
  return (
    <PageShell eyebrow="Contribute" title="Common Call for Papers">
      <p className="lead">
        We invite original contributions across the full spectrum of
        visualization research — from theoretical foundations and novel
        techniques to application-driven case studies and storytelling.
        Please consult each track page for its current deadlines and submission
        requirements.
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

      <h2 className="h2 mt-8">Submission Information</h2>
      <p className="lead">
        Paper submissions are handled through the Precision Conference System
        (PCS). See the{' '}
        <a href="/contribute/paper-submission-guidelines/" className="link">
          Paper Submission Guidelines
        </a>{' '}
        for the submission site, common policies, and track-specific format
        requirements. For contest and workshop submissions, follow the
        instructions on the respective official websites linked from their
        track pages.
      </p>

      <h2 className="h2 mt-8">Important Dates</h2>
      <p className="muted">
        All deadlines are at 11:59pm (23:59) Anywhere on Earth (AoE) unless
        otherwise stated. The Journal and Conference Paper tracks require
        abstract registration before the full-paper deadline.
      </p>
      <div
        className="mt-4 overflow-x-auto"
        role="region"
        aria-label="Submission deadlines by track"
        tabIndex={0}
      >
        <table className="table-classic min-w-[800px]">
          <thead>
            <tr>
              <th>Track</th>
              <th>Abstract Deadline</th>
              <th>Paper / Entry Deadline</th>
              <th>Notification</th>
              <th>Camera-ready</th>
            </tr>
          </thead>
          <tbody>
            {TRACKS.filter((t) => t.submission).map((t) => (
              <tr key={t.name}>
                <td className="font-medium text-slate-900">
                  <a href={t.href} className="link">{t.name}</a>
                </td>
                <td>
                  {t.abstract || (
                    <a href={t.href} className="link">See track CFP</a>
                  )}
                </td>
                <td>{t.submission}</td>
                <td>{t.notification}</td>
                <td>{t.cameraReady}</td>
              </tr>
            ))}
            <tr>
              <td className="font-medium text-slate-900">Conference Dates</td>
              <td colSpan={4}>April 19-22, 2027</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
