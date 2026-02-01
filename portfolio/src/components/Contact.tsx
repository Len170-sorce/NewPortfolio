import { useState, useRef, useEffect } from 'react'
import './Contact.css'

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [containerVisible, setContainerVisible] = useState(false)
  const [formVisible, setFormVisible] = useState(false)

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
    const formObs = createObserver(setFormVisible, formRef as React.RefObject<HTMLElement>)

    return () => {
      if (containerRef.current) containerObs.unobserve(containerRef.current)
      if (formRef.current) formObs.unobserve(formRef.current)
    }
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div ref={containerRef} className={`contact-container scroll-animate ${containerVisible ? 'is-visible' : ''}`}>
      <div className="section-header">
        <h2>Get In Touch</h2>
        <p>Have a question or ready to collaborate? I'd love to hear from you.</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-cards">
          <div className="contact-card">
            <div className="card-icon">✉️</div>
            <h3>Email</h3>
            <p>marklennardtorres17@email.com</p>
          </div>

          <div className="contact-card">
            <div className="card-icon">📱</div>
            <h3>Phone</h3>
            <p>+63 956 521 5512</p>
          </div>

          <div className="contact-card">
            <div className="card-icon">📍</div>
            <h3>Location</h3>
            <p>Nueva Ecija, Philippines</p>
          </div>
        </div>

        <form ref={formRef} className={`contact-form scroll-animate-right ${formVisible ? 'is-visible' : ''}`} onSubmit={handleSubmit}>
          {submitted && <div className="success-message">✓ Message sent successfully!</div>}
          
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>

          <div className="social-section">
            <p>Follow Me</p>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2s9 5 20 0a10.66 10.66 0 0 1-10-5.5"></path>
                </svg>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
