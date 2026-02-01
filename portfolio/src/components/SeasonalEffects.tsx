import { useMemo } from 'react';
import './SeasonalEffects.css';

interface SeasonConfig {
  name: 'winter' | 'spring' | 'summer' | 'autumn';
  particleCount: number;
  particleType: string;
  description: string;
}

export default function SeasonalEffects() {
  const seasonConfig = useMemo(() => {
    const month = new Date().getMonth();

    if (month === 11 || month === 0 || month === 1) {
      // December, January, February - Winter
      return {
        name: 'winter',
        particleCount: 50,
        particleType: 'snowflake',
        description: 'winter'
      } as SeasonConfig;
    } else if (month >= 2 && month <= 4) {
      // March, April, May - Spring
      return {
        name: 'spring',
        particleCount: 30,
        particleType: 'petal',
        description: 'spring'
      } as SeasonConfig;
    } else if (month >= 5 && month <= 7) {
      // June, July, August - Summer
      return {
        name: 'summer',
        particleCount: 20,
        particleType: 'firefly',
        description: 'summer'
      } as SeasonConfig;
    } else {
      // September, October, November - Autumn
      return {
        name: 'autumn',
        particleCount: 40,
        particleType: 'leaf',
        description: 'autumn'
      } as SeasonConfig;
    }
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: seasonConfig.particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 10 + Math.random() * 10,
      opacity: 0.3 + Math.random() * 0.5
    }));
  }, [seasonConfig.particleCount]);

  return (
    <div className={`seasonal-effects seasonal-${seasonConfig.name}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle ${seasonConfig.particleType}`}
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            opacity: particle.opacity
          }}
        >
          {seasonConfig.particleType === 'snowflake' && '❄'}
          {seasonConfig.particleType === 'petal' && '🌸'}
          {seasonConfig.particleType === 'firefly' && '✨'}
          {seasonConfig.particleType === 'leaf' && '🍂'}
        </div>
      ))}
    </div>
  );
}
