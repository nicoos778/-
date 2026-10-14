import { basePath } from './posters';

const boards = [
  '品牌海报',
  '社区商业',
  '住宅推广',
  '节点营销',
  '家庭场景',
  '横幅物料',
  '商业街区',
  '社区商铺',
  '生活方式',
  '品质住宅',
];

export default function RealEstateShowcase() {
  return (
    <section className="real-estate-showcase" id="real-estate" aria-labelledby="real-estate-title">
      <header className="real-estate-heading">
        <div className="real-estate-kicker">
          <span>REAL ESTATE VISUALS · 03</span>
          <strong>地产项目视觉</strong>
        </div>
        <div>
          <h3 id="real-estate-title">房地产视觉</h3>
          <p>参与多个地产项目视觉执行，覆盖住宅推广、社区商业、节点海报与横幅物料，呈现多项目并行下的快速落地能力。</p>
        </div>
        <div className="real-estate-tags" aria-label="项目类型">
          <span>海报设计</span>
          <span>社区商业</span>
          <span>横幅物料</span>
        </div>
      </header>

      <div className="real-estate-rail" aria-label="房地产视觉作品，横向滑动浏览">
        {boards.map((label, index) => (
          <figure key={label}>
            <img
              src={`${basePath}/works/real-estate/${String(index + 1).padStart(2, '0')}.webp`}
              alt={`房地产视觉作品集页面：${label}`}
              loading="lazy"
            />
            <figcaption>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{label}</strong>
            </figcaption>
          </figure>
        ))}
      </div>

      <footer>
        <span>10 组视觉页面</span>
        <span>左右滑动浏览</span>
      </footer>
    </section>
  );
}
