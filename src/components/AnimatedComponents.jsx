import React from 'react';
import { motion } from 'framer-motion';

// Fade in animation
export const FadeIn = ({ children, delay = 0, duration = 0.6, className = "" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// Slide up animation
export const SlideUp = ({ children, delay = 0, duration = 0.6, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// Slide down animation
export const SlideDown = ({ children, delay = 0, duration = 0.6, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// Scale in animation
export const ScaleIn = ({ children, delay = 0, duration = 0.6, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// Staggered container for multiple children
export const StaggerContainer = ({ children, staggerDelay = 0.1, className = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Staggered item
export const StaggerItem = ({ children, className = "" }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.6 }}
    className={className}
  >
    {children}
  </motion.div>
);

// Hover scale effect
export const HoverScale = ({ children, scale = 1.05, className = "" }) => (
  <motion.div
    whileHover={{ scale }}
    transition={{ duration: 0.2 }}
    className={className}
  >
    {children}
  </motion.div>
);

// Counter animation
export const AnimatedCounter = ({ value, duration = 2, className = "" }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      });
    });
    
    const element = document.querySelector(`[data-counter="${value}"]`);
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span data-counter={value} className={className}>
      {count.toLocaleString()}
    </span>
  );
};

// Progress bar animation
export const AnimatedProgressBar = ({ percentage, duration = 1, className = "" }) => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setWidth(percentage);
        }
      });
    });
    
    const element = document.querySelector(`[data-progress="${percentage}"]`);
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 ${className}`}>
      <motion.div
        data-progress={percentage}
        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration }}
      />
    </div>
  );
}; 