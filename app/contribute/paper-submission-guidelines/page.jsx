import PageShell from '../../components/PageShell';

export const metadata = {
  title: 'Paper Submission Guidelines — PacificVis 2027',
};

const SUBMISSION_SYSTEM_URL =
  'https://new.precisionconference.com/pacificvis27b';

const PAPER_TRACKS = [
  {
    name: 'TVCG Journal Paper Track',
    href: '/contribute/tvcg-journal-papers/',
    requirements:
      'Up to 9 pages with 2 additional pages of references. Single-blind and double-blind submissions are allowed.',
  },
  {
    name: 'Conference Paper Track',
    href: '/contribute/conference-papers/',
    requirements:
      'Up to 9 + 2 pages, with only acknowledgments and references on the last two pages.',
  },
  {
    name: 'VisNotes (Short Paper) Track',
    href: '/contribute/short-papers/',
    requirements: 'Up to 6 pages, including references.',
  },
  {
    name: 'Posters',
    href: '/contribute/posters/',
    requirements:
      'Poster summaries of up to 2 pages, including figures, tables, and references.',
  },
];

export default function Page() {
  return (
    <PageShell eyebrow="Contribute" title="Paper Submission Guidelines">
      <p className="lead">
        These guidelines cover the TVCG Journal, Conference Paper, VisNotes,
        and Posters tracks. The track-specific call is the authoritative source
        for page limits, review policy, deadlines, and supplemental material
        requirements. Contest and workshop instructions are linked below.
      </p>

      <section className="border-y border-slate-200 py-7">
        <h2 className="h2">Submission System</h2>
        <p className="lead mt-4">
          IEEE PacificVis 2027 uses the Precision Conference System (PCS) for
          submissions and reviewing. Submit through the{' '}
          <a
            href={SUBMISSION_SYSTEM_URL}
            target="_blank"
            rel="noreferrer"
            className="link font-semibold"
          >
            PacificVis 2027 PCS submission site
          </a>
          . After signing in, make sure that you select the intended PacificVis
          2027 track before entering submission information or uploading files.
        </p>
        <p className="lead mt-4">
          The TVCG Journal and Conference Paper tracks have separate abstract
          and paper deadlines. Authors must register the title, abstract,
          authors, and keywords by the abstract deadline and upload the complete
          manuscript by the paper deadline. Other tracks follow the submission
          process and deadlines stated on their respective track pages.
        </p>
        <p className="lead mt-4">
          <strong className="font-semibold text-slate-900">
            The TVCG Journal and Conference Paper tracks require abstract
            registration before full-paper submission.
          </strong>{' '}
          For the TVCG Journal track, a full paper cannot be submitted unless
          its abstract was registered by the abstract deadline.
        </p>
        <p className="muted mt-4">
          See the{' '}
          <a href="/contribute/common-call-for-papers/" className="link">
            Common Call for Papers
          </a>{' '}
          for the current deadline summary.
        </p>
      </section>

      <section>
        <h2 className="h2">Track Requirements</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="table-classic">
            <thead>
              <tr>
                <th>Track</th>
                <th>Confirmed Requirements</th>
              </tr>
            </thead>
            <tbody>
              {PAPER_TRACKS.map((track) => (
                <tr key={track.name}>
                  <td className="font-medium text-slate-900">
                    <a href={track.href} className="link">
                      {track.name}
                    </a>
                  </td>
                  <td>{track.requirements}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="h2 break-words tracking-normal">
          Formatting and Language Guidelines
        </h2>
        <ul className="lead mt-4 list-disc space-y-4 pl-8">
          <li>
            TVCG Journal Paper Track:{' '}
            <a
              href="https://tc.computer.org/vgtc/publications/journal/"
              className="link"
            >
              IEEE VGTC journal publication guide
            </a>
          </li>
          <li>
            Conference Papers, VisNotes, and Posters:{' '}
            <a
              href="https://tc.computer.org/vgtc/publications/conference/"
              className="link"
            >
              IEEE VGTC conference publication guide
            </a>
          </li>
        </ul>
        <p className="lead mt-4">
          Use the template for your track and preserve its prescribed layout,
          margins, and type sizes. The TVCG special-issue template is distinct
          from both the conference template and the template for regular TVCG
          submissions.
        </p>
        <p className="lead mt-4">
          Write in clear English and use legible, well-captioned color figures.
          A first-page teaser is encouraged where the template permits it.
        </p>
      </section>

      <section>
        <h2 className="h2 break-words tracking-normal">Anonymization</h2>
        <p className="lead mt-4">
          Both single-blind and double-blind paper submissions are allowed.
          For double-blind review, omit names, affiliations, and other
          identifying details from the manuscript. Authors may choose
          single-blind review if anonymization would obscure the science.
          Track-specific review requirements take precedence.
        </p>
      </section>

      <section>
        <h2 className="h2 break-words tracking-normal">
          Originality and Reuse of Text
        </h2>
        <p className="lead mt-4">
          Submit original research that has not already appeared in an archival,
          peer-reviewed publication. The same or substantially overlapping work
          must not be under review at another venue at the same time. Disclose
          related publications and explain the new contribution. See the{' '}
          <a
            href="https://journals.ieeeauthorcenter.ieee.org/become-an-ieee-journal-author/publishing-ethics/guidelines-and-policies/submission-and-peer-review-policies/"
            className="link"
          >
            IEEE submission and peer review policies
          </a>
          .
        </p>
        <p className="lead mt-4">
          Preprints are permitted. Cite theses and any earlier non-archival
          poster, contest, or workshop version; submissions extending that work
          must offer substantial new contributions. Previously published text
          must not be copied verbatim. Credit reused figures and obtain any
          necessary permission from the rights holder.
        </p>
      </section>

      <section>
        <h2 className="h2 break-words tracking-normal">Plagiarism Policy</h2>
        <p className="lead mt-4">
          Authors must certify that submissions are their own work. Properly
          attribute others&apos; ideas, text, data, and results. IEEE screens
          articles for plagiarism before publication. Suspected plagiarism
          will be examined by the chairs and can lead to rejection. Consult the{' '}
          <a
            href="https://journals.ieeeauthorcenter.ieee.org/become-an-ieee-journal-author/publishing-ethics/ethical-requirements/"
            className="link"
          >
            IEEE ethical requirements
          </a>{' '}
          for authorship and attribution responsibilities.
        </p>
      </section>

      <section>
        <h2 className="h2 break-words tracking-normal">Supplemental Material</h2>
        <p className="lead mt-4">
          Videos, code, datasets, evaluation details, and additional figures
          are encouraged. Include relevant algorithm settings and datasets
          where possible. Submit stable materials that cannot change after the
          deadline. The paper must remain understandable without supplements,
          which reviewers are not required to examine.
        </p>
      </section>

      <section>
        <h2 className="h2 break-words tracking-normal">
          Resubmissions and Reviewer Continuity
        </h2>
        <p className="lead mt-4">
          Authors of papers rejected from the TVCG Journal track may revise
          and submit them to the Conference Paper track. Address the review
          feedback and make a new submission by the receiving track&apos;s
          deadlines; papers are not transferred automatically. Authors may
          request reviewer continuity or choose a new review process, as
          described in the{' '}
          <a href="/contribute/tvcg-journal-papers/" className="link">
            Journal
          </a>{' '}
          and{' '}
          <a href="/contribute/conference-papers/" className="link">
            Conference
          </a>{' '}
          calls. Check the receiving track&apos;s current schedule and format
          requirements for any resubmission.
        </p>
        <p className="lead mt-4">
          Past reviews and responses are optional. If supplied, include PDFs
          of the earlier manuscript, complete reviews, and a response explaining
          the revisions. Reviewers need not consult these materials. A previous
          rejection must not itself disadvantage a resubmission.
        </p>
      </section>

      <section>
        <h2 className="h2 break-words tracking-normal">Accessibility</h2>
        <p className="lead mt-4">
          Prepare documents that can be read with assistive technology. Use
          structured headings, text descriptions for figures, and real tables
          rather than images of tables. Use labels, shapes, or patterns in
          addition to color, and check the reading order and accessibility of
          the exported PDF. Practical instructions are available in the{' '}
          <a
            href="https://ieeevis.org/year/2024/info/call-participation/make-pdf-accessible"
            className="link"
          >
            IEEE VIS guide to accessible PDFs
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="h2 break-words tracking-normal">Generative AI Policy</h2>
        <p className="lead mt-4">
          Human authors are responsible for the accuracy, originality, and
          attribution of their entire submission; AI tools cannot be authors.
          Under{' '}
          <a
            href="https://journals.ieeeauthorcenter.ieee.org/become-an-ieee-journal-author/publishing-ethics/guidelines-and-policies/submission-and-peer-review-policies/#ai-generated-text"
            className="link"
          >
            IEEE&apos;s AI-generated content policy
          </a>
          , disclose generated text, figures, images, or code in the
          acknowledgments. Identify the tool, the affected parts of the paper,
          and how it was used. Use limited to editing and grammar improvement
          does not require disclosure, although IEEE recommends it.
        </p>
      </section>

      <section>
        <h2 className="h2 break-words tracking-normal">Open Access Policy</h2>
        <p className="lead mt-4">
          Authors are encouraged to make their accepted manuscripts openly
          available before publication, following the{' '}
          <a
            href="https://journals.ieeeauthorcenter.ieee.org/become-an-ieee-journal-author/publishing-ethics/guidelines-and-policies/post-publication-policies/"
            className="link"
          >
            IEEE article sharing and posting policies
          </a>
          . Check which manuscript version may be shared, where it may be
          posted, and which notices and links are required. Also check your
          institution&apos;s and funder&apos;s open-access requirements.
        </p>
      </section>

      <section>
        <h2 className="h2 break-words tracking-normal">Ethics Guidelines</h2>
        <p className="lead mt-4">
          The review process follows the{' '}
          <a
            href="https://tc.computer.org/vgtc/conferences/ethics-guidelines/reviewer-ethics/"
            className="link"
          >
            IEEE VGTC reviewer ethics guidelines
          </a>
          , including fair assessment, confidentiality, and appropriate
          handling of conflicts of interest. Report suspected violations to the
          track chairs; cases may be escalated to IEEE.
        </p>
      </section>

      <section>
        <h2 className="h2">Other Submission Formats</h2>
        <p className="lead mt-4">
          The{' '}
          <a href="https://visstory.github.io/" className="link">
            Visual Data Storytelling Contest
          </a>{' '}
          and{' '}
          <a href="https://vismeetsai.github.io/" className="link">
            Visualization Meets AI Workshop
          </a>{' '}
          have their own submission formats, review policies, and submission
          procedures. Follow the instructions on their official websites.
        </p>
      </section>

      <section>
        <h2 className="h2">Questions</h2>
        <p className="lead mt-4">
          For questions about your submission or track requirements, contact
          the relevant track chairs listed on the{' '}
          <a href="/contact/" className="link">
            Contact page
          </a>
          .
        </p>
      </section>
    </PageShell>
  );
}
