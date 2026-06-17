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
      title="Visual Data Storytelling Contest"
    >
      <p className="lead">
        The Visual Data Storytelling Contest invites compelling stories told
        through interactive and narrative visualization formats. Submissions
        may include data-driven articles, scrollytelling pieces, dashboards,
        videos, or other narrative visualization artifacts.
      </p>

      <section>
        <h2 className="h2">Contest Timeline</h2>
        <p className="muted">All dates are midnight AoE.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="table-classic">
            <tbody>
              <tr>
                <td className="font-medium text-slate-900">
                  Submission deadline
                </td>
                <td>February 9, 2027</td>
              </tr>
              <tr>
                <td className="font-medium text-slate-900">
                  Notification date
                </td>
                <td>February 28, 2027</td>
              </tr>
              <tr>
                <td className="font-medium text-slate-900">
                  Camera-ready deadline
                </td>
                <td>March 13, 2027</td>
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

      <section>
        <h2 className="h2">Submission Instructions</h2>
        <p className="lead mt-3">
          The contest welcomes compelling data-driven stories in interactive,
          narrative, dashboard, article, scrollytelling, video, or related
          visualization formats.
        </p>
        <p className="lead mt-3">
          Submission details and any external contest materials will be posted
          here as they are finalized.
        </p>
      </section>

      <TrackChairs title="Contest Chairs" people={CHAIRS} />
    </PageShell>
  );
}
