import PageShell from '../../components/PageShell';
import { TravelFacts, TravelPhoto } from '../../travel/TravelContent';
import { VENUE } from '../venue';

export const metadata = { title: 'Venue Information — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Venue" title="Venue Information">
      <h2 className="text-3xl font-semibold text-slate-900">{VENUE.name}</h2>
      <p className="text-lg leading-8">
        PacificVis 2027 will take place at Paradise Hotel Busan, on the Haeundae
        beachfront. Conference meeting rooms, the registration-desk location,
        and on-site arrangements will be announced.
      </p>
      <div className="text-lg leading-8">
        <TravelFacts items={[
          ['Address', VENUE.address],
          ['For your taxi', <span key="ko" lang="ko">{VENUE.koreanAddress}</span>],
          ['Nearest metro', 'Haeundae Station, Line 2. The hotel lists an approximately 10-minute walk from exit 3 or 5.'],
        ]} />
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-lg">
        <a className="link" href={VENUE.website}>Hotel website</a>
        <a className="link" href="/travel/airport-to-busan/">Transportation to the venue</a>
        <a className="link" href="/travel/accommodations/">Accommodations</a>
      </div>
      <TravelPhoto
        src={VENUE.photo}
        alt="Paradise Hotel Busan viewed from Haeundae Beach"
        caption="Paradise Hotel Busan (2018)."
        credit={VENUE.photoCredit}
      />
      <div className="border border-slate-200">
        <iframe
          title="Location of Paradise Hotel Busan"
          src={VENUE.mapEmbedUrl}
          className="h-[380px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <p className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600">
          {VENUE.name}{' '}
          <a className="link" href={VENUE.mapUrl}>View larger map</a>
        </p>
      </div>
    </PageShell>
  );
}
