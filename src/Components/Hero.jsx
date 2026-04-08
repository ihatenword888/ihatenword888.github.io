import { site } from '../config'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      {/* subtle grid overlay */}
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__inner">
        <p className="hero__eyebrow">hey —</p>
        <h1 className="hero__heading">
          {site.tagline}
          <span className="hero__dot">.</span>
        </h1>
        <p className="hero__description">{site.description}</p>

        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">see my work</a>
          <a href="#contact"  className="btn btn--ghost">get in touch</a>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <span className="hero__scroll-line" />
          <span className="hero__scroll-label">scroll</span>
        </div>
      </div>
    </section>
  )
}
