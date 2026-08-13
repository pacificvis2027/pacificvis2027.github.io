import PageShell from '../../components/PageShell';
import TrackChairs from '../../components/TrackChairs';

export const metadata = { title: 'Workshops — PacificVis 2027' };

const CHAIRS = [
  {
    name: 'Takanori Fujiwara',
    affiliation: 'University of Arizona',
    photo: '/images/committee/takanori-fujiwara.webp',
  },
  {
    name: 'Junpeng Wang',
    affiliation: 'Visa Research',
    photo: '/images/committee/junpeng-wang.jpg',
  },
];

const DEADLINES = [
  ['Paper due', 'December 18, 2026'],
  ['First-cycle notification from workshop chairs', 'February 1, 2027'],
  ['Revision due', 'February 15, 2027'],
  ['Second-cycle notification from workshop chairs', 'February 22, 2027'],
  ['Editable source files due', 'March 1, 2027'],
  [
    'Final notification from the EIC of Information Visualization',
    'March 8, 2027',
  ],
  ['Workshop', 'April 19, 2027'],
];

export default function Page() {
  return (
    <PageShell eyebrow="Contribute" title="Workshops">
      <p className="lead">
        PacificVis 2027 will host the Visualization Meets AI 2027 workshop in
        Busan, South Korea. The workshop explores research at the intersection
        of AI-enhanced visualization (AI4VIS) and visualization-enhanced AI
        (VIS4AI).
      </p>

      <section>
        <h2 className="h2">Visualization Meets AI 2027</h2>
        <div className="mt-4 space-y-4">
          <p className="lead">
            The workshop welcomes full-paper submissions that integrate
            visualization and artificial intelligence or machine learning.
            Accepted papers will be published in a special issue of{' '}
            <a
              href="https://journals.sagepub.com/home/ivi"
              className="link"
            >
              Information Visualization
            </a>
            . Promising papers that are not yet ready for acceptance may be
            recommended for a fast-track review process at the journal.
          </p>
          <p className="lead">
            Submissions must be made through{' '}
            <a
              href="https://new.precisionconference.com/user/login?society=vgtc"
              className="link"
            >
              PCS
            </a>{' '}
            under the track name{' '}
            <span className="font-semibold text-slate-900">
              PacificVis 2027 Visualization Meets AI Workshop
            </span>
            . Only double-blind submissions will be accepted.
          </p>
          <p className="lead">
            See the{' '}
            <a href="https://vismeetsai.github.io/" className="link">
              official workshop website
            </a>{' '}
            for the complete call for participation, topics, manuscript
            preparation guidelines, and review process.
          </p>
        </div>
      </section>

      <section>
        <h2 className="h2">Important Dates</h2>
        <p className="muted">
          All deadlines are at 11:59pm (23:59) Anywhere on Earth (AoE).
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="table-classic">
            <thead>
              <tr>
                <th>Deadline</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {DEADLINES.map(([label, date]) => (
                <tr key={label}>
                  <td className="font-medium text-slate-900">{label}</td>
                  <td>{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <TrackChairs title="Workshop Chairs" people={CHAIRS}>
        <p className="lead">
          Contact:{' '}
          <a href="mailto:pvis_ai4vis@pvis.org" className="link">
            pvis_ai4vis@pvis.org
          </a>
        </p>
      </TrackChairs>
    </PageShell>
  );
}
