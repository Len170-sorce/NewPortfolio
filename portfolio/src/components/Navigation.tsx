import './Navigation.css'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <img src="/src/assets/MLT-BG.png" alt="MLT Logo" className="logo" />
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('home')
              }}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('skills')
              }}
              className={activeSection === 'skills' ? 'active' : ''}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('projects')
              }}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
