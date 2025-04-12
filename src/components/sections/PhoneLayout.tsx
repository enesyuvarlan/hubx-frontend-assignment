import { AnimatePresence, motion } from 'framer-motion';
import { motionPhoneAnimation } from '../../data/motion.Data';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores/store';
import { sectionsData } from '../../data/sectionsData';

export const PhoneLayout = () => {
  const activeState = useSelector((state: RootState) => state.activeSection);
  const activeSection = sectionsData.find(
    (section) => section.id === activeState.activeSection,
  );

  const ActiveAnimation = activeSection?.section;
  return (
    <div className="flex flex-col items-center justify-center mx-auto overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection?.id}
          initial={motionPhoneAnimation.initial}
          animate={motionPhoneAnimation.animate}
          transition={motionPhoneAnimation.transition}
          exit={motionPhoneAnimation.exit}
        >
          {ActiveAnimation && <ActiveAnimation />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
