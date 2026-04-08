import { about } from '../config'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <p className="section-label">about</p>
      <h2 className="section-heading">{about.heading}</h2>

      <div className="about__content">
        <div className="about__text">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="about__para">{p}</p>
          ))}

          {about.resumeLink && (
            <a
              href={about.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost about__resume"
            >
              view resume ↗
            </a>
          )}
        </div>

        {/* decorative block — purely visual */}
        <div className="about__deco" aria-hidden="true">
          <div className="about__deco-inner">
            <span className="about__deco-label">est.</span>
            <span className="about__deco-year">2020</span>
          </div>
        </div>
      </div>
    </section>
  )
}
