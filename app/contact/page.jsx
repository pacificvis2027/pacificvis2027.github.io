import PageShell from '../components/PageShell';

export const metadata = { title: 'Contact — PacificVis 2027' };

const CONTACTS = [
  {
    label: 'PacificVis 2027 General Inquiry Email',
    email: 'pacificvis27@gmail.com',
  },
  {
    label: 'PacificVis Steering Committee',
    email: 'sc@pacificvis.org',
  },
  {
    label: 'PacificVis 2027 Papers Co-chairs (Journal Track)',
    email: 'pvis27-jt_chairs@googlegroups.com',
  },
  {
    label: 'PacificVis 2027 Papers Co-chairs (Conference Track)',
    email: 'pvis27-ct_chairs@googlegroups.com',
  },
  {
    label: 'PacificVis 2027 VisNotes Co-chairs',
    email: 'pvis27-vn_chairs@googlegroups.com',
  },
  {
    label: 'PacificVis 2027 Posters Co-chairs',
    email: 'pvis27-p_chairs@googlegroups.com',
  },
  {
    label: 'PacificVis 2027 Visual Data Storytelling Contest Co-chairs',
    email: 'pvis27-vst_chairs@googlegroups.com',
  },
];

export default function Page() {
  return (
    <PageShell title="Contact">
      <p className="lead">
        For general or track-specific inquiries about PacificVis 2027, please
        use the appropriate contact address below.
      </p>

      <div className="mt-5 overflow-x-auto">
        <table className="table-classic">
          <thead>
            <tr>
              <th>Contact</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {CONTACTS.map((contact) => (
              <tr key={contact.email}>
                <td className="font-medium text-slate-900">{contact.label}</td>
                <td>
                  <a href={`mailto:${contact.email}`} className="link">
                    {contact.email}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="muted">
        Conference location: Busan, South Korea
      </p>
    </PageShell>
  );
}
