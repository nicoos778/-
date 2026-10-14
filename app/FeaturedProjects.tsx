import { basePath } from './posters';
import { campaignCases, campaignOrder } from './campaigns';
import TravelShowcase from './TravelShowcase';

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

      <div className="campaign-library">
        <header><span>CAMPAIGN SERIES</span><h3>连续活动视觉</h3><p>五组项目 · 按上传顺序排列</p></header>
        <div className="campaign-feature-list">
          <a className="campaign-feature campaign-feature-series" href={`${basePath}/health-campaign/`} aria-label="查看国庆健康产品营销视觉完整项目">
            <div className="campaign-feature-copy">
              <span>01 · 健康产品 · 节日营销</span>
              <h3>国庆健康好礼</h3>
              <p>围绕国庆促销节点，将活动预热、核心福利、产品卖点、价格机制与限时提醒组织成一套连续传播视觉。</p>
              <div className="campaign-tags"><span>活动主视觉</span><span>社交媒体长图</span><span>营销节奏</span></div>
              <strong>查看完整项目 <i>↗</i></strong>
            </div>
            <div className="campaign-sequence pattern-a" aria-hidden="true">
              {campaignShots.map((shot) => (
                <figure className={`campaign-shot campaign-shot-${shot.step}`} key={shot.src}>
                  <img src={`${basePath}/works/health-campaign/${shot.src}`} alt="" loading={shot.step === '02' ? 'eager' : 'lazy'} />
                  <figcaption><span>{shot.step}</span>{shot.label}</figcaption>
                </figure>
              ))}
            </div>
          </a>
          {campaignOrder.map((key, index) => {
            const campaign = campaignCases[key];
            const covers = campaign.stages.flatMap((stage) => stage.images.map((src) => ({ src, label: stage.title }))).slice(0, 5);
            return (
              <a className="campaign-feature campaign-feature-series" href={`${basePath}/${campaign.slug}-campaign/`} key={campaign.slug}>
                <div className="campaign-feature-copy">
                  <span>{String(index + 2).padStart(2, '0')} · {campaign.eyebrow}</span>
                  <h3>{campaign.title}</h3>
                  <p>{campaign.summary}</p>
                  <div className="campaign-tags">{campaign.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <strong>查看完整项目 <i>↗</i></strong>
                </div>
                <div className={`campaign-sequence pattern-${['b', 'c', 'd', 'e'][index]}`} aria-hidden="true">
                  {covers.map((cover, coverIndex) => (
                    <figure className={`campaign-shot campaign-shot-${String(coverIndex + 1).padStart(2, '0')}`} key={cover.src}>
                      <img src={`${basePath}${cover.src}`} alt="" loading="lazy" />
                      <figcaption><span>{String(coverIndex + 1).padStart(2, '0')}</span>{cover.label}</figcaption>
                    </figure>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <TravelShowcase />
    </section>
  );
}
