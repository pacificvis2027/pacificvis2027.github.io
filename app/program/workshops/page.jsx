import PageShell from '../../components/PageShell';
import TrackChairs from '../../components/TrackChairs';

export const metadata = { title: 'Workshops — PacificVis 2027' };

const CHAIRS = [
  {
    name: 'Takanori Fujiwara',
    affiliation: 'University of Arizona',
    photo: '/images/committee/takanori-fujiwara.webp',
  },
  {
    name: 'Junpeng Wang',
    affiliation: 'Visa Research',
    photo: '/images/committee/junpeng-wang.jpg',
  },
];

export default function Page() {
  return (
    <PageShell eyebrow="Program" title="Workshops">
      <p className="lead">
        PacificVis 2027 workshops will take place in Busan, South Korea. The
        detailed workshop program will be published closer to the conference.
      </p>

      <section className="border-t border-slate-200 pt-6">
        <p className="text-lg font-semibold uppercase tracking-[0.12em] text-slate-500">
          April 19, 2027
        </p>
        <h2 className="h2 mt-2">Visualization Meets AI 2027</h2>
        <p className="lead mt-4">
          This workshop brings together the visualization and AI communities to
          explore AI for Visualization (AI4VIS), Visualization for AI (VIS4AI),
          and research spanning both areas.
        </p>
        <p className="lead mt-4">
          View the{' '}
          <a href="https://vismeetsai.github.io/" className="link">
            workshop website and call for participation
          </a>
          .
        </p>
      </section>

      <TrackChairs title="Workshop Chairs" people={CHAIRS} />
    </PageShell>
  );
}
