import PageShell from '../components/PageShell';

export const metadata = { title: 'Committee — PacificVis 2027' };

const SECTIONS = [
  {
    title: 'Honorary Chairs',
    members: [{ name: 'TBA', affiliation: '' }],
  },
  {
    title: 'General Chairs',
    members: [
      { name: 'TBA', affiliation: '' },
      { name: 'TBA', affiliation: '' },
    ],
  },
  {
    title: 'Papers Chairs (Journal Track)',
    members: [
      { name: 'TBA', affiliation: '' },
      { name: 'TBA', affiliation: '' },
    ],
  },
  {
    title: 'Papers Chairs (Conference Track)',
    members: [
      { name: 'TBA', affiliation: '' },
      { name: 'TBA', affiliation: '' },
    ],
  },
  {
    title: 'Short Papers Chairs (VisNotes)',
    members: [{ name: 'TBA', affiliation: '' }],
  },
  {
    title: 'Posters Chairs',
    members: [{ name: 'TBA', affiliation: '' }],
  },
  {
    title: 'Storytelling Chair',
    members: [{ name: 'TBA', affiliation: '' }],
  },
  {
    title: 'Workshops Chairs',
    members: [{ name: 'TBA', affiliation: '' }],
  },
  {
    title: 'Local Organizing Chairs',
    members: [{ name: 'TBA', affiliation: '' }],
  },
  {
    title: 'Steering Committee',
    members: [
      { name: 'Wei Chen', affiliation: 'Zhejiang University' },
      { name: 'Issei Fujishiro', affiliation: 'Keio University' },
      { name: 'Seokhee Hong', affiliation: 'University of Sydney' },
      { name: 'Takayuki Itoh', affiliation: 'Ochanomizu University' },
      { name: 'Kwan-Liu Ma', affiliation: 'University of California' },
      { name: 'Jinwook Seo', affiliation: 'Seoul National University' },
      { name: 'Xiaoru Yuan', affiliation: 'Peking University' },
    ],
  },
];

export default function Page() {
  return (
    <PageShell title="Organization Committee">
      <p className="lead">
        The PacificVis 2027 Organization Committee. Names and affiliations will
        be filled in as confirmations arrive.
      </p>
      <div className="mt-4 space-y-6">
        {SECTIONS.map((s) => (
          <section key={s.title}>
            <h2 className="h2">{s.title}</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {s.members.map((m, i) => (
                <li key={i} className="border border-slate-200 px-4 py-3">
                  <p className="font-medium text-slate-900">{m.name}</p>
                  {m.affiliation && (
                    <p className="text-sm text-slate-500">{m.affiliation}</p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
