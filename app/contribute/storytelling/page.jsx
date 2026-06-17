import PageShell from '../../components/PageShell';

export const metadata = {
  title: 'Visual Data Storytelling Contest — PacificVis 2027',
};

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
        <h2 className="h2">Chairs</h2>
        <ul className="mt-3 space-y-2 text-lg text-slate-700">
          <li>Linping Yuan, Hong Kong University of Science and Technology</li>
          <li>Angelos Chatzimparmpas, Utrecht University</li>
        </ul>
      </section>

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
    </PageShell>
  );
}
