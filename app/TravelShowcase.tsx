import { basePath } from './posters';

const previews = [
  { src: '/works/travel-series/04-qinghai.webp', place: '青海', note: '西北环线' },
  { src: '/works/travel-series/03-dalian.webp', place: '大连', note: '滨海赏花' },
  { src: '/works/travel-series/11-sanya-detail.webp', place: '三亚', note: '海岛度假' },
  { src: '/works/travel-series/14-snow.webp', place: '雪乡', note: '冬季线路' },
];

export default function TravelShowcase() {
  return (
    <section className="travel-showcase" aria-labelledby="travel-showcase-title">
      <header className="travel-showcase-heading">
        <div><span>SELECTED WORKS · 02</span><h3 id="travel-showcase-title">文旅视觉</h3></div>
        <div>
          <p>以目的地气质为线索，将线路卖点、价格机制与活动福利整理成可持续延展的旅行传播视觉。</p>
          <a href={`${basePath}/travel-campaign/`}>查看文旅项目 <i>↗</i></a>
        </div>
      </header>
      <a className="travel-panorama" href={`${basePath}/travel-campaign/`} aria-label="查看文旅视觉完整项目">
        {previews.map((preview, index) => (
          <figure key={preview.src}>
            <img src={`${basePath}${preview.src}`} alt="" loading="lazy" />
            <figcaption><span>{String(index + 1).padStart(2, '0')}</span><strong>{preview.place}</strong><small>{preview.note}</small></figcaption>
          </figure>
        ))}
      </a>
      <footer><span>07 组线路项目</span><span>16 张活动视觉</span><span>主视觉 · 详情长图 · 节日节点</span></footer>
    </section>
  );
}
