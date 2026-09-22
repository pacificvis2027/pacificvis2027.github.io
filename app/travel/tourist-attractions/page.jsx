import {
  TravelContents, TravelMapLink, TravelPage, TravelPhoto, TravelSection,
} from '../TravelContent';
import styles from '../travel.module.css';

export const metadata = { title: 'Tourist Attractions — PacificVis 2027' };

const gamcheonCredit = {
  author: 'Bernard Gagnon',
  source: 'https://commons.wikimedia.org/wiki/File:Gamcheon_Culture_Village.jpg',
  license: 'CC0 1.0',
  licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  cropped: true,
};
const gwangalliCredit = {
  author: 'Masterhatch',
  source: 'https://commons.wikimedia.org/wiki/File:Gwangalli_Beach_and_Gwangan_Bridge_Busan.jpg',
  license: 'CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  cropped: true,
};

export default function Page() {
  return (
    <TravelPage title="Tourist Attractions" active="tourist-attractions">
      <p>
        The places below can be visited independently before or after the
        conference. Busan extends along the coast, so allow time for travel
        between its eastern beaches and the old downtown area.
      </p>
      <TravelContents items={[
        ['beaches', 'Beaches'],
        ['old-busan', 'Old Busan'],
        ['temple-coast', 'Temple and coastal park'],
      ]} />

      <TravelSection id="beaches" title="Beaches">
        <div className={styles.entry}>
          <h3>Gwangalli Beach and Gwangan Bridge</h3>
          <div className={styles.mediaRow}>
            <div>
              <p>
                A waterfront promenade, beachside restaurants, and views of
                Gwangan Bridge. The bridge lights make this a popular place
                for an evening walk.
              </p>
              <p><strong>Access:</strong> Metro Line 2 to Gwangan or Geumnyeonsan,
                then walk toward the beach.</p>
              <p><TravelMapLink place="Gwangalli Beach" /></p>
            </div>
            <TravelPhoto
              src="/images/gwangalli-beach.jpg"
              alt="Gwangan Bridge viewed across the water from Gwangalli Beach"
              caption="Gwangalli Beach."
              credit={gwangalliCredit}
            />
          </div>
        </div>
        <div className={styles.entry}>
          <h3>Haeundae Beach</h3>
          <p>
            A broad sandy beach with a waterfront walking area and restaurants
            around the streets leading to Haeundae Station.
          </p>
          <p><strong>Access:</strong> Metro Line 2 to Haeundae Station.
            Follow the main street toward the seafront.</p>
          <p><TravelMapLink place="Haeundae Beach" /></p>
        </div>
      </TravelSection>

      <TravelSection id="old-busan" title="Old Busan">
        <div className={styles.entry}>
          <h3>Gamcheon Culture Village</h3>
          <div className={styles.mediaRow}>
            <div>
              <p>
                Colorful hillside houses, public art, and small galleries
                overlook the port. The village is also a residential
                neighborhood; respect private entrances and keep noise down.
              </p>
              <p><strong>Access:</strong> Metro Line 1 to Toseong, followed by
                a local bus or taxi. Expect hills and stairs; check the route
                carefully if you need step-free access.</p>
              <p><TravelMapLink place="Gamcheon Culture Village" /></p>
            </div>
            <TravelPhoto
              src="/images/gamcheon-village.jpg"
              alt="Hillside houses at Gamcheon Culture Village"
              caption="Gamcheon Culture Village."
              credit={gamcheonCredit}
            />
          </div>
        </div>
        <div className={styles.entry}>
          <h3>Jagalchi Market and Nampo</h3>
          <p>
            Explore the seafood market and nearby shopping streets in the old
            downtown area. Gukje Market and Bupyeong Kkangtong Market can be
            included in the same outing.
          </p>
          <p><strong>Access:</strong> Metro Line 1 to Jagalchi or Nampo Station.</p>
          <div className={styles.entryLinks}>
            <TravelMapLink place="Jagalchi Market" />
            <a href="/travel/food-and-shopping/">Markets and local food</a>
          </div>
        </div>
      </TravelSection>

      <TravelSection id="temple-coast" title="Temple and coastal park">
        <div className={styles.entry}>
          <h3>Beomeosa Temple</h3>
          <p>
            A Buddhist temple on the slopes of Geumjeongsan. Allow time for the
            journey into northern Busan and the approach from the station.
          </p>
          <p><strong>Access:</strong> Metro Line 1 to Beomeosa Station, then
            continue by local bus or taxi. Check onward transport before departure.</p>
          <p><TravelMapLink place="Beomeosa Temple" /></p>
        </div>
        <div className={styles.entry}>
          <h3>Taejongdae</h3>
          <p>
            A coastal park on Yeongdo Island with walking routes and sea views.
            Some sections involve slopes and steps.
          </p>
          <p><strong>Access:</strong> Continue from central Busan by bus or taxi.
            Check current access and local transport arrangements before visiting.</p>
          <p><TravelMapLink place="Taejongdae" /></p>
        </div>
      </TravelSection>
      <p className={styles.small}>
        Check opening hours and visitor information with{' '}
        <a href="https://www.visitbusan.net/en/index.do">Visit Busan, the official city tourism website</a>
        . These are independent sightseeing suggestions, not scheduled conference tours.
      </p>
    </TravelPage>
  );
}
