import PageShell, { Tba } from '../../components/PageShell';

export const metadata = { title: 'Conference Program — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Program" title="Conference Program">
      <p className="lead">
        PacificVis 2027 will take place April 19-22, 2027. The full conference
        program — including the technical sessions, keynote talks, workshops,
        social events, and the banquet — will be published here closer to the
        conference dates.
      </p>
      <Tba />
    </PageShell>
  );
}
