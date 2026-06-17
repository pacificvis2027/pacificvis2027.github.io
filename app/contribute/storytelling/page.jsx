import PageShell from '../../components/PageShell';

export const metadata = {
  title: 'Visual Data Storytelling Contest — PacificVis 2027',
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Contribute"
      title="Visual Data Storytelling Contest"
    >
      <p className="lead">
        The Visual Data Storytelling Contest invites compelling stories told
        through interactive and narrative visualization formats. Submissions
        may include data-driven articles, scrollytelling pieces, dashboards,
        videos, or other narrative visualization artifacts.
      </p>
      <section>
        <h2 className="h2">Chairs</h2>
        <ul className="mt-3 space-y-2 text-lg text-slate-700">
          <li>Linping Yuan, Hong Kong University of Science and Technology</li>
          <li>Angelos Chatzimparmpas, Utrecht University</li>
        </ul>
      </section>
    </PageShell>
  );
}
