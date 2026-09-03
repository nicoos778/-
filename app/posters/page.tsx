import PosterVisual from '../PosterVisual';
import { posterGroups, posters } from '../posters';

export default function PostersPage() {
  return (
    <main className="poster-page">
      <header className="poster-page-header">
        <a href="/#works">← 返回作品</a>
        <strong>许启征</strong>
        <span>全部作品 · {posters.length}</span>
      </header>
      <section className="poster-page-intro">
        <p>作品总览</p>
        <h1>所有视觉，<br />在这里完整展开。</h1>
      </section>
      {posterGroups.map((group) => (
        <section className={`poster-group poster-group-${group.slug}`} key={group.title} aria-labelledby={`group-${group.title}`}>
          <header className="poster-group-heading">
            <h2 id={`group-${group.title}`}>{group.title}</h2>
            <span>{String(group.items.length).padStart(2, '0')}</span>
          </header>
          <div className="poster-wall">
            {group.items.map((poster, index) => (
              <article className="poster-item" key={poster.id}>
                <PosterVisual {...poster} eager={group.title === '湘茶' && index < 3} />
              </article>
            ))}
          </div>
        </section>
      ))}
      <footer className="poster-page-footer"><span>许启征 · 视觉设计师</span><a href="mailto:cavxxx@foxmail.com">联系合作 ↗</a></footer>
    </main>
  );
}
