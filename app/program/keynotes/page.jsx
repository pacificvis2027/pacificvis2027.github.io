import PageShell, { Tba } from '../../components/PageShell';

export const metadata = { title: 'Keynotes — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Program" title="Keynote Speakers">
      <p className="lead">
        PacificVis 2027 keynote speakers and talk titles will be announced once
        confirmed.
      </p>
      <Tba />
    </PageShell>
  );
}
