import PageShell from '../components/PageShell';

export const metadata = { title: 'Committee — PacificVis 2027' };

const SECTIONS = [
  {
    title: 'General Chairs',
    members: [
      {
        name: 'Sungahn Ko',
        affiliation: 'POSTECH',
        photo: '/images/committee/Sungahn_Ko.jpeg',
      },
    ],
  },
  {
    title: 'Papers Chairs (Journal Track)',
    members: [
      {
        name: 'Jian Zhao',
        affiliation: 'University of Waterloo',
        photo: '/images/committee/jian-zhao.png',
      },
      {
        name: 'Stephen Kobourov',
        affiliation: 'Technical University of Munich',
        photo: '/images/committee/stephen-kobourov.webp',
      },
      {
        name: 'Siming Chen',
        affiliation: 'Fudan University',
        photo: '/images/committee/siming-chen.jpg',
      },
    ],
  },
  {
    title: 'Papers Chairs (Conference Track)',
    members: [
      {
        name: 'Yong Wang',
        affiliation: 'Nanyang Technological University',
        photo: '/images/committee/yong-wang.jpg',
      },
      {
        name: 'Bei Wang',
        affiliation: 'University of Utah',
        photo: '/images/committee/bei-wang.jpg',
      },
      {
        name: 'Giuseppe Liotta',
        affiliation: 'University of Perugia',
        photo: '/images/committee/giuseppe-liotta.jpg',
      },
    ],
  },
  {
    title: 'Visualization Notes Chairs',
    members: [
      {
        name: 'Dongyu Liu',
        affiliation: 'University of California, Davis',
        photo: '/images/committee/dongyu-liu.jpg',
      },
      {
        name: 'Jaemin Jo',
        affiliation: 'Sungkyunkwan University',
        photo: '/images/committee/jaemin-jo.jpg',
      },
      {
        name: 'Ko-Chih Wang',
        affiliation: 'National Taiwan Normal University',
        photo: '/images/committee/ko-chih-wang.jpg',
      },
    ],
  },
  {
    title: 'Posters Chairs',
    members: [
      {
        name: 'Minsuk Kahng',
        affiliation: 'Yonsei University',
        photo: '/images/committee/minsuk-kahng.jpg',
      },
      {
        name: 'Yuxin Ma',
        affiliation: 'Southern University of Science and Technology',
        photo: '/images/committee/yuxin-ma.png',
      },
      {
        name: 'Ryosuke Saga',
        affiliation: 'Osaka Metropolitan University',
        photo: '/images/committee/ryosuke-saga.jpg',
      },
    ],
  },
  {
    title: 'Visual Data Storytelling Contest Chairs',
    members: [
      {
        name: 'Linping Yuan',
        affiliation: 'Hong Kong University of Science and Technology',
        photo: '/images/committee/linping-yuan.jpg',
      },
      {
        name: 'Angelos Chatzimparmpas',
        affiliation: 'Utrecht University',
        photo: '/images/committee/angelos-chatzimparmpas.jpg',
      },
    ],
  },
  {
    title: 'Local Organizing Chairs',
    members: [
      {
        name: 'Sunghee Kim',
        affiliation: 'Dong-Eui University',
        photo: '/images/committee/sunghee-kim.jpg',
      },
    ],
  },
  {
    title: 'Steering Committee',
    members: [
      {
        name: 'Wei Chen',
        affiliation: 'Zhejiang University',
        photo: '/images/committee/wei-chen.jpg',
      },
      {
        name: 'Issei Fujishiro',
        affiliation: 'Keio University',
        photo: '/images/committee/issei-fujishiro.jpg',
      },
      {
        name: 'Seokhee Hong',
        affiliation: 'University of Sydney',
        photo: '/images/committee/seokhee-hong.jpg',
      },
      {
        name: 'Takayuki Itoh',
        affiliation: 'Ochanomizu University',
        photo: '/images/committee/takayuki-itoh.jpg',
      },
      {
        name: 'Kwan-Liu Ma',
        affiliation: 'University of California',
        photo: '/images/committee/kwan-liu-ma.jpg',
      },
      {
        name: 'Jinwook Seo',
        affiliation: 'Seoul National University',
        photo: '/images/committee/jinwook-seo.jpg',
      },
      {
        name: 'Xiaoru Yuan',
        affiliation: 'Peking University',
        photo: '/images/committee/xiaoru-yuan.jpg',
      },
    ],
  },
];

