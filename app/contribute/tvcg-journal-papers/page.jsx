import PageShell from '../../components/PageShell';

export const metadata = { title: 'TVCG Journal Papers — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Contribute" title="TVCG Journal Papers">
      <p className="lead">
        PacificVis 2027 will host a TVCG Journal track in cooperation with{' '}
        <em>IEEE Transactions on Visualization and Computer Graphics (TVCG)</em>
        . Accepted papers will be presented at the conference and published in a
        special section/issue of TVCG.
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
              <td>September 1, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">Papers</td>
              <td>September 7, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">Notification</td>
              <td>October 27, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Revisions (2nd round)
              </td>
              <td>November 11, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Final notification (2nd round)
              </td>
              <td>December 2, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Camera-ready papers
              </td>
              <td>January 6, 2027</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
