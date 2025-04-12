import { ReactComponent as PhoneImage } from '../../assets/mock/section-4/phone-4.svg';
import Filter1Icon from '../../assets/mock/section-4/filter-1.svg';
import Filter2Icon from '../../assets/mock/section-4/filter-2.svg';
import { motion } from 'framer-motion';
import { motionVariantsFilterItem } from '../../data/motion.Data';
import { PhoneImageIcon } from '../ui/PhoneImageIcon';

export const SectionAdvancedFilters = ({}) => {
  const filterItems = [
    {
      src: Filter1Icon,
      alt: 'Filter 1',
      position: 'left-[26px] sm:left-4',
      custom: 0,
    },
    {
      src: Filter2Icon,
      alt: 'Filter 2',
      position: 'right-[26px] sm:right-4',
      custom: 1,
    },
  ];
  return (
    <div className="relative flex justify-center flex-shrink-0">
      <PhoneImageIcon icon={PhoneImage} />
      {filterItems.map(({ src, alt, position, custom }, index) => (
        <motion.img
          key={index}
          src={src}
          alt={alt}
          variants={motionVariantsFilterItem}
          initial="hidden"
          animate="visible"
          custom={custom}
          className={`absolute ${position} top-[52px] sm:top-[74px] md:top-[106px] md:w-[42px] sm:w-[28px] w-[20px]`}
        />
      ))}
    </div>
  );
};
