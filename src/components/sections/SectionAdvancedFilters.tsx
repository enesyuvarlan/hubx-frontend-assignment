import { ReactComponent as PhoneImage } from '../../assets/mock/section-4/phone-4.svg';
import Filter1Icon from '../../assets/mock/section-4/filter-1.svg';
import Filter2Icon from '../../assets/mock/section-4/filter-2.svg';
import { motion } from 'framer-motion';
import { motionVariantsFilterItem } from '../../data/motion.Data';

export const SectionAdvancedFilters = ({}) => {
  const filterItems = [
    {
      src: Filter1Icon,
      alt: 'Filter 1',
      position: 'left',
      custom: 0,
    },
    {
      src: Filter2Icon,
      alt: 'Filter 2',
      position: 'right',
      custom: 1,
    },
  ];
  return (
    <div className="relative flex justify-center flex-shrink-0">
      <PhoneImage className="w-[230px] sm:w-[300px] md:w-[366px] h-auto mx-10" />
      {filterItems.map(({ src, alt, position, custom }, index) => (
        <motion.img
          key={index}
          src={src}
          alt={alt}
          variants={motionVariantsFilterItem}
          initial="hidden"
          animate="visible"
          custom={custom}
          className={`absolute ${position}-4 top-16 sm:top-24 md:top-28 md:w-[42px] w-[28px]`}
        />
      ))}
    </div>
  );
};
