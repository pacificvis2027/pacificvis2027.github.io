import {
  TravelContents, TravelFacts, TravelMapLink, TravelNote, TravelPage, TravelPhoto, TravelSection,
} from '../TravelContent';
import styles from '../travel.module.css';
import { VENUE } from '../../venue/venue';

export const metadata = { title: 'Accommodations — PacificVis 2027' };

const HOTELS = [
  {
    name: 'Fairfield by Marriott Busan',
    address: '314, Haeundaehaebyeon-ro, Haeundae-gu, Busan',
    access: 'In the Haeundae Beach area, on the same road as Paradise Hotel Busan. Haeundae Station is on Metro Line 2.',
    website: 'https://www.marriott.com/en-us/hotels/pusfi-fairfield-by-marriott-busan/overview/',
  },
  {
    name: 'Shilla Stay Haeundae',
    address: '46, Haeun-daero 570beon-gil, Haeundae-gu, Busan',
    access: 'Approximately 8 minutes on foot from Haeundae Station, exits 5 or 7, according to the hotel.',
    website: 'https://www.shillahotels.com/en/shillastay/haeundae/index.do',
  },
  {
    name: 'Toyoko Inn Busan Haeundae No.2',
    address: '5, Haeundaehaebyeon-ro 237beon-gil, Haeundae-gu, Busan',
    access: 'Near the western side of Haeundae Beach. The hotel lists access from Haeundae Station, exit 5.',
    website: 'https://www.toyoko-inn.com/eng/search/detail/00256/',
  },
];

export default function Page() {
  return (
    <TravelPage title="Accommodations" active="accommodations">
      <p>
        The conference venue is <strong>{VENUE.name}</strong> on Haeundae
        Beach. Staying in Haeundae provides convenient access to the conference.
        The venue hotel and several other options are listed below.
      </p>
      <TravelNote>
        <strong>Conference rates and room blocks: TBA.</strong> The links below
        lead to public hotel booking pages. PacificVis group rates and
        reservation deadlines will be posted when confirmed.
      </TravelNote>
      <TravelContents items={[
        ['venue-hotel', 'Venue hotel'],
        ['nearby-hotels', 'Other Haeundae hotels'],
        ['booking', 'Reservation details'],
      ]} />

      <TravelSection id="venue-hotel" title="Conference venue hotel">
        <h3>{VENUE.name}</h3>
        <div className={styles.mediaRow}>
          <div>
            <TravelFacts items={[
              ['Address', VENUE.address],
              ['Access', 'Metro Line 2 to Haeundae Station, exit 3 or 5; approximately 10 minutes on foot according to the hotel.'],
              ['Conference', 'PacificVis 2027 venue. Meeting rooms and the registration-desk location will be announced.'],
            ]} />
          </div>
          <TravelPhoto
            src={VENUE.photo}
            alt="Paradise Hotel Busan viewed from Haeundae Beach"
            caption="Paradise Hotel Busan (2018)."
            credit={VENUE.photoCredit}
          />
        </div>
        <div className={styles.entryLinks}>
          <a href={VENUE.website}>Official website and reservations</a>
          <a href={VENUE.mapUrl}>View on map</a>
          <a href="/venue/venue-information/">Venue information</a>
        </div>
      </TravelSection>

      <TravelSection id="nearby-hotels" title="Other hotels in Haeundae">
        <p>
          These hotels are listed for convenience. Any PacificVis room blocks
          will be announced separately. Check current rates and the walking
          route to Paradise Hotel Busan before booking.
        </p>
        <div>
          {HOTELS.map((hotel) => (
            <section key={hotel.name} className={styles.entry}>
              <h3>{hotel.name}</h3>
              <TravelFacts items={[
                ['Address', hotel.address],
                ['Access', hotel.access],
              ]} />
              <div className={styles.entryLinks}>
                <a href={hotel.website}>Official website and reservations</a>
                <TravelMapLink place={hotel.name + ' ' + hotel.address} />
              </div>
            </section>
          ))}
        </div>
      </TravelSection>

      <TravelSection id="booking" title="Reservation details">
        <ul>
          <li>Use your actual travel dates to check room availability. Ask the hotel about its booking window if April 2027 is not yet available.</li>
          <li>Check whether the quoted rate includes taxes, breakfast, and additional guests.</li>
          <li>Review cancellation and payment terms, especially when arranging travel before visa approval.</li>
          <li>Confirm accessible-room availability and step-free access directly with the property.</li>
          <li>Contact the hotel about check-in arrangements if your flight arrives late.</li>
        </ul>
        <p>
          Reservations made through these public links are handled by the hotels.
          See <a href="/travel/airport-to-busan/">Transportation</a> for airport
          and Busan Station connections to the venue.
        </p>
      </TravelSection>
    </TravelPage>
  );
}
