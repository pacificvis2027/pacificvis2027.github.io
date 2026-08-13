import PageShell, { Tba } from '../../components/PageShell';

export const metadata = { title: 'Reception — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Venue" title="Welcome Reception">
      <p className="lead">
        PacificVis 2027 plans to host a welcome reception for participants to
        meet colleagues from the visualization community. The date, location,
        access details, and program will be announced once confirmed.
      </p>
      <Tba />
    </PageShell>
  );
}
