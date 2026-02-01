import { useState, useEffect, useRef } from 'react';
import LenImg from "../assets/Len.png";
import './Hero.css'

export default function Hero() {
  const [spiderAngle, setSpiderAngle] = useState(0);
  const [webStretch, setWebStretch] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const angleRef = useRef(0);
  const velocityRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const webAnchorRef = useRef({ x: 0, y: 0 });

  const simulatePhysics = () => {
    // Restore force pulling back to center
    const restoreForce = -angleRef.current * 0.08;
    
    // Apply damping
    velocityRef.current *= 0.95;
    
    // Add restore force to velocity
    velocityRef.current += restoreForce;
    
    // Update angle
    angleRef.current += velocityRef.current;
    
    // Update the state
    setSpiderAngle(angleRef.current);
    
    // Check if we should stop
    if (Math.abs(angleRef.current) < 0.05 && Math.abs(velocityRef.current) < 0.01) {
      angleRef.current = 0;
      velocityRef.current = 0;
      setSpiderAngle(0);
      setWebStretch(0);
      isAnimatingRef.current = false;
      return;
    }
    
    animationRef.current = requestAnimationFrame(simulatePhysics);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    dragStartYRef.current = e.clientY;
    
    // Get web anchor position (top-right of screen, roughly)
    const webElement = (e.currentTarget as HTMLElement).getBoundingClientRect();
    webAnchorRef.current = {
      x: webElement.left + webElement.width / 2,
      y: webElement.top + 50
    };
    
    velocityRef.current = 0;
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      isAnimatingRef.current = false;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const currentX = e.clientX;
    const currentY = e.clientY;
    
    // Calculate distance from anchor point to cursor
    const deltaX = currentX - webAnchorRef.current.x;
    const deltaY = currentY - webAnchorRef.current.y;
    
    // Calculate angle based on X position
    const dragAngle = (deltaX) * -0.3;
    angleRef.current = dragAngle;
    
    // Calculate total stretch distance from anchor
    const totalDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const baseDistance = 220;
    const stretch = Math.max(0, totalDistance - baseDistance);
    
    setWebStretch(stretch);
    setSpiderAngle(dragAngle);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Calculate velocity from drag angle
    velocityRef.current = angleRef.current * 0.1;
    
    // Start physics simulation
    isAnimatingRef.current = true;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    animationRef.current = requestAnimationFrame(simulatePhysics);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove as any);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove as any);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

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

      {/* Spider with Web */}
      <div className="spider-web" onMouseDown={handleMouseDown}>
        <div 
          className="web-container" 
          style={{ 
            transform: `rotate(${spiderAngle}deg)`,
            '--web-stretch': `${webStretch}px`
          } as React.CSSProperties & { '--web-stretch': string }}
        >
          <div className="web-string"></div>
          <div className="spider">
            {/* Head/Cephalothorax */}
            <div className="spider-head"></div>
            {/* Abdomen */}
            <div className="spider-abdomen"></div>
            {/* Eyes */}
            <div className="spider-eye eye-left"></div>
            <div className="spider-eye eye-right"></div>
            {/* Front Left Legs */}
            <div className="spider-leg leg-fl1"></div>
            <div className="spider-leg leg-fl2"></div>
            {/* Front Right Legs */}
            <div className="spider-leg leg-fr1"></div>
            <div className="spider-leg leg-fr2"></div>
            {/* Back Left Legs */}
            <div className="spider-leg leg-bl1"></div>
            <div className="spider-leg leg-bl2"></div>
            {/* Back Right Legs */}
            <div className="spider-leg leg-br1"></div>
            <div className="spider-leg leg-br2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
