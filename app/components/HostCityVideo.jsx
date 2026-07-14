export default function HostCityVideo() {
  return (
    <section id="host-city" className="section border-t border-slate-200 bg-slate-50">
      <div className="container-page">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          Host City
        </p>
        <h2 className="h2 mt-2">Busan, South Korea</h2>
        <p className="lead mt-4">
          PacificVis 2027 will take place in Busan, a coastal city known for
          its beaches, harbor views, markets, and vibrant urban culture.
        </p>
        <div className="mt-7 overflow-hidden border border-slate-200 bg-black">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/images/busan-video-poster.jpg"
            className="aspect-video w-full bg-black"
            aria-label="Busan promotional video"
          >
            <source src="/videos/Busan.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
