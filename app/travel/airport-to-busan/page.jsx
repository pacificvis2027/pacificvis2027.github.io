import {
  TravelContents, TravelFacts, TravelPage, TravelRoute, TravelSection,
} from '../TravelContent';
import styles from '../travel.module.css';
import { VENUE } from '../../venue/venue';

export const metadata = { title: 'Transportation — PacificVis 2027' };

export default function Page() {
  return (
    <TravelPage title="Transportation" active="airport-to-busan">
      <p>
        PacificVis 2027 takes place at <strong>{VENUE.name}</strong> on
        Haeundae Beach. Fly into <strong>Gimhae International Airport (PUS)</strong>,
        or arrive at <strong>Incheon International Airport (ICN)</strong> and
        continue to Busan by train.
      </p>
      <TravelContents items={[
        ['gimhae', 'Gimhae Airport'],
        ['incheon', 'Incheon Airport'],
        ['busan-station', 'Busan Station'],
        ['last-walk', 'Hotel entrance'],
        ['local-transport', 'Getting around Busan'],
      ]} />

      <TravelSection id="gimhae" title="From Gimhae International Airport (PUS)">
        <h3>Light rail and subway</h3>
        <p>
          Follow signs to <strong>Airport Station</strong> on the Busan-Gimhae
          Light Rail Transit (BGL). Take a train toward <strong>Sasang</strong>,
          then transfer to Busan Metro <strong>Line 2 toward Jangsan</strong>.
          Stay on Line 2 to <strong>Haeundae Station</strong>, then walk to the hotel.
        </p>
        <TravelRoute
          label="Gimhae Airport to Paradise Hotel Busan"
          stops={[
            { name: 'Gimhae Airport', detail: 'Airport Station: BGL toward Sasang', color: '#79539b' },
            { name: 'Sasang', detail: 'Transfer to Metro Line 2 toward Jangsan', color: '#367c35' },
            { name: 'Haeundae', detail: 'Exit 3 or 5; walk toward the beach', color: '#667681' },
            { name: 'Paradise Hotel', detail: 'Conference venue', color: '#087c9c' },
          ]}
          caption="One rail transfer at Sasang. Key stations only; the hotel lists an approximately 10-minute walk from Haeundae Station."
        />
        <p>
          Consult the{' '}
          <a href="https://www.airport.co.kr/gimhaeeng/cms/frCon/index.do?MENU_ID=110&CONTENTS_NO=3">
            airport subway guide
          </a>{' '}
          for the network map, and the <a href="https://www.bglrt.com/00216.web">BGL fare guide</a>
          {' '}for light-rail tickets.
        </p>

        <h3>Airport buses</h3>
        <p>
          Look for Haeundae-bound services from the terminal arrival areas.
          Confirm the stop for Paradise Hotel Busan, last departure, and
          payment method using the{' '}
          <a href="https://www.airport.co.kr/gimhaeeng/cms/frCon/index.do?MENU_ID=110&CONTENTS_NO=1">
            official airport bus directory
          </a>
          . Check the stop with the ticket counter or driver before boarding.
        </p>

        <h3>Taxis</h3>
        <p>
          Follow the taxi signs outside arrivals and have your hotel name and
          street address ready. Standard and deluxe/jumbo taxis have different
          fares; traffic, tolls, and nighttime surcharges can affect the total.
          See the <a href="https://www.airport.co.kr/gimhaeeng/cms/frCon/index.do?MENU_ID=110&CONTENTS_NO=4">
            airport taxi guide
          </a>{' '}
          for pickup locations and current charges.
        </p>
      </TravelSection>

      <TravelSection id="incheon" title="From Incheon International Airport (ICN)">
        <h3>Airport Railroad and KTX</h3>
        <p>
          From either airport terminal, take the <strong>Airport Railroad
          (AREX)</strong> to <strong>Seoul Station</strong>. Transfer there to
          a <strong>KTX train to Busan Station</strong>. Airport rail and KTX
          require separate tickets.
        </p>
        <TravelRoute
          label="Incheon to Busan by rail"
          stops={[
            { name: 'Incheon Airport', detail: 'Terminal 1 or Terminal 2: AREX to Seoul', color: '#087c9c' },
            { name: 'Seoul Station', detail: 'Transfer to a Busan-bound KTX train', color: '#275d9b' },
            { name: 'Busan Station', detail: 'Continue by Metro Line 1, bus, or taxi', color: '#c86525' },
          ]}
          caption="Allow additional time for immigration, baggage collection, and the transfer at Seoul Station."
        />
        <ol>
          <li>
            Locate the airport railway platforms using the{' '}
            <a href="https://www.airport.kr/ap_en/1512/subview.do">Incheon Airport railroad guide</a>.
          </li>
          <li>
            Check train times and purchase your Busan ticket through{' '}
            <a href="https://smart.letskorail.com/ebizbf/EbizBfTicketSearchM.do?lang=EN">KORAIL</a>.
            Select <strong>Seoul</strong> as the departure station and
            {' '}<strong>Busan</strong> as the destination.
          </li>
          <li>
            At Busan Station, follow the onward directions below to reach
            Paradise Hotel Busan.
          </li>
        </ol>
        <h3>Connecting flights</h3>
        <p>
          If your itinerary includes a flight to PUS, confirm the connection
          directly with your airline. Some domestic flights use
          {' '}<strong>Gimpo Airport (GMP)</strong>, which is a different airport
          from Incheon. Check the departure airport and baggage arrangements
          before booking a separate connection.
        </p>
      </TravelSection>

      <TravelSection id="busan-station" title="From Busan Station to the venue">
        <p>
          Take Metro <strong>Line 1 toward Nopo</strong> to Seomyeon. Change
          to <strong>Line 2 toward Jangsan</strong> and get off at Haeundae.
          Use exit 3 or 5 and continue on foot to Paradise Hotel Busan.
        </p>
        <TravelRoute
          label="Busan Station to Paradise Hotel Busan"
          stops={[
            { name: 'Busan Station', detail: 'Line 1 toward Nopo', color: '#c86525' },
            { name: 'Seomyeon', detail: 'Change to Line 2 toward Jangsan', color: '#367c35' },
            { name: 'Haeundae', detail: 'Exit 3 or 5; continue on foot', color: '#667681' },
            { name: 'Paradise Hotel', detail: 'Conference venue', color: '#087c9c' },
          ]}
        />
        <p>
          A direct taxi is another option, particularly with luggage. Travel
          time depends on traffic. The hotel also lists express bus 1003 to
          Haeundae Oncheon Sageori (Hot Spring Crossroad), followed by a walk;
          see its <a href={VENUE.directions}>official transport directions</a>.
        </p>
      </TravelSection>

      <TravelSection id="last-walk" title="From Haeundae Station to the hotel">
        <p>
          Use exit 3 or 5 and head toward Haeundae Beach, then follow
          Haeundaehaebyeon-ro east to the hotel. Allow approximately 10 minutes
          on foot, as indicated in the <a href={VENUE.directions}>hotel directions</a>.
          Check an accessible route separately if you need elevators or step-free access.
        </p>
        <TravelFacts items={[
          ['Destination', VENUE.name],
          ['Address', VENUE.address],
          ['For your taxi', <span key="ko" lang="ko">{VENUE.koreanAddress}</span>],
        ]} />
        <div className={styles.entryLinks}>
          <a href={VENUE.mapUrl}>Hotel map</a>
          <a href="/venue/venue-information/">Conference venue information</a>
        </div>
      </TravelSection>

      <TravelSection id="local-transport" title="Getting around Busan">
        <h3>Metro tickets and transportation cards</h3>
        <p>
          A rechargeable transportation card is useful for metro and bus
          journeys. Cards such as Tmoney and Cashbee are covered in the{' '}
          <a href="https://english1.visitkorea.or.kr/enu/TRP/TP_ENG_8_1_1.jsp">
            Korea Tourism Organization transportation-card guide
          </a>
          . Tap your card when entering and leaving the metro, and when boarding
          and alighting from buses to receive applicable transfer discounts.
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <caption className="sr-only">Adult Busan Metro fares published in September 2026</caption>
            <thead><tr><th scope="col">Adult metro fare</th><th scope="col">Section 1</th><th scope="col">Section 2</th></tr></thead>
            <tbody>
              <tr><th scope="row">Transportation card</th><td>KRW 1,600</td><td>KRW 1,800</td></tr>
              <tr><th scope="row">Single-journey QR ticket</th><td>KRW 1,700</td><td>KRW 1,900</td></tr>
            </tbody>
          </table>
        </div>
        <p className={styles.small}>
          Metro fares published as of September 2026, not a quotation for April
          2027. See the{' '}
          <a href="https://work.humetro.busan.kr/homepage/english/page/subLocation.do?menu_no=100601040101">
            Busan Transportation Corporation fare guide
          </a>{' '}
          for current prices. Light-rail and intercity train tickets are separate products.
        </p>
        <p>
          Use the{' '}
          <a href="https://www2.humetro.busan.kr/english/main.do">Busan Metro website</a>
          {' '}for station information, first and last trains, and route planning.
          If you need step-free access, check station facilities and the hotel
          entrance before deciding on your route.
        </p>
      </TravelSection>

      <p>
        See <a href="/travel/accommodations/">Accommodations</a> for the venue
        hotel and other places to stay in Haeundae.
      </p>
    </TravelPage>
  );
}
