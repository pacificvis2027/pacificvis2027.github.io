import PageShell from '../../components/PageShell';

export const metadata = { title: 'Paper Topics — PacificVis 2027' };

const TOPICS = [
  'Information Visualization',
  'Scientific Visualization',
  'Visual Analytics',
  'Visualization for AI / AI for Visualization',
  'Human-Data Interaction',
  'Visualization Systems & Toolkits',
  'Perception, Cognition & Aesthetics',
  'Evaluation & User Studies',
  'Visualization Education',
  'Applications in Health, Climate, Industry, Society, etc.',
];

export default function Page() {
  return (
    <PageShell eyebrow="Contribute" title="Paper Topics">
      <p className="lead">
        We welcome contributions in (but not limited to) the following topics:
      </p>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {TOPICS.map((t) => (
          <li
            key={t}
            className="border-l-2 border-ocean-700 bg-slate-50 px-4 py-3 text-xl leading-8 text-slate-700"
          >
            {t}
          </li>
        ))}
      </ul>
      <p className="muted mt-4">
        Consult the relevant track page for its complete scope and evaluation
        criteria.
      </p>
    </PageShell>
  );
}
