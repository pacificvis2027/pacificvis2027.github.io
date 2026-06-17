import PageShell from '../../components/PageShell';

export const metadata = { title: 'Short Papers (VisNotes) — PacificVis 2027' };

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
              <td>January 7, 2027</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">Notification</td>
              <td>February 8, 2027</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Camera-ready papers
              </td>
              <td>February 15, 2027</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
