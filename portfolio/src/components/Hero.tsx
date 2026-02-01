import LenImg from "../assets/Len.png";
import './Hero.css'

export default function Hero() {
  return (
    <div className="hero">
      {/* Animated Background Objects */}
      <div className="bg-object orbit-1"></div>
      <div className="bg-object orbit-2"></div>
      <div className="bg-object orbit-3"></div>
      <div className="bg-object orbit-4"></div>
      <div className="bg-object orbit-5"></div>

      {/* Animated Geometric Shapes */}
      <div className="geo-shape circle-1"></div>
      <div className="geo-shape square-1"></div>
      <div className="geo-shape circle-2"></div>
      <div className="geo-shape triangle-1"></div>
      <div className="geo-shape square-2"></div>
      <div className="geo-shape circle-3"></div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Mark Lennard</span>
          </h1>
          <p className="hero-subtitle">BSIT Student & Future Software Developer</p>
          <p className="hero-description">THIS PORTFOLIO IS ONLY PROTOTYPE</p>

          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h3z"></path>
              </svg>
            </a>
            <a href="mailto:marklennardtorres17@email.com" className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-image">
         <div className="profile-circle">
             <img
                src={LenImg}
                alt="Mark Lennard Torres"
                className="profile-image"
             />
            </div>
        </div>
      </div>
    </div>
  )
}
