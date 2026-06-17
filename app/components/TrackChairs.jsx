function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function TrackChairs({ title = 'Chairs', people }) {
  return (
    <section>
      <h2 className="h2">{title}</h2>
      <ul className="mt-5 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => (
          <li key={person.name} className="text-center">
            <div className="mx-auto flex h-[7.5rem] w-[7.5rem] items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-slate-100 text-2xl font-semibold text-slate-500">
              {person.photo ? (
                <img
                  src={person.photo}
                  alt={`${person.name} profile`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <span aria-hidden="true">{initials(person.name)}</span>
              )}
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900">
              {person.name}
            </h3>
            <p className="mx-auto mt-1 max-w-[15rem] text-base leading-6 text-slate-600">
              {person.affiliation}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
