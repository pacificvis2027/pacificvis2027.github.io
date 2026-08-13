import PageShell, { Tba } from '../../components/PageShell';

export const metadata = { title: 'Awards — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Program" title="Awards">
      <p className="lead">
        PacificVis 2027 will recognize outstanding contributions through Best
        Paper, Best Short Paper, Best Poster, and the PacificVis Early Career
        Award. Recipients and details will be announced during the
        conference.
      </p>
      <Tba />
    </PageShell>
  );
}
