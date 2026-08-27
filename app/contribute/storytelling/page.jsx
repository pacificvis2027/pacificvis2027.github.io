import PageShell from '../../components/PageShell';
import TrackChairs from '../../components/TrackChairs';

export const metadata = {
  title: 'Visual Data Storytelling Contest — PacificVis 2027',
};

const CHAIRS = [
  {
    name: 'Linping Yuan',
    affiliation: 'Hong Kong University of Science and Technology',
    photo: '/images/committee/linping-yuan.jpg',
  },
  {
    name: 'Angelos Chatzimparmpas',
    affiliation: 'Utrecht University',
    photo: '/images/committee/angelos-chatzimparmpas.jpg',
  },
];

export default function Page() {
  return (
    <PageShell
      eyebrow="Contribute"
      title="The 2027 Visual Data Storytelling Contest"
    >
      <p className="muted">
        In conjunction with IEEE PacificVis 2027 in Busan, South Korea
      </p>

      <section>
        <h2 className="h2">About</h2>
        <div className="mt-4 space-y-4">
          <p className="lead">
            The Visual Data Storytelling Contest celebrates its 11th year in
            2027. This contest celebrates the emerging data communication
            genre, including data storytelling, narrative visualizations,
            explanatory notebooks, visual essays, and more. It aims to
            encourage students, researchers, and practitioners to demonstrate
            the value of data visualization by creating creative and compelling
            visual data stories. The contest will be held in conjunction with{' '}
            <a href="https://pacificvis2027.github.io/" className="link">
              IEEE PacificVis 2027
            </a>{' '}
            from April 19-22, 2027 in Busan, South Korea.
          </p>
          <p className="lead">
            PacificVis is a unified visualization symposium welcoming all areas
            of visualization, such as information, scientific, graph, security,
            and software visualization. Storytellers are invited to submit
            visual data-driven stories that draw upon (or intersect with) any of
            these areas. In addition, entries that focus on computational
            journalism and artistic design projects are encouraged. Unlike
            contests such as the{' '}
            <a href="https://vast-challenge.github.io/2026/" className="link">
              IEEE VAST Challenge
            </a>{' '}
            or the{' '}
            <a href="https://sciviscontest2026.github.io/" className="link">
              IEEE SciVis Contest
            </a>
            , the data for the PacificVis Visual Data Storytelling Contest is
            intentionally left unspecified; you are free to choose any publicly
            available dataset(s). Similarly, the task that storytellers are to
            accomplish is to successfully communicate a message or series of
            messages (i.e., a narrative, a series of insights) using data
            visualization techniques. The story&apos;s themes can draw from any
            topic, including current affairs, history, natural disasters, and
            research findings from the sciences and humanities. Entries may be
            submitted by teams or individuals from industry and academia.
            Conference sponsors can participate non-competitively.
          </p>
          <p className="lead">
            Please see the{' '}
            <a href="https://visstory.github.io/" className="link">
              Contest Website
            </a>{' '}
            for full details.
          </p>
        </div>
      </section>

      <section>
        <h2 className="h2">Important Deadlines</h2>
        <p className="muted">All dates are midnight AoE.</p>
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
                  Submission Deadline
                </td>
                <td>February 1, 2027</td>
              </tr>
              <tr>
                <td className="font-medium text-slate-900">
                  Notification Date
                </td>
                <td>February 15, 2027</td>
              </tr>
              <tr>
                <td className="font-medium text-slate-900">
                  Camera-Ready Deadline
                </td>
                <td>March 1, 2027</td>
              </tr>
              <tr>
                <td className="font-medium text-slate-900">
                  Present at PacificVis 2027
                </td>
                <td>April 19-22, 2027</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <TrackChairs title="Contest Chairs" people={CHAIRS}>
        <p className="lead">
          Contact email:{' '}
          <a
            href="mailto:pvis27-vst_chairs@googlegroups.com"
            className="link"
          >
            pvis27-vst_chairs@googlegroups.com
          </a>
        </p>
      </TrackChairs>
    </PageShell>
  );
}
