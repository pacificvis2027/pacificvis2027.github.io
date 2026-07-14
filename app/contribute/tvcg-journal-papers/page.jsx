import PageShell from '../../components/PageShell';
import TrackChairs from '../../components/TrackChairs';

export const metadata = {
  title: 'TVCG Journal Paper Track — PacificVis 2027',
};

const CHAIRS = [
  {
    name: 'Jian Zhao',
    affiliation: 'University of Waterloo',
    photo: '/images/committee/jian-zhao.png',
  },
  {
    name: 'Stephen Kobourov',
    affiliation: 'Technical University of Munich',
    photo: '/images/committee/stephen-kobourov.webp',
  },
  {
    name: 'Siming Chen',
    affiliation: 'Fudan University',
    photo: '/images/committee/siming-chen.jpg',
  },
];

export default function Page() {
  return (
    <PageShell
      eyebrow="Contribute"
      title="IEEE PacificVis 2027 - TVCG Journal Paper Track"
    >
      <p className="lead">
        Submissions are invited to the IEEE TVCG journal paper track at IEEE
        PacificVis 2027. Papers demonstrating exceptional quality in terms of
        originality, rigor, and significance will be published in a special
        issue of IEEE Transactions on Visualization and Computer Graphics
        (TVCG). The selection process is based on the high quality standards of
        the TVCG journal.
      </p>
      <p className="lead mt-3">
        The target acceptance rate is expected to be close to the full paper
        tracks of major related conferences, such as IEEE VIS. Following the
        initial notification of review results, conditionally accepted papers
        (including supplemental material) will undergo a revision and review
        cycle in order to ensure that they are acceptable for publication and
        presentation in TVCG. The paper and its supplemental material will also
        be submitted to the IEEE Digital Library in accordance with its standard
        terms and conditions.
      </p>
      <p className="lead mt-3">
        Note that the deadlines for the journal and conference paper tracks are
        explicitly organized so that a paper rejected to the TVCG journal paper
        track can optionally be revised and resubmitted to the conference paper
        track (if the authors so desire). During the resubmission process, the
        authors can choose to maintain reviewer continuity (with at least one
        reviewer and the full reviews from the TVCG journal track available) or
        have the paper be treated like a new submission. We encourage authors of
        rejected papers to take advantage of this mechanism.
      </p>

      <h2 className="h2 mt-8">Track-Specific Deadlines</h2>
      <p className="muted">
        All deadlines below are at 11:59pm (23:59) Anywhere on Earth (AoE).
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="table-classic">
          <thead>
            <tr>
              <th>Deadline</th>
              <th>Dates</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium text-slate-900">
                Journal track - Abstracts
              </td>
              <td>September 1, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Journal track - Papers
              </td>
              <td>September 8, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Journal track - Notification (1st round)
              </td>
              <td>October 27, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Journal track - Revisions (2nd round)
              </td>
              <td>November 17, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Journal track - Final notification (2nd round)
              </td>
              <td>December 15, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Journal track - Camera-ready papers
              </td>
              <td>January 5, 2027</td>
            </tr>
          </tbody>
        </table>
      </div>

      <section>
        <h2 className="h2">Submission Instructions</h2>
        <p className="lead mt-3">
          Submissions are strictly limited to 9 pages, with an additional 2
          pages of references. Authors may choose to anonymize their submission,
          but this is not required as both single-blind and double-blind
          submissions are allowed. Accepted papers will be published in a
          special issue of IEEE Transactions on Visualization and Computer
          Graphics (TVCG).
        </p>
        <p className="lead mt-3">
          Manuscripts should be prepared according to the guide for authors
          given at{' '}
          <a
            href="https://tc.computer.org/vgtc/publications/journal/"
            className="link"
          >
            tc.computer.org/vgtc/publications/journal/
          </a>
        </p>
      </section>

      <TrackChairs title="Paper Chairs" people={CHAIRS} />
    </PageShell>
  );
}
