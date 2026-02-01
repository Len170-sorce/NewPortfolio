import { useMemo } from 'react';
import './SeasonalEffects.css';

interface SeasonConfig {
  name: 'winter' | 'spring' | 'summer' | 'autumn' | 'valentines' | 'halloween' | 'christmas' | 'easter' | 'newyear';
  particleCount: number;
  particleType: string;
  description: string;
}

export default function SeasonalEffects() {
  const seasonConfig = useMemo(() => {
    const now = new Date();
    const month = now.getMonth();
    const date = now.getDate();

    // Special Events/Holidays
    if (month === 1 && date >= 1 && date <= 28) {
      // February - Valentine's Day
      return {
        name: 'valentines',
        particleCount: 35,
        particleType: 'heart',
        description: 'Valentine\'s Day'
      } as SeasonConfig;
    } else if (month === 11 && date >= 15) {
      // December 15-31 - Christmas
      return {
        name: 'christmas',
        particleCount: 50,
        particleType: 'snowflake',
        description: 'Christmas'
      } as SeasonConfig;
    } else if (month === 10 && date >= 20) {
      // October 20-31 - Halloween
      return {
        name: 'halloween',
        particleCount: 40,
        particleType: 'ghost',
        description: 'Halloween'
      } as SeasonConfig;
    } else if (month === 0 && date <= 7) {
      // January 1-7 - New Year
      return {
        name: 'newyear',
        particleCount: 30,
        particleType: 'confetti',
        description: 'New Year'
      } as SeasonConfig;
    } else if (month === 11 && date <= 14) {
      // December 1-14 - Early Christmas
      return {
        name: 'christmas',
        particleCount: 40,
        particleType: 'snowflake',
        description: 'Christmas Season'
      } as SeasonConfig;
    }

    // Regular Seasons
    if (month === 11 || month === 0 || month === 1) {
      // December, January, February - Cool Dry Season
      return {
        name: 'winter',
        particleCount: 30,
        particleType: 'firefly',
        description: 'Cool Dry Season'
      } as SeasonConfig;
    } else if (month >= 2 && month <= 4) {
      // March, April, May - Hot Dry Season
      return {
        name: 'summer',
        particleCount: 25,
        particleType: 'firefly',
        description: 'Hot Dry Season'
      } as SeasonConfig;
    } else {
      // June - November - Rainy Season
      return {
        name: 'autumn',
        particleCount: 45,
        particleType: 'leaf',
        description: 'Rainy Season'
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
          {seasonConfig.particleType === 'firefly' && '✨'}
          {seasonConfig.particleType === 'leaf' && '🌪'}
          {seasonConfig.particleType === 'heart' && '❤'}
          {seasonConfig.particleType === 'ghost' && '👻'}
          {seasonConfig.particleType === 'confetti' && ['🎉', '🎊', '✨'][Math.floor(Math.random() * 3)]}
        </div>
      ))}
    </div>
  );
}
