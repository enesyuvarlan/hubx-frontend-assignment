import { motion } from 'framer-motion';
import { FeaturesTitlesCardProps } from '../../types/props';
import { FeaturesButton } from '../ui/FeaturesButton';

export const FeaturesTitlesCard = ({
  title,
  cap,
  description,
}: FeaturesTitlesCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      <div className="flex flex-col gap-8 items-center lg:items-end">
        <div className="text-center lg:text-right">
          <h2 className="text-base tracking-[2px] font-extrabold text-primary mb-2">
            {title.toUpperCase()}
          </h2>
          <h1 className="text-[32px] text-textDark tracking-[0.8px] font-bold mb-4">
            {cap}
          </h1>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
        <div>
          <FeaturesButton />
        </div>
      </div>
    </motion.div>
  );
};
