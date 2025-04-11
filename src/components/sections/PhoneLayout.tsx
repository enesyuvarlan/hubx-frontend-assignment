import { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneLayoutProps } from '../../types/props';
import { motionPhoneAnimation } from '../../data/motion.Data';

export const PhoneLayout = ({ children, phoneImage }: PhoneLayoutProps) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center mx-auto overflow-hidden">
      <motion.div
        initial={motionPhoneAnimation.initial}
        animate={motionPhoneAnimation.animate}
        transition={motionPhoneAnimation.transition}
      >
        <div className="relative flex justify-center flex-shrink-0">
          {!loaded && (
            <div className="w-[230px] sm:w-[300px] md:w-[366px] h-[auto] mx-10 bg-gray-300 animate-pulse" />
          )}
          <img
            src={phoneImage}
            alt="Document Scanner"
            className="w-[230px] sm:w-[300px] md:w-[366px] h-auto mx-10"
            onLoad={() => setLoaded(true)}
          />
          {children}
        </div>
      </motion.div>
    </div>
  );
};
