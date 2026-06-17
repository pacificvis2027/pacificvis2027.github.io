import PageShell from '../../components/PageShell';

export const metadata = { title: 'Conference Papers — PacificVis 2027' };

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
              <td>November 1, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">Papers</td>
              <td>November 8, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Notification (1st round)
              </td>
              <td>December 15, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Revisions (2nd round)
              </td>
              <td>January 8, 2027</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Final notification (2nd round)
              </td>
              <td>January 22, 2027</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Camera-ready papers
              </td>
              <td>February 5, 2027</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
