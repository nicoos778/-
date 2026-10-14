import { basePath, healthCampaignPosters } from '../posters';

const stages = [
  {
    number: '01',
    title: '活动预热',
    subtitle: '先建立期待感',
    description: '以“消费送好礼”为第一触点，集中展示赠品机制和活动开启时间，让用户快速理解参与价值。',
  },
  {
    number: '02',
    title: '正式上线',
    subtitle: '一次讲清核心福利',
    description: '将限时秒杀、现金减免与三重礼品收拢到同一张主视觉中，承担活动正式发布的核心传播任务。',
  },
  {
    number: '03',
    title: '产品卖点',
    subtitle: '把赠品价值说具体',
    description: '聚焦四合一血糖血压测试仪，通过产品大图、检测功能和限量信息强化赠品的实用价值。',
  },
  {
    number: '04',
    title: '价格方案',
    subtitle: '降低选择成本',
    description: '以清晰的票券式信息区分不同购买周期、日常售价、活动立减与最终到手价，帮助用户快速比较。',
  },
  {
    number: '05',
    title: '最后一天',
    subtitle: '用紧迫感完成收口',
    description: '以大字号倒计时和剩余名额形成最后提醒，在延续活动红色基调的同时提高信息冲击力。',
  },
];

export default function HealthCampaignPage() {
  return (
    <main className="campaign-page">
      <header className="campaign-page-nav">
        <a href={`${basePath}/#works`}>← 返回精选作品</a>
        <strong>许启征</strong>
        <span>CASE 01 / 2026</span>
      </header>

      <section className="campaign-hero">
        <div className="campaign-hero-kicker"><span>健康产品</span><span>节日营销</span><span>连续传播视觉</span></div>
        <div className="campaign-hero-title">
          <p>国庆活动视觉设计</p>
          <h1>国庆健康好礼</h1>
        </div>
        <div className="campaign-hero-summary">
          <p>围绕国庆节点设计一组连续营销视觉，以赠品机制、健康监测产品、价格方案与限时信息形成递进式沟通。</p>
          <dl><div><dt>项目内容</dt><dd>活动主视觉 / 营销长图</dd></div><div><dt>传播阶段</dt><dd>5 个连续节点</dd></div></dl>
        </div>
      </section>

      <nav className="campaign-stage-nav" aria-label="项目阶段">
        {stages.map((stage) => <a href={`#stage-${stage.number}`} key={stage.number}><span>{stage.number}</span>{stage.title}</a>)}
      </nav>

      <section className="campaign-story" aria-label="国庆活动视觉传播顺序">
        {stages.map((stage, index) => {
          const poster = healthCampaignPosters[index];
          return (
            <article className={`campaign-story-step ${index % 2 ? 'is-right' : ''}`} id={`stage-${stage.number}`} key={stage.number}>
              <div className="campaign-step-copy">
                <span>{stage.number} / 05</span>
                <h2>{stage.title}</h2>
                <strong>{stage.subtitle}</strong>
                <p>{stage.description}</p>
              </div>
              <figure><img src={poster.src} alt={`${stage.title}——国庆健康产品营销视觉`} loading={index === 0 ? 'eager' : 'lazy'} /></figure>
            </article>
          );
        })}
      </section>

      <section className="campaign-conclusion">
        <span>CAMPAIGN FLOW</span>
        <h2>从吸引注意，<br />到推动决策。</h2>
        <div>
          <p>五张视觉在统一的国庆氛围中承担不同任务，让单张海报形成可持续推进的营销沟通。</p>
          <a href={`${basePath}/posters/#group-健康产品营销`}>查看所有作品 ↗</a>
        </div>
      </section>

      <footer className="campaign-page-footer"><span>许启征 · 视觉设计师</span><a href="mailto:cavxxx@foxmail.com">联系合作 ↗</a></footer>
    </main>
  );
}
