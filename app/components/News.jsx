const NEWS = [
  {
    date: 'Coming soon',
    body: 'Welcome to the official site for the 20th IEEE Pacific Visualization Conference, hosted in Busan, South Korea over April 19-22, 2027.',
  },
  {
    date: 'Important dates',
    body: 'Submission timelines are now available for TVCG Journal Papers, Conference Papers, Short Papers (VisNotes), Posters, and Visual Data Storytelling.',
  },
  {
    date: 'Registration',
    body: 'Registration dates and fees have been posted. Early registration closes on March 9, 2027, and the author registration deadline is March 23, 2027.',
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
