import { basePath } from './posters';
import { campaignCases, campaignOrder } from './campaigns';

const campaignShots = [
  { src: '01-preheat.jpg', step: '01', label: '活动预热' },
  { src: '02-launch.jpg', step: '02', label: '正式上线' },
  { src: '03-product.jpg', step: '03', label: '产品卖点' },
  { src: '04-pricing.jpg', step: '04', label: '价格方案' },
  { src: '05-final-day.jpg', step: '05', label: '限时收口' },
];

export default function FeaturedProjects() {
  return (
    <section className="featured-projects" id="works">
      <header className="featured-heading">
        <div>
          <span>SELECTED WORKS · 01</span>
          <h2>精选作品</h2>
        </div>
        <p>以完整项目呈现设计思路、<br />传播节奏与视觉执行。</p>
      </header>

      <a className="campaign-feature" href={`${basePath}/health-campaign/`} aria-label="查看国庆健康产品营销视觉完整项目">
        <div className="campaign-feature-copy">
          <span>健康产品 · 节日营销</span>
          <h3>国庆健康好礼</h3>
          <p>围绕国庆促销节点，将活动预热、核心福利、产品卖点、价格机制与限时提醒组织成一套连续传播视觉。</p>
          <div className="campaign-tags"><span>活动主视觉</span><span>社交媒体长图</span><span>营销节奏</span></div>
          <strong>查看完整项目 <i>↗</i></strong>
        </div>

        <div className="campaign-sequence" aria-hidden="true">
          {campaignShots.map((shot) => (
            <figure className={`campaign-shot campaign-shot-${shot.step}`} key={shot.src}>
              <img src={`${basePath}/works/health-campaign/${shot.src}`} alt="" loading={shot.step === '02' ? 'eager' : 'lazy'} />
              <figcaption><span>{shot.step}</span>{shot.label}</figcaption>
            </figure>
          ))}
        </div>
      </a>

      <div className="campaign-library">
        <header><span>MORE CAMPAIGNS</span><h3>连续活动视觉</h3><p>按项目上传顺序排列</p></header>
        <div className="campaign-library-grid">
          {campaignOrder.map((key, index) => {
            const campaign = campaignCases[key];
            const covers = campaign.stages.flatMap((stage) => stage.images).slice(0, 3);
            return (
              <a className="campaign-library-card" href={`${basePath}/${campaign.slug}-campaign/`} key={campaign.slug}>
                <div className="campaign-library-meta"><span>{String(index + 2).padStart(2, '0')} · {campaign.eyebrow}</span><strong>查看项目 ↗</strong></div>
                <h4>{campaign.title}</h4>
                <div className="campaign-library-images" aria-hidden="true">
                  {covers.map((src) => <img src={`${basePath}${src}`} alt="" loading="lazy" key={src} />)}
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <div className="featured-more">
        <a className="featured-secondary" href={`${basePath}/posters/#group-旅游`}>
          <figure><img src={`${basePath}/works/travel/04.jpg`} alt="文旅活动视觉设计" loading="lazy" /></figure>
          <div><span>02 · 文旅内容</span><h3>文旅视觉</h3><strong>查看系列 ↗</strong></div>
        </a>
        <a className="featured-secondary" href={`${basePath}/#personal-ip`}>
          <figure><img src={`${basePath}/works/ip/04.png`} alt="情绪仔个人IP设计" loading="lazy" /></figure>
          <div><span>03 · 角色设计</span><h3>情绪仔 IP</h3><strong>查看项目 ↓</strong></div>
        </a>
      </div>
    </section>
  );
}
