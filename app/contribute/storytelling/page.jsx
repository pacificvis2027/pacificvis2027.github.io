import PageShell from '../../components/PageShell';
import TrackChairs from '../../components/TrackChairs';

export const metadata = {
  title: 'Visual Data Storytelling Contest — PacificVis 2027',
};

const CHAIRS = [
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

const SUBMISSION_FORMS = [
  {
    title: 'Images, Infographics, and Data Comics',
    description: (
      <>
        A collection of images, charts, infographics, data comics, and/or data
        visualization that convey a story using engaging visual designs.{' '}
        <a href="https://vimeo.com/422255493" className="link">
          Example 1
        </a>{' '}
        and{' '}
        <a href="https://aviz.fr/~bbach/datacomics/" className="link">
          Example 2
        </a>
        .
      </>
    ),
  },
  {
    title: 'Videos and Animations',
    description: (
      <>
        A cinematic animation that tells a data-driven story using
        visualizations. Note that video submissions that appear to be tutorials
        or demonstrations of a visualization tool will not be considered; the
        focus of the submission must be a visual narrative about the data, not
        a visualization tool or technique.{' '}
        <a href="https://vimeo.com/220376839" className="link">
          Example
        </a>
        .
      </>
    ),
  },
  {
    title: 'Data Notebooks and Interactive Articles',
    description: (
      <>
        Interactive articles, markups, and notebooks that guide the reader
        through a narrative using text and visualizations. Examples of
        explainable notebook platforms include{' '}
        <a href="https://distill.pub/" className="link">
          Distill
        </a>
        ,{' '}
        <a href="https://idyll-lang.org/" className="link">
          Idyll
        </a>
        , and{' '}
        <a href="https://observablehq.com/" className="link">
          Observable
        </a>
        .
      </>
    ),
  },
  {
    title: 'Websites',
    description:
      'An interactive web page that guides the user through the story. Note that purely analytic or exploratory visualization tools/dashboards that do not provide guidance or storytelling to the user will not be considered.',
  },
  {
    title: 'Immersive and Augmented Experiences',
    description:
      'Stories that go beyond traditional desktop interfaces, including those that use headsets and tablets/mobile devices, are also encouraged. For such submissions, we encourage you to submit a video in the initial submission, and if accepted, will work with you to demo your story during the conference.',
  },
  {
    title: 'Unconventional Forms',
    description:
      'Other forms of interactive storytelling work, such as audio-visual projects, physicalization, game-based storytelling, and more, are also encouraged to submit. A video is likely the best way to make the initial submission. For unconventional entries that are accepted, we will work with the artists/authors to decide the best possible way to exhibit the work at the conference.',
  },
];

export default function Page() {
  return (
    <PageShell
      eyebrow="Contribute"
      title="The 2027 Visual Data Storytelling Contest"
    >
      <p className="muted">
        In conjunction with IEEE PacificVis 2027 in Busan, South Korea
      </p>

      <section>
        <h2 className="h2">About</h2>
        <div className="mt-4 space-y-4">
          <p className="lead">
            The Visual Data Storytelling Contest celebrates its 11th year in
            2027. This contest celebrates the emerging data communication
            genre, including data storytelling, narrative visualizations,
            explanatory notebooks, visual essays, and more. It aims to
            encourage students, researchers, and practitioners to demonstrate
            the value of data visualization by creating creative and compelling
            visual data stories. The contest will be held in conjunction with{' '}
            <a href="https://pacificvis2027.github.io/" className="link">
              IEEE PacificVis 2027
            </a>{' '}
            from April 19-22, 2027 in Busan, South Korea.
          </p>
          <p className="lead">
            PacificVis is a unified visualization symposium welcoming all areas
            of visualization, such as information, scientific, graph, security,
            and software visualization. Storytellers are invited to submit
            visual data-driven stories that draw upon (or intersect with) any of
            these areas. In addition, entries that focus on computational
            journalism and artistic design projects are encouraged. Unlike
            contests such as the{' '}
            <a href="https://vast-challenge.github.io/2026/" className="link">
              IEEE VAST Challenge
            </a>{' '}
            or the{' '}
            <a href="https://sciviscontest2026.github.io/" className="link">
              IEEE SciVis Contest
            </a>
            , the data for the PacificVis Visual Data Storytelling Contest is
            intentionally left unspecified; you are free to choose any publicly
            available dataset(s). Similarly, the task that storytellers are to
            accomplish is to successfully communicate a message or series of
            messages (i.e., a narrative, a series of insights) using data
            visualization techniques. The story&apos;s themes can draw from any
            topic, including current affairs, history, natural disasters, and
            research findings from the sciences and humanities. Entries may be
            submitted by teams or individuals from industry and academia.
            Conference sponsors can participate non-competitively. Submissions
            must fulfill the requirements explained below.
          </p>
          <p className="lead">
            Please see the{' '}
            <a href="https://visstory.github.io/" className="link">
              Contest Website
            </a>{' '}
            for full details.
          </p>
        </div>
      </section>

      <section>
        <h2 className="h2">Submission Requirements</h2>
        <p className="lead mt-4">
          Storytelling submissions can take several forms, including:
        </p>
        <div className="mt-6 space-y-6">
          {SUBMISSION_FORMS.map((form) => (
            <div key={form.title}>
              <h3 className="h3">{form.title}</h3>
              <p className="lead mt-2">{form.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="h2">Additional Requirements</h2>
        <p className="lead mt-4">
          Submissions should also adhere to the following requirements:
        </p>
        <ol className="lead mt-5 list-decimal space-y-5 pl-8">
          <li>
            The story must feature a visual representation of data generated by
            various techniques such as computer programming (e.g., D3.js or
            three.js), manual illustration (e.g., using pen &amp; paper, physical
            objects, or illustration software), or other relevant techniques.
            Third-party techniques or applications may be used in conjunction
            with the author&apos;s own work as long as proper credit is given to
            their respective creators and it is made clear which aspects of the
            implementation represent the authors&apos; own work.
          </li>
          <li>
            Entries must be original data-driven stories that have not been
            previously published elsewhere.
          </li>
          <li>
            The dataset(s) used in the story must be publicly available, and
            linked to, sourced, or otherwise referenced.
          </li>
          <li>
            The story content can be in any language, but accompanying
            explanations should be provided in English. This will help our
            judges provide a proper evaluation of your submission.
          </li>
          <li>
            A 150-word abstract (entered on the PCS submission website) that may
            briefly describe the purpose of the story along with the data
            analysis and design process undertaken by the storyteller(s). The
            abstract should not include the message(s) communicated by the
            story; the story must stand alone in this regard such that a viewer
            should not need to read the abstract to understand the story.
          </li>
          <li>
            Supplementary materials are encouraged. For example,
            high-resolution images, videos, audio files, or other materials to
            show design processes that will help reviewers evaluate the
            submission.
          </li>
          <li>
            For the accepted entries, we will expect the following additional
            requirements:
            <ul className="mt-3 list-disc space-y-3 pl-7">
              <li>
                At the camera-ready deadline, you will submit a 3-6 minute demo
                video describing the story. (Exact details will be sent out to
                accepted entries.)
              </li>
              <li>
                At least one member of the team must register and attend
                PacificVis 2027 to present your story.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section>
        <h2 className="h2">Submission Process</h2>
        <p className="lead mt-4">
          Submit via the{' '}
          <a
            href="https://new.precisionconference.com/user/login?society=vgtc"
            className="link"
          >
            Precision Conference System
          </a>{' '}
          site using the PacificVis 2027 Visual Data Storytelling Contest track.
        </p>
        <ul className="lead mt-5 list-disc space-y-4 pl-8">
          <li>
            Static entries such as infographics and data comics should be
            submitted in PDF format.
          </li>
          <li>
            Videos should be in mp4 format, with a maximum file size of 300 MB.
          </li>
          <li>
            Explainable articles and websites can be submitted as a web URL.
            Such entries should be directly runnable in a browser without
            downloading or installing packages/libraries/etc.
          </li>
          <li>
            If you have chosen to submit a URL (i.e., a website submission or an
            online version of your video or image submission), please add the
            URL in the abstract field.
          </li>
          <li>
            As mentioned above, for &quot;unconventional&quot; story formats (mixed
            reality, physicalizations, audio-video experiences, etc.), we
            recommend initially submitting a video of your story.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="h2">Reviewing and Awards</h2>
        <p className="lead mt-4">
          A jury of visualization and data storytelling experts will carefully
          judge each submission and make the selection of accepted entries.
          Successful entries will effectively communicate a narrative,
          message(s), or insight(s) using visual representations of data. Each
          judge assigned to a submission will give the submission a score from 1
          to 5, and they will be asked the following questions:
        </p>
        <ul className="lead mt-5 list-disc space-y-3 pl-8">
          <li>Is the story original?</li>
          <li>
            Is the story original (i.e., the author&apos;s own work not previously
            published elsewhere)?
          </li>
          <li>
            Is the story trustworthy and functional (i.e., is the message
            clearly communicated)?
          </li>
          <li>Is the story engaging and beautiful?</li>
          <li>Is the story informative and enlightening?</li>
          <li>Are the submission requirements met?</li>
        </ul>
        <p className="lead mt-5">
          Accepted submissions will be published on the PacificVis Storytelling
          Contest website. A selected set of accepted entries will receive
          awards (Honorable Mention and Best Storytelling Awards). Awards will
          be presented to the winners during the conference.
        </p>
      </section>

      <section>
        <h2 className="h2">Important Deadlines</h2>
        <p className="muted">All dates are midnight AOE.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="table-classic">
            <thead>
              <tr>
                <th>Deadline</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium text-slate-900">
                  Submission Deadline
                </td>
                <td>February 1, 2027</td>
              </tr>
              <tr>
                <td className="font-medium text-slate-900">
                  Notification Date
                </td>
                <td>February 15, 2027</td>
              </tr>
              <tr>
                <td className="font-medium text-slate-900">
                  Camera-Ready Deadline
                </td>
                <td>March 1, 2027</td>
              </tr>
              <tr>
                <td className="font-medium text-slate-900">
                  Present at PacificVis 2027
                </td>
                <td>April 19-22, 2027</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <TrackChairs title="Contest Chairs" people={CHAIRS}>
        <p className="lead">
          Contact email:{' '}
          <a
            href="mailto:pvis27-vst_chairs@googlegroups.com"
            className="link"
          >
            pvis27-vst_chairs@googlegroups.com
          </a>
        </p>
      </TrackChairs>
    </PageShell>
  );
}
