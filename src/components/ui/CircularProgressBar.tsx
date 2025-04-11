import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CircularProgressBarProps } from '../../types/props';

export function CircularProgressBar({
  size = 120,
  thickness = 8,
  strokeClassName,
  pathClassName,
  strokeColor,
  pathColor,
  duration = 1,
  isActive = false,
  children,
}: CircularProgressBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setIsFocused(isActive);
  }, [isActive]);

  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;

  const handleFocus = () => {
    if (!isActive) {
      setIsFocused(true);
    }
  };

  const handleBlur = () => {
    if (!isActive) {
      setIsFocused(false);
    }
  };

  const getStrokeStyle = () => {
    if (strokeColor) return { stroke: strokeColor };
    return {};
  };

  const getPathStyle = () => {
    if (pathColor) return { stroke: pathColor };
    return {};
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size}>
        <circle
          className={strokeClassName}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={thickness}
          style={getStrokeStyle()}
        />

        <motion.circle
          className={pathClassName}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={thickness}
          strokeDasharray={circumference}
          initial={{
            strokeDashoffset: circumference,
            rotate: -90,
          }}
          animate={{
            strokeDashoffset: isFocused ? 0 : circumference,
            rotate: isFocused ? -90 : 270,
          }}
          transition={{
            duration: duration,
            ease: 'linear',
          }}
          strokeLinecap="round"
          style={{ transformOrigin: 'center', ...getPathStyle() }}
        />
      </svg>

      <button
        className="absolute inset-0 flex items-center justify-center focus:outline-none"
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {children}
      </button>
    </div>
  );
}
