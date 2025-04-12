import { ReactComponent as PhoneImage } from '../../assets/mock/section-2/phone-2.svg';
import SignIcon from '../../assets/mock/section-2/sign.svg';
import Stamp from '../../assets/mock/section-2/stamp.svg';
import { motion } from 'framer-motion';
import { PhoneLayout } from './PhoneLayout';
import { motionVariantsSignStampItem } from '../../data/motion.Data';

export const SectionSignStamp = ({}) => {
  return (
    <PhoneLayout phoneImage={PhoneImage}>
      <motion.div
        variants={motionVariantsSignStampItem}
        initial="hidden"
        animate="visible"
        custom={0}
        className="absolute -left-4 md:-left-12 top-40 sm:top-52 md:top-64 w-[140px] sm:w-[175px] md:w-[216px] h-auto"
      >
        <img src={SignIcon} alt="Sign Icon" />
      </motion.div>

      <motion.div
        variants={motionVariantsSignStampItem}
        initial="hidden"
        animate="visible"
        custom={1}
        className="absolute -right-4 sm:-right-8 md:-right-12 top-24 sm:top-28 md:top-32 w-[142px] sm:w-[175px] md:w-[216px]  h-auto"
      >
        <img src={Stamp} alt="Stamp Icon" />
      </motion.div>
    </PhoneLayout>
  );
};
