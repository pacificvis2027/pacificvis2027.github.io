const EVENTS = [
  { year: 2026, city: 'Sydney',   dates: 'Apr 20 – Apr 23', url: 'https://pacificvis2026.github.io/' },
  { year: 2025, city: 'Taipei',   dates: 'Apr 22 – Apr 25', url: 'https://pacificvis2025.github.io/pages/index.html' },
  { year: 2024, city: 'Tokyo',    dates: 'Apr 23 – Apr 26', url: 'https://pacificvis.github.io/pvis2024/' },
  { year: 2023, city: 'Seoul',    dates: 'Apr 18 – Apr 21', url: 'https://pvis2023.github.io/pvis2023/' },
  { year: 2022, city: 'Tsukuba',  dates: 'Apr 11 – Apr 14', url: 'https://pvis2022.github.io/pvis2022/' },
  { year: 2021, city: 'Tianjin',  dates: 'Apr 19 – Apr 21', url: 'http://vis.tju.edu.cn/pvis2021/index.html' },
  { year: 2020, city: 'Tianjin',  dates: 'Jun 3 – Jun 5', url: 'http://vis.tju.edu.cn/pvis2020/index.html' },
  { year: 2019, city: 'Bangkok',  dates: 'Apr 23 – Apr 26', url: 'http://pvis2019.cbs.chula.ac.th/home.aspx' },
  { year: 2018, city: 'Kobe',     dates: 'Apr 10 – Apr 13', url: 'http://itolab.is.ocha.ac.jp/pvis2018/' },
  { year: 2017, city: 'Seoul',    dates: 'Apr 18 – Apr 21', url: 'http://pacificvis.snu.ac.kr/' },
  { year: 2016, city: 'Taipei',   dates: 'Apr 19 – Apr 22', url: 'http://graphics.csie.ntust.edu.tw/graphics/Vis_2016/index.html' },
  { year: 2015, city: 'Hangzhou', dates: 'Apr 14 – Apr 17', url: 'http://www.cad.zju.edu.cn/home/pvis2015/' },
  { year: 2014, city: 'Yokohama', dates: 'Mar 4 – Mar 7', url: 'https://fj.ics.keio.ac.jp/pvis2014/index.html' },
  { year: 2013, city: 'Sydney',   dates: 'Feb 26 – Mar 1', url: 'https://sydney.edu.au/engineering/it/groups/visual/pvis2013/welcome/index.php' },
  { year: 2012, city: 'Songdo',   dates: 'Feb 28 – Mar 2', url: 'https://hcil.snu.ac.kr/PacificVis2012' },
  { year: 2011, city: 'Hong Kong',dates: 'Mar 1 – Mar 4', url: 'https://i.cs.hku.hk/~pvis2011/' },
  { year: 2010, city: 'Taipei',   dates: 'Mar 2 – Mar 5', url: 'https://graphics.csie.ntu.edu.tw/pvis2010/' },
  { year: 2009, city: 'Beijing',  dates: 'Apr 20 – Apr 23', url: 'https://vis.pku.edu.cn/pvs2009/' },
  { year: 2008, city: 'Kyoto',    dates: 'Mar 4 – Mar 7', url: 'https://www.viz.media.kyoto-u.ac.jp/conf/pvis2008/' },
];

export default function PreviousEvents() {
  return (
    <section id="history" className="section border-t border-slate-200">
      <div className="container-page">
        <h2 className="h2">Previous Events</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="table-classic">
            <thead>
              <tr>
                <th>Year</th>
                <th>City</th>
                <th>Dates</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {EVENTS.map((e) => (
                <tr key={e.year}>
                  <td className="font-medium text-slate-900">{e.year}</td>
                  <td>{e.city}</td>
                  <td>{e.dates}</td>
                  <td>
                    {e.url ? (
                      <a
                        href={e.url}
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                      >
                        Website
                      </a>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
