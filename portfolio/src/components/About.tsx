import { useRef, useEffect, useState } from 'react'
import './About.css'

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [containerVisible, setContainerVisible] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContainerVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (textRef.current) observer.observe(textRef.current)
    return () => {
      if (textRef.current) observer.unobserve(textRef.current)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (cardsRef.current) observer.observe(cardsRef.current)
    return () => {
      if (cardsRef.current) observer.unobserve(cardsRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className={`about-container scroll-animate ${containerVisible ? 'is-visible' : ''}`}>
      {/* Geometric Shapes */}
      <div className="about-shape circle-1"></div>
      <div className="about-shape square-1"></div>
      <div className="about-shape circle-2"></div>

      <div className="section-header">
        <h2>About Me</h2>
        <p>Get to know more about my background, education, and passion for technology</p>
      </div>

      <div className="about-content">
        <div ref={textRef} className={`about-text scroll-animate-left ${textVisible ? 'is-visible' : ''}`}>
          <h3>Hello! I'm Mark Lennard Torres</h3>
          <p>
            I'm a dedicated BSIT student with a passion for technology and software development. 
            My journey in Information Technology has been filled with exciting challenges and continuous 
            learning opportunities.
          </p>
          <p>
            I specialize in multiple programming languages including HTML, CSS, JavaScript, Java, C++, Python, 
            and database management with MySQL. I enjoy creating solutions that are not only functional but 
            also user-friendly and efficient.
          </p>
          <p>
            When I'm not coding, I'm exploring new technologies, working on personal projects, or 
            collaborating with fellow students on innovative ideas. I believe in the power of technology 
            to solve real-world problems and make a positive impact.
          </p>
          <div className="about-section">
            <h4>What I'm currently working on:</h4>
            <ul>
              <li>Advanced web development projects</li>
              <li>Database design and optimization</li>
            </ul>
          </div>
        </div>

        <div ref={cardsRef} className={`about-cards scroll-animate ${cardsVisible ? 'is-visible' : ''}`}>
          <div className="info-card education">
            <div className="card-icon">🎓</div>
            <h4>Education</h4>
            <p>Currently pursuing Bachelor of Science in Information Technology</p>
            <p className="card-detail">Focused on software development, database management, and system analysis</p>
          </div>

          <div className="info-card development">
            <div className="card-icon">💻</div>
            <h4>Development</h4>
            <p>Passionate about creating efficient and user-friendly applications</p>
            <p className="card-detail">Experience with multiple programming languages and frameworks</p>
          </div>

          <div className="info-card goals">
            <div className="card-icon">🎯</div>
            <h4>Goals</h4>
            <p>Aspiring to become a full-stack developer with expertise in modern technologies</p>
            <p className="card-detail">Building innovative solutions and contributing to tech community</p>
          </div>

          <div className="info-card achievements">
            <div className="card-icon">🏆</div>
            <h4>Achievements</h4>
            <p>Excellent academic performance and hands-on project experience</p>
            <p className="card-detail">Demonstrated expertise in software development lifecycle</p>
          </div>
        </div>
      </div>
    </div>
  )
}