const JOURNAL_TRACK_PROGRAM_COMMITTEE = [
  ['Takayuki Itoh', 'Ochanomizu University'],
  ['Aidong Lu', 'University of North Carolina at Charlotte'],
  ["Lingyun Yu", "Xi'an Jiaotong Liverpool University"],
  ['Qian Zhu', 'Renmin University'],
  ['Tan Tang', 'Zhejiang University'],
  ['Leni Yang', 'Inria'],
  ['Qiong Zeng', 'Shandong University'],
  ['Thomas Schultz', 'University of Bonn'],
  ['Ghulam Jilani Quadri', 'University of Oklahoma'],
  ['Fabrizio Montecchiani', 'University of Perugia'],
  ['Weidong Huang', 'University of Technology Sydney'],
  ['Katerina Vrotsou', 'Linkoping University'],
  [
    'Weikai Yang',
    'Hong Kong University of Science and Technology (Guangzhou)',
  ],
  ['Yifang Wang', 'Northwestern University'],
  ['Changjian Chen', 'Hunan University'],
  ['Xingbo Wang', 'Bosch Research North America'],
  ['Jiachen Wang', 'Zhejiang University'],
  ['Aritra Dasgupta', 'New Jersey Institute of Technology'],
  ['Jun Tao', 'Sun Yat-sen University'],
  [
    'Carla Dal Sasso Freitas',
    'Universidade Federal do Rio Grande do Sul',
  ],
  ['Shri Harini Ramesh', 'Carleton University'],
  ['Dazhen Deng', 'Zhejiang University'],
  ['Yang Shi', 'Tongji University'],
  ['Philipp Kindermann', 'University of Trier'],
  ['Steve Petruzza', 'Utah State University'],
  ['Seok-Hee Hong', 'University of Sydney'],
  ['Panagiotis Ritsos', 'Bangor University'],
  ['Robert Kruger', 'NYU'],
  ['Jiazhou Liu', 'Monash University'],
  ['Agnes Haryanto', 'Monash University'],
  ['Christy Jie Liang', 'University of Technology Sydney'],
  ['Kadek Satriadi', 'Monash University'],
  ['Guodao Sun', 'Zhejiang University of Technology'],
  ['Alma Cantu', 'Newcastle University'],
  ['Ciril Bohak', 'University of Ljubljana'],
  ["Alfie Abdul-Rahman", "King's College London"],
  ['Eric Morth', 'Bosch Research North America'],
  ['Michael Wybrow', 'Monash University'],
  ['Issei Fujishiro', 'Keio University'],
  ['Bettina Speckmann', 'Eindhoven University of Technology'],
  ['David Kouril', 'Harvard Medical School'],
  ['Sungahn Ko', 'POSTECH'],
  ['Alberto Jaspe-Villanueva', 'KAUST'],
  ['Xinhuan Shu', 'Newcastle University'],
  ['Hsiang-Yun Wu', 'St. Polten University of Applied Sciences'],
  ['Yue Zhang', 'Oregon State University'],
  ['Zhicheng Liu', 'University of Maryland'],
  ['Hanqi Guo', 'Ohio State University'],
  ['Markus Hadwiger', 'KAUST'],
  ['Tamara Mchedlidze', 'Utrecht University'],
];

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function MemberTile({ member }) {
  if (member.name === 'TBA') {
    return (
      <li className="border border-slate-200 px-4 py-3">
        <p className="font-medium text-slate-900">{member.name}</p>
      </li>
    );
  }

  return (
    <li className="text-center">
      <div className="mx-auto flex h-[7.5rem] w-[7.5rem] items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-slate-100 text-2xl font-semibold text-slate-500">
        {member.photo ? (
          <img
            src={member.photo}
            alt={`${member.name} profile`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <span aria-hidden="true">{initials(member.name)}</span>
        )}
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900">
        {member.name}
      </h3>
      {member.affiliation && (
        <p className="mx-auto mt-1 max-w-[15rem] text-base leading-6 text-slate-600">
          {member.affiliation}
        </p>
      )}
    </li>
  );
}

export default function Page() {
  return (
    <PageShell title="Organization Committee Members">
      <div className="space-y-9">
        {SECTIONS.map((s) => {
          const hasMemberTiles = s.members.some((m) => m.photo);

          return (
            <section key={s.title}>
              <h2 className="text-2xl font-semibold text-[#263c91]">
                {s.title}
              </h2>
              <ul
                className={
                  hasMemberTiles
                    ? 'mt-5 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'
                    : 'mt-3 grid gap-2 sm:grid-cols-2'
                }
              >
                {s.members.map((m, i) => {
                  const key = `${s.title}-${m.name}-${i}`;

                  if (hasMemberTiles) {
                    return <MemberTile key={key} member={m} />;
                  }

                  return (
                    <li key={key} className="border border-slate-200 px-4 py-3">
                      <p className="font-medium text-slate-900">{m.name}</p>
                      {m.affiliation && (
                        <p className="text-sm text-slate-500">
                          {m.affiliation}
                        </p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}

        <section>
          <h2 className="text-2xl font-semibold text-[#263c91]">
            Journal Track Program Committee Members
          </h2>
          <div className="mt-5 overflow-x-auto">
            <table className="table-classic">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Affiliation</th>
                </tr>
              </thead>
              <tbody>
                {JOURNAL_TRACK_PROGRAM_COMMITTEE.map(([name, affiliation]) => (
                  <tr key={`${name}-${affiliation}`}>
                    <td className="font-medium text-slate-900">{name}</td>
                    <td>{affiliation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
