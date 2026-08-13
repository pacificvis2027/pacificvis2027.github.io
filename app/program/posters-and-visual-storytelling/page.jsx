import PageShell from '../../components/PageShell';
import TrackChairs from '../../components/TrackChairs';

export const metadata = {
  title: 'Posters & Visual Storytelling — PacificVis 2027',
};

const POSTER_CHAIRS = [
  {
    name: 'Minsuk Kahng',
    affiliation: 'Yonsei University',
    photo: '/images/committee/minsuk-kahng.jpg',
  },
  {
    name: 'Yuxin Ma',
    affiliation: 'Southern University of Science and Technology',
    photo: '/images/committee/yuxin-ma.png',
  },
  {
    name: 'Ryosuke Saga',
    affiliation: 'Osaka Metropolitan University',
    photo: '/images/committee/ryosuke-saga.jpg',
  },
];

const STORYTELLING_CHAIRS = [
  {
    name: 'Linping Yuan',
    affiliation: 'Hong Kong University of Science and Technology',
    photo: '/images/committee/linping-yuan.jpg',
  },
  {
    name: 'Angelos Chatzimparmpas',
    affiliation: 'Utrecht University',
    photo: '/images/committee/angelos-chatzimparmpas.jpg',
  },
];

const STORYTELLING_DATES = [
  ['Submission deadline', 'February 1, 2027'],
  ['Notification date', 'February 15, 2027'],
  ['Camera-ready deadline', 'March 1, 2027'],
  ['Presentation at PacificVis 2027', 'April 19-22, 2027'],
];

export default function Page() {
  return (
    <PageShell eyebrow="Program" title="Posters & Visual Storytelling">
      <p className="lead">
        PacificVis 2027 will feature an in-person poster session and a Visual
        Data Storytelling showcase. Accepted entries and detailed session times
        will be added to this page after notifications are complete.
      </p>

      <section className="border-t border-slate-200 pt-7">
        <h2 className="h2">Posters</h2>
        <p className="lead mt-4">
          The Posters track showcases work-in-progress, late-breaking results,
          and student research. Submission dates and detailed program
          information are still to be announced.
        </p>
        <p className="lead mt-4">
          View the{' '}
          <a href="/contribute/posters/" className="link">
            Posters submission information
          </a>
          .
        </p>
      </section>

      <TrackChairs title="Poster Chairs" people={POSTER_CHAIRS} />

      <section className="border-t border-slate-200 pt-7">
        <h2 className="h2">Visual Data Storytelling Contest</h2>
        <p className="lead mt-4">
          The contest welcomes original data-driven stories in formats such as
          infographics, data comics, videos, interactive articles, websites,
          immersive experiences, and other unconventional forms.
        </p>
        <p className="lead mt-4">
          View the{' '}
          <a href="/contribute/storytelling/" className="link">
            full call for participation
          </a>{' '}
          or visit the{' '}
          <a href="https://visstory.github.io/" className="link">
            contest website
          </a>
          .
        </p>

        <h3 className="h3 mt-7">Important Dates</h3>
        <p className="muted mt-2">All dates are midnight AoE.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="table-classic">
            <thead>
              <tr>
                <th>Deadline</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {STORYTELLING_DATES.map(([label, date]) => (
                <tr key={label}>
                  <td className="font-medium text-slate-900">{label}</td>
                  <td>{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <TrackChairs
        title="Visual Data Storytelling Contest Chairs"
        people={STORYTELLING_CHAIRS}
      />
    </PageShell>
  );
}
