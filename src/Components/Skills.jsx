import { skills } from '../config'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <p className="section-label">skills</p>
      <h2 className="section-heading">what i work with.</h2>

      <div className="skills__groups">
        {skills.groups.map((group, i) => (
          <div key={i} className="skills__group">
            <p className="skills__group-label">{group.label}</p>
            <ul className="skills__list">
              {group.items.map(item => (
                <li key={item} className="skills__item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
