import PageShell from '../../components/PageShell';
import TrackChairs from '../../components/TrackChairs';

export const metadata = { title: 'Conference Papers — PacificVis 2027' };

const CHAIRS = [
  {
    name: 'Yong Wang',
    affiliation: 'Nanyang Technological University',
    photo: '/images/committee/yong-wang.jpg',
  },
  {
    name: 'Bei Wang',
    affiliation: 'University of Utah',
    photo: '/images/committee/bei-wang.jpg',
  },
  {
    name: 'Giuseppe Liotta',
    affiliation: 'University of Perugia',
    photo: '/images/committee/giuseppe-liotta.jpg',
  },
];

export default function Page() {
  return (
    <PageShell eyebrow="Contribute" title="Conference Papers">
      <div className="space-y-4">
        <p className="lead">
          Submissions are invited to the Conference Paper Track of IEEE
          PacificVis 2027. High-quality papers demonstrating originality,
          technical rigor, and significance will be published in the IEEE
          PacificVis 2027 Conference Proceedings.
        </p>
        <p className="lead">
          Both new submissions and revised versions of papers previously
          rejected from the PacificVis TVCG journal track are welcome. Authors
          of resubmitted papers may optionally request reviewer continuity to
          facilitate the evaluation process.
        </p>
        <p className="lead">
          Papers rejected from the TVCG journal track are not automatically
          transferred to the conference track. Instead, the submission
          schedules of the TVCG journal and conference paper tracks are
          intentionally coordinated to allow authors to revise and resubmit
          rejected TVCG papers to the conference track. We encourage authors to
          take advantage of this opportunity by addressing reviewer feedback
          before resubmission.
        </p>
        <p className="lead">
          Following the initial review, papers receiving a conditional
          acceptance will enter a revision and second-round review process. This
          process, which also covers any submitted supplemental material, is
          intended to ensure that accepted papers meet the standards required
          for publication and presentation at the conference. Final accepted
          papers, together with their supplemental material, will be published
          in the IEEE PacificVis Conference Proceedings and archived in the IEEE
          Xplore Digital Library in accordance with IEEE publication policies.
        </p>
        <p className="lead">
          In addition to regular research papers, the Conference Paper Track
          particularly welcomes Education Papers and System Papers.
        </p>
        <ul className="lead list-disc space-y-5 pl-8">
          <li>
            <span className="font-semibold text-slate-900">
              Education Papers
            </span>{' '}
            should advance visualization education, either by improving the
            training of visualization researchers and practitioners or by
            enhancing visualization literacy among broader audiences. These
            submissions will be evaluated primarily on the originality,
            effectiveness, and impact of their educational approaches rather
            than on technical novelty.
          </li>
          <li>
            <span className="font-semibold text-slate-900">System Papers</span>{' '}
            should present practical visualization systems that make
            substantive contributions to the development of visualization
            software or infrastructure. These submissions will be evaluated
            primarily on the completeness, usability, and practical value of
            the system rather than on theoretical novelty.
          </li>
        </ul>
        <p className="lead">
          Authors submitting an Education or System Paper should indicate the
          appropriate category by selecting the corresponding checkbox on the
          submission form.
        </p>
      </div>

      <h2 className="h2 mt-8">Track-Specific Deadlines</h2>
      <p className="muted">
        All deadlines are at 11:59pm (23:59) anywhere on Earth (AoE).
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="table-classic">
          <thead>
            <tr>
              <th>Deadline</th>
              <th>Dates</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium text-slate-900">
                Conference track - Abstracts
              </td>
              <td>November 2, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Conference track - Papers
              </td>
              <td>November 9, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Conference track - Notification (1st round)
              </td>
              <td>December 16, 2026</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Conference track - Revisions (2nd round)
              </td>
              <td>January 11, 2027</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Conference track - Final notification (2nd round)
              </td>
              <td>January 25, 2027</td>
            </tr>
            <tr>
              <td className="font-medium text-slate-900">
                Conference track - Camera-ready papers
              </td>
              <td>February 8, 2027</td>
            </tr>
          </tbody>
        </table>
      </div>

      <section>
        <h2 className="h2">Submission Instructions</h2>
        <p className="lead mt-3">
          Original, unpublished full papers of up to 9 + 2 pages (with only
          acknowledgments and references on the last two pages) are invited. The
          manuscript should be prepared according to the guide for authors given
          at{' '}
          <a
            href="https://pacificvis.github.io/"
            className="link"
          >
            pacificvis.github.io
          </a>
          .
        </p>
      </section>

      <TrackChairs title="Paper Chairs" people={CHAIRS} />
    </PageShell>
  );
}
