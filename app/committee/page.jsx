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
    title: 'Paper Chairs (Journal Track)',
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
    title: 'Paper Chairs (Conference Track)',
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
    title: 'VisNotes Chairs',
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
    title: 'Poster Chairs',
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
    title: 'Visualization Meets AI Workshop Chairs',
    members: [
      {
        name: 'Takanori Fujiwara',
        affiliation: 'University of Arizona',
        photo: '/images/committee/takanori-fujiwara.webp',
      },
      {
        name: 'Junpeng Wang',
        affiliation: 'Visa Research',
        photo: '/images/committee/junpeng-wang.jpg',
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
        affiliation: 'University of California, Davis',
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

      </div>
    </PageShell>
  );
}
