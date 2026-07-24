import PageShell from '../../components/PageShell';
import TrackChairs from '../../components/TrackChairs';

export const metadata = { title: 'Conference Papers — PacificVis 2027' };

const CHAIRS = [
  {
    name: 'Yong Wang',
    affiliation: 'Nanyang Technological University',
    photo: '/images/committee/yong-wang.jpg',
  },
  {
    name: 'Bei Wang',
    affiliation: 'University of Utah',
    photo: '/images/committee/bei-wang.jpg',
  },
  {
    name: 'Giuseppe Liotta',
    affiliation: 'University of Perugia',
    photo: '/images/committee/giuseppe-liotta.jpg',
  },
];

export default function Page() {
  return (
    <PageShell eyebrow="Contribute" title="Conference Papers">
      <p className="lead">
        The Conference Papers track invites original technical contributions
        across the breadth of visualization research, including (but not
        limited to) information visualization, scientific visualization, visual
        analytics, human-data interaction, and applications.
      </p>

      <h2 className="h2 mt-8">Track-Specific Deadlines</h2>
      <p className="muted">
        All deadlines are at 11:59pm (23:59) anywhere on Earth (AoE).
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
                Conference track - Abstracts
              </td>
              <td>November 2, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Conference track - Papers
              </td>
              <td>November 9, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Conference track - Notification (1st round)
              </td>
              <td>December 16, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Conference track - Revisions (2nd round)
              </td>
              <td>January 11, 2027</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Conference track - Final notification (2nd round)
              </td>
              <td>January 25, 2027</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Conference track - Camera-ready papers
              </td>
              <td>February 8, 2027</td>
            </tr>
          </tbody>
        </table>
      </div>

      <section>
        <h2 className="h2">Submission Instructions</h2>
        <p className="lead mt-3">
          Original, unpublished full papers of up to 9 pages plus 2 additional
          pages for acknowledgments and references are invited.
        </p>
        <p className="lead mt-3">
          Manuscripts should follow the IEEE VGTC conference author guidelines:{' '}
          <a
            href="https://tc.computer.org/vgtc/publications/conference/"
            className="link"
          >
            tc.computer.org/vgtc/publications/conference/
          </a>
        </p>
      </section>

      <TrackChairs title="Paper Chairs" people={CHAIRS} />
    </PageShell>
  );
}
