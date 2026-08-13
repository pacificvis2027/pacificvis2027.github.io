import PageShell, { Tba } from '../../components/PageShell';

export const metadata = { title: 'Banquet — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Venue" title="Conference Banquet">
      <p className="lead">
        PacificVis 2027 plans to host a conference banquet. The date, location,
        menu, ticketing, and accessibility details will be announced once
        confirmed.
      </p>
      <Tba />
    </PageShell>
  );
}
