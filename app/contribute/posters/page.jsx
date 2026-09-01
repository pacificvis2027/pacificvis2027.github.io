import PageShell from '../../components/PageShell';
import TrackChairs from '../../components/TrackChairs';

export const metadata = { title: 'Posters — PacificVis 2027' };

const CHAIRS = [
  {
    name: 'Minsuk Kahng',
    affiliation: 'Yonsei University',
    photo: '/images/committee/minsuk-kahng.jpg',
  },
  {
    name: 'Yuxin Ma',
    affiliation: 'Southern University of Science and Technology',
    photo: '/images/committee/yuxin-ma.png',
  },
  {
    name: 'Ryosuke Saga',
    affiliation: 'Osaka Metropolitan University',
    photo: '/images/committee/ryosuke-saga.jpg',
  },
];

export default function Page() {
  return (
    <PageShell eyebrow="Contribute" title="Posters">
      <p className="lead">
        The Posters track showcases work-in-progress, late-breaking results,
        and student research. Posters provide an excellent opportunity to
        receive feedback and engage in discussions with the visualization
        community.
      </p>

      <h2 className="h2 mt-8">Important Dates</h2>
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
            <tr>
              <td className="font-medium text-slate-900">
                Poster summary submission deadline
              </td>
              <td>February 19, 2027</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Poster summary notification
              </td>
              <td>March 12, 2027</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Camera-ready poster summary due
              </td>
              <td>March 21, 2027</td>
            </tr>
          </tbody>
        </table>
      </div>

      <section>
        <h2 className="h2">Submission Instructions</h2>
        <p className="lead mt-3">
          Original, unpublished poster summaries of up to 2 pages, including
          figures, tables, and references, are invited.
        </p>
        <p className="lead mt-3">
          Submissions should briefly describe the background, problem,
          objectives, methodology, findings, supporting evidence, and
          implications of the work. Posters will be selected through a juried
          review process.
        </p>
      </section>

      <TrackChairs title="Poster Chairs" people={CHAIRS}>
        <p className="lead">
          Contact:{' '}
          <a
            href="mailto:pvis27-p_chairs@googlegroups.com"
            className="link"
          >
            pvis27-p_chairs@googlegroups.com
          </a>
        </p>
      </TrackChairs>
    </PageShell>
  );
}
