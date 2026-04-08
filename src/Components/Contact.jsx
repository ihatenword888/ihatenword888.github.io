import { contact, site } from '../config'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <p className="section-label">contact</p>
      <h2 className="section-heading">let's talk.</h2>

      <div className="contact__inner">
        <p className="contact__blurb">
          got a project idea, a question, or just want to say hi?
          my inbox is open.
        </p>

        <a
          href={`mailto:${contact.email}`}
          className="contact__email"
        >
          {contact.email}
        </a>

        <div className="contact__socials">
          {contact.socials.map(social => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <footer className="contact__footer">
        <p className="contact__footer-text">
          built by{' '}
          <span className="contact__footer-name">{site.name}</span>
          {' '}with react + vite
        </p>
      </footer>
    </section>
  )
}
