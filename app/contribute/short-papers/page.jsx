import PageShell from '../../components/PageShell';
import TrackChairs from '../../components/TrackChairs';

export const metadata = { title: 'Short Papers (VisNotes) — PacificVis 2027' };

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
    <PageShell eyebrow="Contribute" title="Short Papers (VisNotes)">
      <p className="lead">
        VisNotes are concise contributions that present novel ideas,
        late-breaking results, or systems. They offer a venue for compact yet
        impactful contributions that complement full Conference Papers.
      </p>

      <h2 className="h2 mt-8">Track-Specific Deadlines</h2>
      <p className="muted">
        All deadlines are at 11:59pm (23:59) anywhere on Earth (AoE).
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="table-classic">
          <tbody>
            <tr>
              <td className="font-medium text-slate-900">Papers</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">Notification</td>
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
          Original, unpublished short papers of up to 6 pages, including
          references, are invited. Accepted VisNotes will appear in the IEEE
          Digital Library.
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

      <TrackChairs title="VisNotes Chairs" people={CHAIRS} />
    </PageShell>
  );
}
