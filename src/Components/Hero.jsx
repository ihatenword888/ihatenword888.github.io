import { DeveloperInfo } from "@/Info"

function Hero() {
    return (
        <section className="panel hero" id="about">
            <div className="hero-copy">
                <p className="title">Developer Portfolio</p>
                <h1>{DeveloperInfo.DeveloperName}</h1>
                <p className="lead">I've been messing around with code for a while, mostly because I wanted to make games. Still learning, but that's the fun part.</p>
                <div className="hero-actions">
                    <button className="primary-button">View platforms</button>
                    <button className="secondary-button">Contact me</button>
                </div>
                <div className="social-links">
                    <a className="social-link" href={DeveloperInfo.DeveloperSocials.Github} target="_blank" rel="noreferrer"><i className="devicon-github-original" aria-hidden="true"></i><span>Github</span></a>
                </div>
            </div>
            <div className="hero-side">
                <div className="stat-grid">
                    <article className="stat-card">
                        <strong>7+ years</strong>
                        <p>I started making games years ago and kept building from there.</p>
                    </article>
                    <article className="stat-card">
                        <strong>Games + backend</strong>
                        <p>I mostly like working on games, tools, and backend-related stuff.</p>
                    </article>
                    <article className="stat-card">
                        <strong>Europe</strong>
                        <p>Based in Europe and usually building from my own setup at home.</p>
                    </article>
                    <article className="stat-card">
                        <strong>Open to projects</strong>
                        <p>I am open to projects, collaborations, and interesting ideas.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Hero