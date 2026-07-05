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
          <tbody>
            <tr>
              <td className="font-medium text-slate-900">Abstracts</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">Papers</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Notification (1st round)
              </td>
              <td>TBA</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Revisions (2nd round)
              </td>
              <td>TBA</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Final notification (2nd round)
              </td>
              <td>TBA</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Camera-ready papers
              </td>
              <td>TBA</td>
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
