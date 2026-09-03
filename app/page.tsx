import CursorTrail from './CursorTrail';
import ServicesSection from './ServicesSection';
import ContactButtons from './ContactButtons';
import { basePath } from './posters';
import FeaturedOrbit from './FeaturedOrbit';
import ExpressionSystem from './ExpressionSystem';

const experience = [
  {
    date: '2026.04—至今', role: '平面设计', company: '湖南省湘茶供应链管理有限公司',
    duties: ['负责品牌日常朋友圈宣传文案撰写及海报设计制作。', '围绕节日及营销节点，独立完成主题宣传海报的创意与输出。', '负责活动海报、配图等月度宣传物料设计，并持续优化版式。', '运用智能工具辅助文案、创意构思及设计执行，提高工作效率。'],
  },
  {
    date: '2023.04—2026.04', role: '视觉设计', company: '长沙游山玩水传媒有限公司',
    duties: ['负责朋友圈日常营销宣传图文设计与视觉优化。', '完成旅游活动、线路产品推广海报及宣传物料设计。', '负责旅游宣传短视频剪辑、字幕及基础视觉包装。', '对接销售及运营需求，完成宣传物料修改、优化与交付。'],
  },
  {
    date: '2022.08—2023.03', role: '平面设计', company: '泰安东晟文化传媒有限公司',
    duties: ['负责业务广告平面设计、制作与创意延展。', '多渠道搜集并分析设计元素、视觉效果，提出多项设计思路。', '与协作方沟通，把控项目质量与交付时间，推动项目顺利验收。', '协助团队改进设计方案十余项，提升设计与制作效率。'],
  },
  {
    date: '2021.09—2021.11', role: '设计师助理', company: '山东浩之华房地产咨询有限公司',
    duties: ['负责公司广告宣传品的平面设计与制作。', '沟通并分析市场策划及制作需求，完成创意和平面方案。', '设计广告、宣传彩页、海报及内外场宣传物料。', '参与公司网站与微信公众号推广维护，内容点击量超过五千。'],
  },
];

const fields = ['品牌传播', '文旅内容', '活动营销', '婚礼影像', '地产宣传'];

