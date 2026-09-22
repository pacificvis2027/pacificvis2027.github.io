import {
  TravelContents, TravelNote, TravelPage, TravelSection,
} from '../TravelContent';

export const metadata = { title: 'Visa Information — PacificVis 2027' };

export default function Page() {
  return (
    <TravelPage title="Visa Information" active="visa-information">
      <p>
        Entry requirements depend on your nationality, passport, and purpose
        of visit. Check the requirements for your circumstances before making
        travel arrangements for PacificVis 2027.
      </p>
      <TravelContents items={[
        ['requirements', 'Entry requirements'],
        ['keta', 'K-ETA'],
        ['invitation', 'Invitation letters'],
      ]} />

      <TravelSection id="requirements" title="Entry requirements">
        <p>
          Use the <a href="https://www.visa.go.kr/">Korea Visa Portal</a> to
          check visa categories and contact the Korean embassy or consulate
          responsible for your place of residence. The embassy or consulate
          can confirm the visa type, application documents, and processing time.
        </p>
        <ul>
          <li>Check the passport-validity and entry requirements that apply to your nationality.</li>
          <li>If a visa is required, follow your local Korean mission&apos;s document checklist and apply early.</li>
          <li>Confirm whether an invitation letter or proof of registration is required for your application.</li>
        </ul>
      </TravelSection>

      <TravelSection id="keta" title="Visa-free entry and K-ETA">
        <p>
          If you qualify for visa-free entry, check whether you need Korea
          Electronic Travel Authorization (K-ETA) on the{' '}
          <a href="https://www.k-eta.go.kr/">official K-ETA website</a>.
          K-ETA is an electronic travel authorization, not a visa.
        </p>
        <TravelNote>
          <strong>For travel in April 2027:</strong> the published temporary
          K-ETA exemption for eligible nationalities currently ends on
          December 31, 2026. Check the official site for the rules that apply
          to your travel dates. See the{' '}
          <a href="https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=299707&locale=EN">
            Ministry of Justice exemption notice
          </a>.
        </TravelNote>
      </TravelSection>

      <TravelSection id="invitation" title="Conference invitation letters">
        <p>
          Invitation or visa support letters will be available upon request
          after registration, through the conference registration process.
          The <a href="/registration/">Registration page</a> will provide
          further details when registration opens.
        </p>
        <p>
          Confirm with your embassy or consulate which documents are needed.
          A conference invitation supports your application but does not
          guarantee visa approval.
        </p>
        <p>
          PacificVis 2027 presentations are <strong>in person only</strong>.
          Please account for visa processing and travel arrangements when
          planning your participation.
        </p>
        <p>
          For conference-related questions, use the{' '}
          <a href="/contact/">organizers&apos; contact information</a>.
          Questions about eligibility or visa decisions should be addressed
          to the relevant Korean embassy or consulate.
        </p>
      </TravelSection>
    </TravelPage>
  );
}
