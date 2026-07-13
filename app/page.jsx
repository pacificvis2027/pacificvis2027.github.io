import About from './components/About';
import News from './components/News';
import PreviousEvents from './components/PreviousEvents';
import Sponsors from './components/Sponsors';

export default function HomePage() {
  return (
    <>
      <section className="container-page py-10 sm:py-14 text-center">
        <p className="text-lg font-semibold uppercase tracking-[0.18em] text-slate-500">
          The 20th IEEE Pacific Visualization Conference
        </p>
        <h1 className="mt-3 font-serif text-6xl font-bold tracking-tight text-slate-900 sm:text-7xl">
          PacificVis 2027
        </h1>
        <p className="mt-5 text-3xl text-slate-700">
          Busan, South Korea · April 19-22, 2027
        </p>
      </section>

      <About />
      <News />
      <Sponsors />
      <PreviousEvents />
    </>
  );
}