export default function Home() {
  return (
    <main>
      <aside className="sidebar">
        <a className="identity" href="#top">
          <img src={`${basePath}/xuqizheng.jpg`} alt="许启征" />
          <strong>许启征</strong>
        </a>

        <nav aria-label="主导航">
          <a href="#about">关于</a>
          <a href="#experience">经历</a>
          <a href="#works">作品</a>
          <a href="#personal-ip">个人IP</a>
          <a href="#services">服务</a>
          <a href="#contact">联系</a>
        </nav>

        <div className="sidebar-bottom">
          <p>以策略梳理信息，以设计建立秩序，为品牌创造清晰、有记忆点的视觉表达。</p>
          <ContactButtons />
        </div>
      </aside>

      <div className="canvas">
        <div className="availability"><i /> 可接受新项目</div>

        <section className="intro" id="top">
          <CursorTrail />
          <h1>你好，我是许启征<br />一名<span className="role"><span className="role-text">视觉设计师</span></span></h1>
        </section>

        <section className="about-section" id="about">
          <div className="about-card">
            <img src={`${basePath}/xuqizheng.jpg`} alt="许启征的个人照片" />
            <div>
              <h2>关于我</h2>
              <div className="personal-info">
                <div><span>姓名</span><strong>许启征</strong></div>
                <div><span>性别</span><strong>男</strong></div>
                <div><span>电话</span><a href="tel:19308455943">193 0845 5943</a></div>
                <div><span>邮箱</span><a href="mailto:cavxxx@foxmail.com">cavxxx@foxmail.com</a></div>
                <div><span>工作时间</span><strong>5年</strong></div>
              </div>
              <p>我在湖南长沙工作与生活，拥有五年设计相关经验。熟悉品牌日常传播、新媒体内容、活动物料、文旅宣传与视频视觉包装。</p>
              <p>我喜欢把散乱的信息整理成稳定的视觉系统，也会运用智能工具辅助文案、创意构思和设计执行，让产出更高效、更准确。</p>
            </div>
            <div className="education-line"><span>教育经历</span><strong>安阳学院 · 视觉传达设计</strong><span>2018—2022</span></div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <h2>经历与积累</h2>
          <div className="experience-list">
            {experience.map((item) => (
              <details className="experience-item" name="experience" key={item.company}>
                <summary>
                  <span>{item.date}</span><strong>{item.role}</strong><p>{item.company}</p><i aria-hidden="true">＋</i>
                </summary>
                <div className="experience-content">
                  <ul>{item.duties.map((duty) => <li key={duty}>{duty}</li>)}</ul>
                </div>
              </details>
            ))}
          </div>
          <div className="fields">
            <strong>参与过的领域</strong>
            <div className="fields-marquee">
              <div className="fields-track">
                {[0, 1].map((copy) => (
                  <div className="fields-set" aria-hidden={copy === 1} key={copy}>
                    {fields.map((field) => <span key={field}>{field}</span>)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FeaturedOrbit />

        <section className="ip-showcase" id="personal-ip">
          <header className="ip-heading">
            <div><span>个人IP设计</span><strong>情绪仔</strong></div>
            <div>
              <h2>让情绪，<br />有自己的形状。</h2>
              <p>以猫咪头套为核心符号，通过颜色与表情变化呈现不同情绪状态，延展角色设定、表情系统与视觉应用。</p>
            </div>
          </header>
          <figure className="ip-hero-art">
            <img src={`${basePath}/works/ip/04.png`} alt="情绪仔个人IP视觉延展" loading="lazy" />
          </figure>
          <div className="ip-process">
            <figure><img src={`${basePath}/works/ip/01.png`} alt="情绪仔角色概念介绍" loading="lazy" /><figcaption><span>01</span>角色概念</figcaption></figure>
            <figure><img src={`${basePath}/works/ip/02.png`} alt="情绪仔三视图与配色" loading="lazy" /><figcaption><span>02</span>角色设定</figcaption></figure>
            <figure><img src={`${basePath}/works/ip/03.png`} alt="情绪仔表情与形象延展" loading="lazy" /><figcaption><span>03</span>形象延展</figcaption></figure>
          </div>
          <div className="ip-3d-intro">
            <div className="ip-3d-side">
              <span>3D EXTENSION</span>
              <div className="ip-mascot" aria-label="趴着托下巴并眨眼的情绪仔">
                <img className="ip-mascot-open" src={`${basePath}/works/ip/mascot-chin-open-v3-white.png`} alt="" />
                <img className="ip-mascot-closed" src={`${basePath}/works/ip/mascot-chin-closed-v3-white.png`} alt="" />
              </div>
            </div>
            <div><h3>从平面角色，<br />走进真实世界。</h3><p>将原有角色语言转化为软胶玩具质感，并继续延展动作、表情和可落地的实物物料。</p></div>
          </div>
          <div className="ip-3d-gallery">
            <figure className="ip-3d-card ip-3d-card-actions">
              <img src={`${basePath}/works/ip/3d-actions.png`} alt="情绪仔五种3D动作造型" loading="lazy" />
              <figcaption><span>01 · 动作系统</span><strong>站立、挥手、奔跑、跳跃、坐姿</strong></figcaption>
            </figure>
            <ExpressionSystem />
            <figure className="ip-3d-card ip-3d-card-merch">
              <img src={`${basePath}/works/ip/3d-merch.png`} alt="情绪仔实物物料设计" loading="lazy" />
              <figcaption><span>03 · 实物物料</span><strong>手办、盲盒、徽章、钥匙扣与生活用品</strong></figcaption>
            </figure>
          </div>
          <a className="ip-more" href={`${basePath}/posters/#group-个人IP`}>查看完整项目 <span>↗</span></a>
        </section>

        <ServicesSection />

        <section className="section faq-section">
          <h2>常见问题</h2>
          <details open><summary>可以提供哪些设计服务？</summary><p>可承接品牌日常视觉、活动海报、文旅宣传物料、社交媒体配图、图片精修与短视频剪辑等工作。</p></details>
          <details><summary>是否可以完成从创意到交付的完整流程？</summary><p>可以。我能够独立完成需求梳理、主题构思、版式设计、素材处理、修改优化与最终交付。</p></details>
          <details><summary>目前可以接受哪些合作方式？</summary><p>目前常驻长沙，可沟通全职、长期协作、项目制与远程合作。</p></details>
        </section>

        <section className="contact-section" id="contact">
          <p>有一个想法，或一杯好茶？</p>
          <h2>一起聊聊下一次<br />值得被看见的设计。</h2>
          <a href="mailto:cavxxx@foxmail.com">发送邮件 <span>↗</span></a>
        </section>

        <footer><strong>许启征</strong><div><a href="mailto:cavxxx@foxmail.com">邮箱</a><a href="tel:19308455943">电话</a><a href="#top">返回顶部</a></div><span>保留所有权利</span></footer>
      </div>
    </main>
  );
}
