const NEWS = [
  {
    date: 'Conference',
    body: 'Welcome to the official site for the 20th IEEE Pacific Visualization Conference, taking place in Busan, South Korea, April 19-22, 2027.',
  },
  {
    date: 'Important dates',
    body: 'The TVCG Journal Paper Track, Conference Paper Track, VisNotes, and Visual Data Storytelling Contest CFPs are now available.',
  },
  {
    date: 'Workshop CFP',
    body: (
      <>
        The{' '}
        <a href="https://vismeetsai.github.io/" className="link">
          Visualization Meets AI 2027 workshop
        </a>{' '}
        call for participation is now available.
      </>
    ),
  },
  {
    date: 'Registration',
    body: 'The 2027 fee schedule is available. Registration dates and the registration link are TBA.',
  },
];

export default function News() {
  return (
    <section id="news" className="section border-t border-slate-200">
      <div className="container-page">
        <h2 className="h2">News</h2>
        <ul className="mt-5 space-y-4">
          {NEWS.map((n, i) => (
            <li key={i} className="lead">
              <span className="mr-2 text-sm font-semibold text-slate-500">
                [{n.date}]
              </span>
              {n.body}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
