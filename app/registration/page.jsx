import PageShell from '../components/PageShell';

export const metadata = { title: 'Registration — PacificVis 2027' };

const FULL_EARLY = [
  ['IEEE Member', '700 USD'],
  ['Non-IEEE Member', '830 USD'],
  ['IEEE Member / Student', '505 USD'],
  ['Non-IEEE Member / Student', '600 USD'],
  ['Life-time IEEE Member', '410 USD'],
];

const ONE_DAY_EARLY = [
  ['IEEE Member', '250 USD'],
  ['Non-IEEE Member', '290 USD'],
  ['IEEE Member / Student', '190 USD'],
  ['Non-IEEE Member / Student', '220 USD'],
];

const FULL_LATE = [
  ['IEEE Member', '850 USD'],
  ['Non-IEEE Member', '1010 USD'],
  ['IEEE Member / Student', '610 USD'],
  ['Non-IEEE Member / Student', '725 USD'],
  ['Life-time IEEE Member', '490 USD'],
];

const ONE_DAY_LATE = [
  ['IEEE Member', '290 USD'],
  ['Non-IEEE Member', '340 USD'],
  ['IEEE Member / Student', '220 USD'],
  ['Non-IEEE Member / Student', '300 USD'],
];

function FeeTable({ rows }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="table-classic">
        <tbody>
          {rows.map(([category, fee]) => (
            <tr key={category}>
              <td className="font-medium text-slate-900">{category}</td>
              <td>{fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <PageShell title="Registration">
      <p className="lead">
        Registration for PacificVis 2027 will open through the IEEE Computer
        Society registration site. The registration link will be posted here
        once available.
      </p>

      <h2 className="h2 mt-8">Early Registration</h2>
      <p className="muted">Deadline: TBA</p>
      <FeeTable rows={FULL_EARLY} />

      <h2 className="h2 mt-8">Early One-Day Registration</h2>
      <p className="muted">Deadline: TBA</p>
      <FeeTable rows={ONE_DAY_EARLY} />

      <h2 className="h2 mt-8">Conference Late / On-Site Registration</h2>
      <p className="muted">
        The author registration deadline is TBA.
      </p>
      <FeeTable rows={FULL_LATE} />

      <h2 className="h2 mt-8">
        Conference Late / On-Site One-Day Registration
      </h2>
      <FeeTable rows={ONE_DAY_LATE} />

      <h2 className="h2 mt-8">Registration Notes</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-8 text-slate-700">
        <li>
          Author/presenter registration fees are not refundable for Journal
          track, Conference track, VisNotes, Workshops, Posters, and Visual
          Data Storytelling Contest submissions.
        </li>
        <li>Author registration fee includes publication cost.</li>
        <li>Each paper must have at least one full registration.</li>
        <li>
          Posters and Visual Data Storytelling Contest submissions must have at
          least one registration; the registering author does not need to be the
          presenter.
        </li>
        <li>
          Invitation or visa support letters will be issued after registration
          upon request through the registration process.
        </li>
      </ul>
    </PageShell>
  );
}
