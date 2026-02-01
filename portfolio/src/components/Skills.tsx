import { useRef, useEffect, useState } from 'react'
import './Skills.css'

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const technicalRef = useRef<HTMLDivElement>(null)
  const softRef = useRef<HTMLDivElement>(null)
  const [containerVisible, setContainerVisible] = useState(false)
  const [technicalVisible, setTechnicalVisible] = useState(false)
  const [softVisible, setSoftVisible] = useState(false)

  useEffect(() => {
    const createObserver = (setVisible: (v: boolean) => void, ref: React.RefObject<HTMLElement>) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true)
          }
        },
        { threshold: 0.1 }
      )

      if (ref.current) observer.observe(ref.current)
      return observer
    }

    const containerObs = createObserver(setContainerVisible, containerRef as React.RefObject<HTMLElement>)
    const technicalObs = createObserver(setTechnicalVisible, technicalRef as React.RefObject<HTMLElement>)
    const softObs = createObserver(setSoftVisible, softRef as React.RefObject<HTMLElement>)

    return () => {
      if (containerRef.current) containerObs.unobserve(containerRef.current)
      if (technicalRef.current) technicalObs.unobserve(technicalRef.current)
      if (softRef.current) softObs.unobserve(softRef.current)
    }
  }, [])

  const technicalSkills = [
    { name: 'Python', icon: '🐍' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'HTML', icon: '🏷️' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Java', icon: '☕' },
    { name: 'C++', icon: '⚙️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🌊' },
  ]

  const softSkills = [
    { name: 'Communication', icon: '💬', description: 'Clear and effective communication across teams' },
    { name: 'Problem-Solving', icon: '💡', description: 'Analytical thinking and creative solutions' },
    { name: 'Teamwork', icon: '👥', description: 'Collaborative work and team coordination' },
    { name: 'Leadership', icon: '🎯', description: 'Guiding teams and driving project success' },
    { name: 'Adaptability', icon: '⚡', description: 'Quick learning and flexibility in new environments' },
    { name: 'Creativity', icon: '🧠', description: 'Innovative thinking and creative problem solving' },
  ]

  return (
    <div ref={containerRef} className={`skills-container scroll-animate ${containerVisible ? 'is-visible' : ''}`}>
      <div className="section-header">
        <h2>Technical Skills</h2>
        <p>Programming languages and technologies I work with</p>
      </div>

      <div ref={technicalRef} className={`technical-skills scroll-animate-left ${technicalVisible ? 'is-visible' : ''}`}>
        <div className="skills-carousel">
          {/* Duplicate the array for continuous loop effect */}
          {[...technicalSkills, ...technicalSkills].map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-header" style={{ marginTop: '4rem' }}>
        <h2>Soft Skills</h2>
        <p>Personal and interpersonal skills that drive success</p>
      </div>

      <div ref={softRef} className={`soft-skills scroll-animate ${softVisible ? 'is-visible' : ''}`}>
        {softSkills.map((skill, index) => (
          <div key={index} className="soft-skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="soft-skill-icon">{skill.icon}</div>
            <h4>{skill.name}</h4>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
