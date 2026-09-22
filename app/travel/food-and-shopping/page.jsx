import {
  TravelContents, TravelMapLink, TravelPage, TravelPhoto, TravelSection,
} from '../TravelContent';
import styles from '../travel.module.css';

export const metadata = { title: 'Food & Shopping — PacificVis 2027' };

const marketCredit = {
  author: 'Bernard Gagnon',
  source: 'https://commons.wikimedia.org/wiki/File:Jagalchi_Market_01.jpg',
  license: 'CC0 1.0',
  licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  cropped: true,
};

export default function Page() {
  return (
    <TravelPage title="Food & Shopping" active="food-and-shopping">
      <p>
        Busan has traditional markets, local restaurants, and large shopping
        districts. The guide below lists several local dishes and areas with
        convenient metro connections.
      </p>
      <TravelContents items={[
        ['local-food', 'Local dishes'],
        ['markets', 'Markets'],
        ['shopping', 'Shopping districts'],
        ['dietary', 'Dietary needs'],
      ]} />

      <TravelSection id="local-food" title="Local dishes">
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead><tr><th scope="col">Dish</th><th scope="col">What to expect</th></tr></thead>
            <tbody>
              <tr><th scope="row">Milmyeon</th><td>Chilled wheat noodles, served in broth or with a spicy sauce.</td></tr>
              <tr><th scope="row">Dwaeji-gukbap</th><td>Pork soup served with rice and side dishes. Seasonings are often provided separately.</td></tr>
              <tr><th scope="row">Eomuk</th><td>Fish cakes sold at market stalls and specialist shops, often served warm.</td></tr>
              <tr><th scope="row">Seafood</th><td>Market restaurants offer a range of seafood dishes. Confirm the total price, preparation method, and any separate table or cooking charges before ordering.</td></tr>
            </tbody>
          </table>
        </div>
      </TravelSection>

      <TravelSection id="markets" title="Traditional markets">
        <div className={styles.entry}>
          <h3>Jagalchi Market</h3>
          <div className={styles.mediaRow}>
            <div>
              <p>
                A seafood market in the old port area. Browse the stalls or
                eat at one of the market restaurants; the available catch and
                prices vary by vendor.
              </p>
              <p><strong>Access:</strong> Metro Line 1 to Jagalchi or Nampo Station.</p>
              <p><TravelMapLink place="Jagalchi Market" /></p>
            </div>
            <TravelPhoto
              src="/images/jagalchi-market.jpg"
              alt="Seafood stalls inside Jagalchi Market"
              caption="Inside Jagalchi Market."
              credit={marketCredit}
            />
          </div>
        </div>
        <div className={styles.entry}>
          <h3>Gukje Market and Bupyeong Kkangtong Market</h3>
          <p>
            Gukje Market has shopping lanes selling household goods, clothing,
            and souvenirs. Nearby Bupyeong Kkangtong Market is known for its
            food stalls. Check opening times for the stalls you plan to visit,
            especially in the evening.
          </p>
          <p><strong>Access:</strong> Metro Line 1 to Jagalchi Station, followed
            by a walk into the market area.</p>
          <div className={styles.entryLinks}>
            <TravelMapLink place="Gukje Market" />
            <TravelMapLink place="Bupyeong Kkangtong Market" />
          </div>
        </div>
      </TravelSection>

      <TravelSection id="shopping" title="Shopping districts">
        <div className={styles.entry}>
          <h3>Seomyeon</h3>
          <p>
            Department stores, underground shops, and restaurants around one
            of Busan&apos;s main transit interchanges.
          </p>
          <p><strong>Access:</strong> Seomyeon Station, Metro Lines 1 and 2.</p>
          <p><TravelMapLink place="Seomyeon Station" /></p>
        </div>
        <div className={styles.entry}>
          <h3>Centum City</h3>
          <p>
            Large department stores and shopping facilities in eastern Busan.
            Check each store&apos;s operating hours and closing days before visiting.
          </p>
          <p><strong>Access:</strong> Centum City Station, Metro Line 2.</p>
          <p><TravelMapLink place="Shinsegae Centum City" /></p>
        </div>
      </TravelSection>

      <TravelSection id="dietary" title="Dietary needs and visitor assistance">
        <p>
          Confirm ingredients with the restaurant if you have allergies or
          dietary restrictions. Broths and sauces may contain meat or seafood
          even when these are not visible in the dish. Having your requirements
          written in Korean can help when ordering.
        </p>
        <p>
          Find current dining information through{' '}
          <a href="https://www.visitbusan.net/en/index.do">Visit Busan</a>.
          The Korea Tourism Organization&apos;s{' '}
          <a href="https://english1.visitkorea.or.kr/enu/TRV/TV_ENG_3_1.jsp">1330 travel helpline</a>
          {' '}also provides visitor assistance.
        </p>
      </TravelSection>
    </TravelPage>
  );
}
