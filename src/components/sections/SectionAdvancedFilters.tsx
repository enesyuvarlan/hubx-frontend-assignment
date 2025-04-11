import PhoneImage from '../../assets/mock/section-4/phone-4.svg';
import Filter1Icon from '../../assets/mock/section-4/filter-1.svg';
import Filter2Icon from '../../assets/mock/section-4/filter-2.svg';
import { motion } from 'framer-motion';
import { PhoneLayout } from './PhoneLayout';
import { motionVariantsFilterItem } from '../../data/motion.Data';

export const SectionAdvancedFilters = ({}) => {
  return (
    <PhoneLayout phoneImage={PhoneImage}>
      <motion.img
        src={Filter1Icon}
        alt="Filter 1"
        variants={motionVariantsFilterItem}
        initial="hidden"
        animate="visible"
        custom={0}
        className="absolute left-4 top-16 sm:top-24 md:top-28 md:w-[42px] w-[28px]"
      />

      <motion.img
        src={Filter2Icon}
        alt="Filter 2"
        variants={motionVariantsFilterItem}
        initial="hidden"
        animate="visible"
        custom={1}
        className="absolute right-4 top-16 sm:top-24 md:top-28 md:w-[42px] w-[28px]"
      />
    </PhoneLayout>
  );
};
