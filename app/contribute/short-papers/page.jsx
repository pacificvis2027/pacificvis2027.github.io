import PageShell from '../../components/PageShell';
import TrackChairs from '../../components/TrackChairs';

export const metadata = {
  title: 'VisNotes (Short Paper) Track — PacificVis 2027',
};

const CHAIRS = [
  {
    name: 'Dongyu Liu',
    affiliation: 'University of California, Davis',
    photo: '/images/committee/dongyu-liu.jpg',
  },
  {
    name: 'Jaemin Jo',
    affiliation: 'Sungkyunkwan University',
    photo: '/images/committee/jaemin-jo.jpg',
  },
  {
    name: 'Ko-Chih Wang',
    affiliation: 'National Taiwan Normal University',
    photo: '/images/committee/ko-chih-wang.jpg',
  },
];

export default function Page() {
  return (
    <PageShell
      eyebrow="Contribute"
      title="IEEE PacificVis 2027 - VisNotes (Short Paper) Track"
    >
      <p className="lead">
        PacificVis 2027 features a short paper track called Visualization
        Notes. VisNotes provides an opportunity to describe significant novel
        work with contributions that may be narrower in scope or have limited
        empirical support compared with a full paper. Submissions can present
        late-breaking results or work in progress, while they should be novel
        enough to attract interest from the visualization community. We
        encourage submissions of both new material and papers not accepted by
        the Conference Paper Track.
      </p>

      <h2 className="h2 mt-8">Track-Specific Deadlines</h2>
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
              <td className="font-medium text-slate-900">Papers</td>
              <td>January 4, 2027</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">Notification</td>
              <td>February 4, 2027</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Camera-ready papers
              </td>
              <td>February 18, 2027</td>
            </tr>
          </tbody>
        </table>
      </div>

      <section>
        <h2 className="h2">Submission Instructions</h2>
        <p className="lead mt-3">
          Original, unpublished short papers of up to 6 pages, including
          references, are invited. Six pages is the length limit, not the
          expected length. All accepted papers will appear in the IEEE Digital
          Library.
        </p>
        <p className="lead mt-3">
          Manuscripts should follow the IEEE VGTC conference author guidelines:{' '}
          <a
            href="https://tc.computer.org/vgtc/publications/conference/"
            className="link"
          >
            IEEE VGTC conference publication guide
          </a>
        </p>
      </section>

      <TrackChairs title="VisNotes Chairs" people={CHAIRS} />
    </PageShell>
  );
}
