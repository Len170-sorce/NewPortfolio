import { useRef, useEffect, useState } from 'react'
import './Projects.css'

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [containerVisible, setContainerVisible] = useState(false)
  const [gridVisible, setGridVisible] = useState(false)

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
          setGridVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (gridRef.current) observer.observe(gridRef.current)
    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current)
    }
  }, [])

  const projects = [
    {
      title: 'EduConnect',
      description: 'Built for fragrance enthusiasts, Parfum Perspective offers a seamless online experience for discovering and purchasing perfumes through a modern e-commerce platform.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      image: '/src/assets/Educonnect-MK.png',
    },
    {
      title: 'Baranggay Management System',
      description: 'Designed to streamline local governance, the Barangay Management System manages barangay records using a MySQL database with real-time updates and full CRUD functionality.',
      technologies: ['MySQL','HTML', 'CSS', 'JavaScript', 'CRUD'],
      image: '💾',
    },
    {
      title: 'Parfum Perspective',
      description: 'Built for fragrance enthusiasts, Parfum Perspective offers a seamless online experience for discovering and purchasing perfumes through a modern e-commerce platform.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/src/assets/Parfum-MK.png',
    },
    {
      title: 'Genshin Log In UI',
      description: 'A Genshin Impact-inspired login UI designed in Figma, featuring a clean, immersive interface with character-themed visuals and intuitive input fields for a seamless user login experience.',
      technologies: ['Figma'],
      image: '/src/assets/Genshin-MK.jpg',
    },
    {
      title: 'My Portfolio',
      description: 'A modern and responsive portfolio built with React and TypeScript, showcasing my projects, skills, and experience with a focus on clean UI, performance, and maintainable code.',
      technologies: ['React', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
      image: '/src/assets/Port-MK.png',
    },
    {
      title: 'Task Management System',
      description: 'An efficient task management tool with collaborative features. Allows teams to create projects, assign tasks, track progress, and communicate seamlessly in real-time.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase', 'Tailwind CSS'],
      image: '✅',
    },
  ]

  return (
    <div ref={containerRef} className={`projects-container scroll-animate ${containerVisible ? 'is-visible' : ''}`}>
      {/* Geometric Shapes */}
      <div className="projects-shape circle-1"></div>
      <div className="projects-shape circle-2"></div>
      <div className="projects-shape triangle"></div>

      <div className="section-header">
        <h2>My Projects</h2>
        <p>Some of my recent work</p>
      </div>

      <div ref={gridRef} className={`projects-grid scroll-animate ${gridVisible ? 'is-visible' : ''}`}>
        {projects.map((project, index) => (
          <div key={index} className="project-card" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="project-image">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-overlay">
                <button className="view-btn">View Project</button>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
