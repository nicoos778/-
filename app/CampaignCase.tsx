import { basePath } from './posters';
import type { CampaignCaseData } from './campaigns';

export default function CampaignCase({ campaign }: { campaign: CampaignCaseData }) {
  return (
    <main className="campaign-page">
      <header className="campaign-page-nav">
        <a href={`${basePath}/#works`}>← 返回精选作品</a>
        <strong>许启征</strong>
        <span>CASE {campaign.caseNumber} / HEALTHCARE</span>
      </header>

      <section className="campaign-hero">
        <div className="campaign-hero-kicker">{campaign.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="campaign-hero-title"><p>{campaign.eyebrow}</p><h1>{campaign.title}</h1></div>
        <div className="campaign-hero-summary">
          <p>{campaign.summary}</p>
          <dl><div><dt>项目内容</dt><dd>{campaign.projectContent}</dd></div><div><dt>传播阶段</dt><dd>{campaign.stages.length} 个连续节点</dd></div></dl>
        </div>
      </section>

      <nav className="campaign-stage-nav" aria-label="项目阶段">
        {campaign.stages.map((stage, index) => <a href={`#stage-${index + 1}`} key={`${stage.title}-${index}`}><span>{String(index + 1).padStart(2, '0')}</span>{stage.title}</a>)}
      </nav>

      <section className="campaign-story" aria-label={`${campaign.title}视觉传播顺序`}>
        {campaign.stages.map((stage, index) => (
          <article className={`campaign-story-step ${index % 2 ? 'is-right' : ''}`} id={`stage-${index + 1}`} key={`${stage.title}-${index}`}>
            <div className="campaign-step-copy">
              <span>{String(index + 1).padStart(2, '0')} / {String(campaign.stages.length).padStart(2, '0')}</span>
              <h2>{stage.title}</h2><strong>{stage.subtitle}</strong><p>{stage.description}</p>
            </div>
            <div className={`campaign-visual ${stage.images.length > 1 ? 'campaign-visual-set' : ''}`}>
              {stage.images.map((src, imageIndex) => <img src={`${basePath}${src}`} alt={`${stage.title}——${campaign.title}视觉 ${imageIndex + 1}`} loading={index === 0 ? 'eager' : 'lazy'} key={src} />)}
            </div>
          </article>
        ))}
      </section>

      <section className="campaign-conclusion">
        <span>CAMPAIGN FLOW</span><h2>让每一个节点，<br />都有明确任务。</h2>
        <div><p>按照原始上传顺序完整保留系列视觉，呈现同一活动在不同传播阶段中的信息变化。</p><a href={`${basePath}/posters/#group-${campaign.groupTitle}`}>查看所有作品 ↗</a></div>
      </section>
      <footer className="campaign-page-footer"><span>许启征 · 视觉设计师</span><a href="mailto:cavxxx@foxmail.com">联系合作 ↗</a></footer>
    </main>
  );
}
