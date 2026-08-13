import PageShell from '../../components/PageShell';

export const metadata = { title: 'Airport to Busan — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Travel" title="Airport to Busan">
      <p className="lead">
        Busan is served by <strong>Gimhae International Airport (PUS)</strong>,
        which connects with major hubs across the Asia-Pacific. Travelers may
        also arrive at <strong>Incheon International Airport (ICN)</strong>{' '}
        near Seoul and continue to Busan by rail or a connecting flight.
      </p>
      <ul className="lead mt-3 list-disc space-y-3 pl-8">
        <li>Gimhae (PUS) → Downtown Busan: ~30–45 min by light rail / taxi</li>
        <li>Seoul Station → Busan via KTX: approximately 2.5–3 hours</li>
        <li>Incheon (ICN) → Gimhae (PUS) domestic flight: ~1 hour</li>
      </ul>
      <p className="muted">
        Venue-specific directions will be added after the conference venue is
        confirmed.
      </p>
    </PageShell>
  );
}
