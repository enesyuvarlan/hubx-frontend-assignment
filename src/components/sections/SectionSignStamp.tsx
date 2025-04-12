import { ReactComponent as PhoneImage } from '../../assets/mock/section-2/phone-2.svg';
import SignIcon from '../../assets/mock/section-2/sign.svg';
import Stamp from '../../assets/mock/section-2/stamp.svg';
import { motion } from 'framer-motion';
import { motionVariantsSignStampItem } from '../../data/motion.Data';
import { PhoneImageIcon } from '../ui/PhoneImageIcon';

export const SectionSignStamp = ({}) => {
  return (
    <div className="relative flex justify-center flex-shrink-0">
      <PhoneImageIcon icon={PhoneImage} />
      <motion.div
        variants={motionVariantsSignStampItem}
        initial="hidden"
        animate="visible"
        custom={0}
        className="absolute -left-4 md:-left-12 top-[114px] sm:top-[160px] md:top-[242px] w-[140px] sm:w-[175px] md:w-[216px] h-auto"
      >
        <img src={SignIcon} alt="Sign Icon" />
      </motion.div>

      <motion.div
        variants={motionVariantsSignStampItem}
        initial="hidden"
        animate="visible"
        custom={1}
        className="absolute -right-4 sm:-right-8 md:-right-12 top-[64px] sm:top-[88px] md:top-[128px] w-[142px] sm:w-[175px] md:w-[216px]  h-auto"
      >
        <img src={Stamp} alt="Stamp Icon" />
      </motion.div>
    </div>
  );
};
