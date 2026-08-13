import PageShell from '../../components/PageShell';

export const metadata = { title: 'Food & Shopping — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Travel" title="Food & Shopping">
      <p className="lead">
        As a major port city, Busan is renowned for its seafood — try{' '}
        <em>milmyeon</em>, <em>dwaeji-gukbap</em>, fresh sashimi (<em>hoe</em>),
        and grilled eel. For shopping, Centum City&rsquo;s Shinsegae is one of
        the largest department stores in the world; for a more local feel,
        Gukje Market and the Nampo-dong streets are unmissable.
      </p>
    </PageShell>
  );
}
