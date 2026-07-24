const NEWS = [
  {
    date: 'Coming soon',
    body: 'Welcome to the official site for the 20th IEEE Pacific Visualization Conference, taking place in Busan, South Korea, April 19-22, 2027.',
  },
  {
    date: 'Important dates',
    body: 'The TVCG Journal Paper Track CFP and Conference Paper Track dates are available. The full Conference Paper Track CFP will be posted when finalized.',
  },
  {
    date: 'Registration',
    body: 'Registration dates are TBA. Fees will be updated as registration details are confirmed.',
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
