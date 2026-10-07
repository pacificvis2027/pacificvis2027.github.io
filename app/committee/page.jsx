import PageShell from '../components/PageShell';

export const metadata = { title: 'Committees — PacificVis 2027' };

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
    title: 'Finance Chairs',
    members: [
      {
        name: 'Hyunjoo Song',
        affiliation: 'Soongsil University',
        photo: '/images/committee/hyunjoo-song.jpg',
      },
      {
        name: 'Hyotaek Jeon',
        affiliation: 'POSTECH',
        photo: '/images/committee/hyotaek-jeon.jpeg',
      },
    ],
  },
  {
    title: 'Publication Chair',
    members: [
      {
        name: 'Dae Hyun Kim',
        affiliation: 'Yonsei University',
        photo: '/images/committee/dae-hyun-kim.png',
      },
    ],
  },
  {
    title: 'Diversity Chair',
    members: [
      {
        name: 'DongHwa Shin',
        affiliation: 'Kwangwoon University',
        photo: '/images/committee/donghwa-shin.jpg',
      },
    ],
  },
  {
    title: 'Web Chairs',
    members: [
      {
        name: 'Jaemin Jo',
        affiliation: 'Sungkyunkwan University',
        photo: '/images/committee/jaemin-jo.jpg',
      },
      {
        name: 'Sungbeom Cho',
        affiliation: 'POSTECH',
        photo: '/images/committee/sungbeom-cho.JPG',
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
    title: 'Sponsorship Chair',
    members: [
      {
        name: 'Tak Yeon Lee',
        affiliation: 'KAIST',
        photo: '/images/committee/tak-yeon-lee.jpg',
      },
    ],
  },
  {
    title: 'Student Volunteer Chair',
    members: [
      {
        name: 'Sungbok Shin',
        affiliation: 'Sogang University',
        photo: '/images/committee/sungbok-shin.webp',
      },
    ],
  },
  {
    title: 'Publicity Chair',
    members: [
      {
        name: 'Hyunwook Lee',
        affiliation: 'Soongsil University',
        photo: '/images/committee/hyunwook-lee.png',
      },
    ],
  },
  {
    title: 'Registration Chair',
    members: [
      {
        name: 'Changhee Lee',
        affiliation: 'POSTECH',
        photo: '/images/committee/changhee-lee.jpeg',
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
        affiliation: 'Komazawa University',
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

const TVCG_PROGRAM_COMMITTEE = [
  { name: 'Natalia Andrienko', affiliation: 'Fraunhofer IAIS' },
  { name: 'Alessio Arleo', affiliation: 'Eindhoven University of Technology' },
  { name: 'Benjamin Bach', affiliation: 'University of Edinburgh' },
  { name: 'Cindy Xiong Bearfield', affiliation: 'Georgia Institute of Technology' },
  { name: 'Jürgen Bernard', affiliation: 'University of Zurich' },
  { name: 'Chris Bryan', affiliation: 'Arizona State University' },
  { name: 'Michael Burch', affiliation: 'University of Applied Sciences' },
  { name: 'Jian Chen', affiliation: 'Ohio State University' },
  { name: 'Qing Chen', affiliation: 'Tongji University' },
  { name: 'Zhutian Chen', affiliation: 'University of Minnesota' },
  { name: 'Chongke Bi', affiliation: 'Tianjin University' },
  { name: 'Jaegul Choo', affiliation: 'KAIST' },
  { name: 'Maxime Cordeil', affiliation: 'University of Queensland' },
  { name: 'Andrew Cunningham', affiliation: 'University of South Australia' },
  { name: 'Dazhen Deng', affiliation: 'Zhejiang University' },
  { name: 'Sara Di Bartolomeo', affiliation: 'TU Wien' },
  { name: 'Fan Du', affiliation: 'Adobe Research' },
  { name: 'Mennatallah El-Assady', affiliation: 'ETH Zürich' },
  { name: 'Issei Fujishiro', affiliation: 'Keio University' },
  { name: 'Takanori Fujiwara', affiliation: 'University of Arizona' },
  { name: 'Mohammad Ghoniem', affiliation: 'Luxembourg Institute of Science and Technology' },
  { name: 'Carsten Görg', affiliation: 'University of Colorado Denver' },
  { name: 'David Gotz', affiliation: 'UNC' },
  { name: 'Hanqi Guo', affiliation: 'Ohio State University' },
  { name: 'Shunan Guo', affiliation: 'Adobe Research' },
  { name: 'Jun Han', affiliation: 'Hong Kong University of Science and Technology' },
  { name: 'Lynda Hardman', affiliation: 'CWI and Utrecht University' },
  { name: 'Enamul Hoque', affiliation: 'York University' },
  { name: 'Yifan Hu', affiliation: 'Yahoo Labs' },
  { name: 'Katherine Isaacs', affiliation: 'University of Utah' },
  { name: 'Takayuki Itoh', affiliation: 'Ochanomizu University' },
  { name: 'Hyeon Jeon', affiliation: 'Aarhus University' },
  { name: 'Radu Jianu', affiliation: 'University of London' },
  { name: 'Alark Joshi', affiliation: 'University of San Francisco' },
  { name: 'Minsuk Kahng', affiliation: 'Yonsei University' },
  { name: 'Philipp Kindermann', affiliation: 'University of Trier' },
  { name: 'Martin Krzywinski', affiliation: 'BC Cancer Research Centre' },
  { name: 'Kostiantyn Kucher', affiliation: 'Linnaeus University' },
  { name: 'Oh-Hyun Kwon', affiliation: 'Apple' },
  { name: 'Xingyu Lan', affiliation: 'Fudan University' },
  { name: 'Le Liu', affiliation: 'Northwestern Polytechnical University' },
  { name: 'Bongshin Lee', affiliation: 'Yonsei University' },
  { name: 'Guozheng Li', affiliation: 'Beijing Institute of Technology' },
  { name: 'Yanna Lin', affiliation: 'University of Waterloo' },
  { name: 'Zhicheng Liu', affiliation: 'University of Maryland' },
  { name: 'Can Liu', affiliation: 'Nanyang Technological University' },
  { name: 'Aidong Lu', affiliation: 'University of North Carolina at Charlotte' },
  { name: 'Min Lu', affiliation: 'Shenzhen University' },
  { name: 'Ross Maciejewski', affiliation: 'Arizona State University' },
  { name: 'Rafael Martins', affiliation: 'Linnaeus University' },
  { name: 'Jacob Miller', affiliation: 'Technical University of Munich' },
  { name: 'Alvitta Ottley', affiliation: 'Washington University' },
  { name: 'Fernando Paulovich', affiliation: 'Technical University Eindhoven' },
  { name: 'Charles Perin', affiliation: 'University of Victoria' },
  { name: 'Bruno Pinaud', affiliation: 'University of Bordeaux' },
  { name: 'Helen Purchase', affiliation: 'Monash University' },
  { name: 'Fetame Rajabiyazdi', affiliation: 'University of Calgary' },
  { name: 'Falk Schreiber', affiliation: 'University of Konstanz' },
  { name: 'Lei Shi', affiliation: 'Beihang University' },
  { name: 'Yang Shi', affiliation: 'Tongji University' },
  { name: 'Xinhuan Shu', affiliation: 'Newcastle University' },
  { name: 'Guodao Sun', affiliation: 'Zhejiang University of Technology' },
  { name: 'Danielle Szafir', affiliation: 'University of North Carolina' },
  { name: 'Tan Tang', affiliation: 'Zhejiang University' },
  { name: 'Jun Tao', affiliation: 'Sun Yat-sen University' },
  { name: 'Holger Theisel', affiliation: 'Otto von Guericke University Magdeburg' },
  { name: 'Markus Wallinger', affiliation: 'Technical University of Munich' },
  { name: 'Junpeng Wang', affiliation: 'Visa Research' },
  { name: 'Yun Wang', affiliation: 'Microsoft Research Asia' },
  { name: 'Yunhai Wang', affiliation: 'Renmin University' },
  { name: 'Tino Weinkauf', affiliation: 'KTH Royal Institute of Technology' },
  { name: 'Hsiang-Yun Wu', affiliation: 'St. Pölten University of Applied Sciences' },
  { name: 'Jiazhi Xia', affiliation: 'Central South University' },
  { name: 'Xian Xu', affiliation: 'Hong Kong University of Science and Technology' },
  { name: 'Yalong Yang', affiliation: 'Georgia Institute of Technology' },
  { name: 'Lingyun Yu', affiliation: 'Xi’an Jiaotong Liverpool University' },
  { name: 'Wei Zeng', affiliation: 'Hong Kong University of Science and Technology (Guangzhou)' },
  { name: 'Weikai Yang', affiliation: 'Hong Kong University of Science and Technology (Guangzhou)' },
  { name: 'Ying Zhao', affiliation: 'Central South University' },
  { name: 'Qian Zhu', affiliation: 'Renmin University' },
];

const VISNOTES_PROGRAM_COMMITTEE = [
  { name: 'Adam Coscia', affiliation: 'Stevens Institute of Technology' },
  { name: 'Alexander Bendeck', affiliation: 'Georgia Institute of Technology' },
  { name: 'Arran Zeyu Wang', affiliation: 'University of North Carolina at Chapel Hill' },
  { name: 'Dazhen Deng', affiliation: 'Zhejiang University' },
  { name: 'Furui Cheng', affiliation: 'ETH Zürich' },
  { name: 'Grace Guo', affiliation: 'Harvard University' },
  { name: 'Huyen N. Nguyen', affiliation: 'Harvard Medical School' },
  { name: 'Hyeon Jeon', affiliation: 'Aarhus University' },
  { name: 'Jennifer Rogers', affiliation: 'Idaho National Laboratory' },
  { name: 'Lily Ge', affiliation: 'Northwestern University' },
  { name: 'Linping Yuan', affiliation: 'Hong Kong University of Science and Technology' },
  { name: 'Liqi Cheng', affiliation: 'Zhejiang University' },
  { name: 'Markus Wallinger', affiliation: 'Technical University of Munich' },
  { name: 'Sichen Jin', affiliation: 'Georgia Institute of Technology' },
  { name: 'Sicheng Song', affiliation: 'East China Normal University' },
  { name: 'Songwen Hu', affiliation: 'Georgia Institute of Technology' },
  { name: 'Sungbok Shin', affiliation: 'Sogang University' },
  { name: 'Weidong Huang', affiliation: 'University of Technology Sydney' },
  { name: 'Weikai Yang', affiliation: 'Hong Kong University of Science and Technology (Guangzhou)' },
  { name: 'Haoyu Li', affiliation: 'Grand Valley State University' },
  { name: 'Jincheng Li', affiliation: 'Beijing Normal University' },
  { name: 'Shih-Hsuan Hung', affiliation: 'National Tsing Hua University' },
  { name: 'Takanori Fujiwara', affiliation: 'University of Arizona' },
  { name: "Sehi L'Yi", affiliation: 'Hong Kong University of Science and Technology' },
  { name: 'Yu Zhang', affiliation: 'University of Oxford' },
  { name: 'Jieqiong Zhao', affiliation: 'Augusta University' },
  { name: 'Guan Li', affiliation: 'Computer Network Information Center, Chinese Academy of Sciences' },
  { name: 'Kaiyuan Tang', affiliation: 'University of Notre Dame' },
  { name: 'Kentaro Takahira', affiliation: 'Kyoto University' },
  { name: 'Liwenhan Xie', affiliation: 'National University of Singapore' },
  { name: 'Soumya Dutta', affiliation: 'Indian Institute of Technology Kanpur' },
  { name: 'Wen-Chieh Lin', affiliation: 'National Yang Ming Chiao Tung University' },
  { name: 'Xiaoyu Zhang', affiliation: 'City University of Hong Kong' },
  { name: 'Yi Han', affiliation: 'National Sun Yat-sen University' },
  { name: 'Ang Li', affiliation: 'University of Queensland' },
  { name: 'Maxime Cordeil', affiliation: 'University of Queensland' },
  { name: 'Hsiang-Yun Wu', affiliation: 'St. Pölten University of Applied Sciences' },
  { name: 'Jolin Qu', affiliation: 'Western Sydney University' },
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
      <h4 className="mt-3 text-lg font-semibold leading-6 text-slate-900">
        {member.name}
      </h4>
      {member.affiliation && (
        <p className="mx-auto mt-1 max-w-[15rem] text-base leading-6 text-slate-600">
          {member.affiliation}
        </p>
      )}
    </li>
  );
}

function ProgramCommitteeTable({ id, title, members }) {
  return (
    <section id={id} className="scroll-mt-44">
      <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="mt-5 overflow-hidden rounded-sm border border-slate-200">
        <table className="w-full table-fixed border-collapse text-left">
          <thead className="bg-slate-100 text-sm uppercase tracking-wide text-slate-600">
            <tr>
              <th scope="col" className="w-[38%] px-4 py-3 font-semibold sm:w-[34%] sm:px-5">
                Name
              </th>
              <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                Affiliation
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {members.map((member) => (
              <tr key={member.name} className="align-top">
                <th
                  scope="row"
                  className="break-words px-4 py-3 font-medium text-slate-900 sm:px-5"
                >
                  {member.name}
                </th>
                <td className="break-words px-4 py-3 text-slate-600 sm:px-5">
                  {member.affiliation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <PageShell title="Conference Committees">
      <div className="space-y-16">
        <section id="organization-committee" className="scroll-mt-44">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900">
            Organization Committee Members
          </h2>
          <div className="mt-8 space-y-9">
            {SECTIONS.map((section) => {
              const hasMemberTiles = section.members.some(
                (member) => member.photo,
              );

              return (
                <section key={section.title}>
                  <h3 className="text-2xl font-semibold text-[#263c91]">
                    {section.title}
                  </h3>
                  <ul
                    className={
                      hasMemberTiles
                        ? 'mt-5 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'
                        : 'mt-3 grid gap-2 sm:grid-cols-2'
                    }
                  >
                    {section.members.map((member, index) => {
                      const key = `${section.title}-${member.name}-${index}`;

                      if (hasMemberTiles) {
                        return <MemberTile key={key} member={member} />;
                      }

                      return (
                        <li
                          key={key}
                          className="border border-slate-200 px-4 py-3"
                        >
                          <p className="font-medium text-slate-900">
                            {member.name}
                          </p>
                          {member.affiliation && (
                            <p className="text-sm text-slate-500">
                              {member.affiliation}
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
        </section>

        <ProgramCommitteeTable
          id="tvcg-program-committee"
          title="TVCG Journal Track Program Committee Members"
          members={TVCG_PROGRAM_COMMITTEE}
        />

        <ProgramCommitteeTable
          id="visnotes-program-committee"
          title="VisNotes Program Committee Members"
          members={VISNOTES_PROGRAM_COMMITTEE}
        />
      </div>
    </PageShell>
  );
}
