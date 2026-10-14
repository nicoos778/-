import { basePath } from '../posters';
import { travelProjects } from '../travel';

export default function TravelCampaignPage() {
  return (
    <main className="travel-page">
      <header className="travel-page-nav">
        <a href={`${basePath}/#works`}>← 返回精选作品</a>
        <strong>许启征</strong>
        <span>CASE 02 / TRAVEL</span>
      </header>

      <section className="travel-page-hero">
        <div className="travel-page-kicker"><span>文旅线路</span><span>活动营销</span><span>长图设计</span></div>
        <div className="travel-page-title"><p>DESTINATION CAMPAIGNS</p><h1>文旅视觉</h1></div>
        <div className="travel-page-summary">
          <p>围绕目的地气质、出行节点与产品卖点，为不同线路建立清晰且有辨识度的活动视觉。重复线路归为同一项目，集中呈现主视觉与详情长图的延展关系。</p>
          <dl><div><dt>项目数量</dt><dd>07 组线路</dd></div><div><dt>视觉内容</dt><dd>16 张活动画面</dd></div></dl>
        </div>
        <div className="travel-page-covers" aria-hidden="true">
          <figure><img src={`${basePath}/works/travel-series/04-qinghai.webp`} alt="" /></figure>
          <figure><img src={`${basePath}/works/travel-series/11-sanya-detail.webp`} alt="" /></figure>
          <figure><img src={`${basePath}/works/travel-series/14-snow.webp`} alt="" /></figure>
        </div>
      </section>

      <nav className="travel-project-nav" aria-label="文旅项目分组">
        {travelProjects.map((project) => <a href={`#travel-${project.number}`} key={project.number}><span>{project.number}</span>{project.title}</a>)}
      </nav>

      <section className="travel-projects" aria-label="文旅视觉项目">
        {travelProjects.map((project) => (
          <article className="travel-project" id={`travel-${project.number}`} key={project.number}>
            <header>
              <span>{project.number} / {String(travelProjects.length).padStart(2, '0')}</span>
              <h2>{project.title}</h2>
              <strong>{project.subtitle}</strong>
              <p>{project.description}</p>
              <small>{String(project.images.length).padStart(2, '0')} 张视觉</small>
            </header>
            <div className={`travel-project-gallery ${project.images.length === 1 ? 'is-single' : ''}`}>
              {project.images.map((src, imageIndex) => (
                <details className="travel-poster-card" key={src}>
                  <summary>
                    <img src={`${basePath}${src}`} alt={`${project.title}视觉 ${imageIndex + 1}`} loading={project.number === '01' ? 'eager' : 'lazy'} />
                    <span><i>{String(imageIndex + 1).padStart(2, '0')}</i>展开完整长图</span>
                  </summary>
                  <img src={`${basePath}${src}`} alt={`${project.title}完整视觉 ${imageIndex + 1}`} loading="lazy" />
                </details>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="travel-page-conclusion">
        <span>TRAVEL VISUAL SYSTEM</span>
        <h2>同一条线路，<br />形成一组表达。</h2>
        <p>将重复活动内容按线路归组，既保留不同节点的视觉变化，也让作品浏览更清晰。</p>
      </section>
      <footer className="travel-page-footer"><span>许启征 · 视觉设计师</span><a href="mailto:cavxxx@foxmail.com">联系合作 ↗</a></footer>
    </main>
  );
}
