import Image from 'next/image';
import Link from 'next/link';
import styles from './travel.module.css';

const PAGES = [
  ['airport-to-busan', 'Transportation'],
  ['accommodations', 'Accommodations'],
  ['visa-information', 'Visa Information'],
  ['tourist-attractions', 'Tourist Attractions'],
  ['food-and-shopping', 'Food & Shopping'],
];

function TravelNav({ active }) {
  return (
    <nav aria-label="Travel">
      <ul className={styles.navigation}>
        {PAGES.map(([slug, label]) => (
          <li key={slug}>
            <Link
              href={'/travel/' + slug + '/'}
              aria-current={active === slug ? 'page' : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function TravelPage({ title, active, children }) {
  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <span>Travel</span><span aria-hidden="true">/</span>
        <span aria-current="page">{title}</span>
      </nav>
      <details className={styles.mobileNavigation}>
        <summary>Travel information</summary>
        <TravelNav active={active} />
      </details>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <h2>Travel</h2>
          <TravelNav active={active} />
          <div className={styles.sidebarLinks}>
            <Link href="/venue/venue-information/">Conference venue</Link>
            <Link href="/contact/">Contact the organizers</Link>
          </div>
        </aside>
        <article className={styles.article}>
          <h1>{title}</h1>
          <div className={styles.content}>{children}</div>
        </article>
      </div>
    </div>
  );
}

export function TravelContents({ items }) {
  return (
    <nav aria-label="On this page" className={styles.contents}>
      <span>On this page</span>
      <ul>
        {items.map(([id, label]) => (
          <li key={id}><a href={'#' + id}>{label}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export function TravelSection({ id, title, children }) {
  return (
    <section id={id} className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}

export function TravelNote({ children }) {
  return <div className={styles.note}>{children}</div>;
}

export function TravelFacts({ items }) {
  return (
    <dl className={styles.facts}>
      {items.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function TravelMapLink({ place }) {
  const query = new URLSearchParams({ api: '1', query: place + ', Busan, South Korea' });
  return <a href={'https://www.google.com/maps/search/?' + query.toString()}>View on map</a>;
}

export function TravelRoute({ label, stops, caption }) {
  return (
    <figure className={styles.route}>
      <figcaption>{label}</figcaption>
      <ol>
        {stops.map((stop) => (
          <li key={stop.name} style={{ '--route-color': stop.color }}>
            <span className={styles.routeDot} aria-hidden="true" />
            <strong>{stop.name}</strong>
            <span>{stop.detail}</span>
          </li>
        ))}
      </ol>
      {caption && <p className={styles.routeCaption}>{caption}</p>}
    </figure>
  );
}

export function TravelPhoto({ src, alt, caption, credit }) {
  return (
    <figure className={styles.photo}>
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={720}
        unoptimized
        loading="lazy"
      />
      {/* <figcaption>
        {caption}
        {credit && (
          <>
            {' '}Photo: <a className="link" href={credit.source}>{credit.author}</a>
            {' '}(<a className="link" href={credit.licenseUrl}>{credit.license}</a>
            {credit.cropped ? ', cropped for display' : ''}).
          </>
        )}
      </figcaption> */}
    </figure>
  );
}
