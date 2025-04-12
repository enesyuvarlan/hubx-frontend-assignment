import { AnimatePresence, motion } from 'framer-motion';
import { FeaturesButton } from '../ui/FeaturesButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores/store';
import { sectionsData } from '../../data/sectionsData';

export const FeaturesTitlesCard = () => {
  const activeSectionId = useSelector(
    (state: RootState) => state.activeSection.activeSection,
  );

  const activeSection = sectionsData.find(
    (section) => section.id === activeSectionId,
  );
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeSectionId}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.3,
          },
        }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        <div className="flex flex-col gap-8 items-center lg:items-end">
          <div className="text-center lg:text-right">
            <h2 className="text-base tracking-[2px] font-extrabold text-primary mb-2">
              {activeSection?.title.toUpperCase()}
            </h2>
            <h1 className="text-[32px] text-textDark tracking-[0.8px] font-bold mb-4">
              {activeSection?.cap}
            </h1>
            <p className="text-sm text-gray-700">
              {activeSection?.description}
            </p>
          </div>
          <div>
            <FeaturesButton />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
