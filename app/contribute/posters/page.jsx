import PageShell from '../../components/PageShell';

export const metadata = { title: 'Posters — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Contribute" title="Posters">
      <p className="lead">
        The Posters track showcases work-in-progress, late-breaking results,
        and student research. Posters provide an excellent opportunity to
        receive feedback and engage in discussions with the visualization
        community.
      </p>

      <h2 className="h2 mt-8">Important Dates</h2>
      <p className="muted">
        All deadlines are at 11:59pm (23:59) anywhere on Earth (AoE).
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="table-classic">
          <tbody>
            <tr>
              <td className="font-medium text-slate-900">
                Poster summary submission deadline
              </td>
              <td>February 15, 2027</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Poster summary notification
              </td>
              <td>March 8, 2027</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Camera-ready poster summary due
              </td>
              <td>March 22, 2027</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
