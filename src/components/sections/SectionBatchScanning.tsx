import PhoneImage from '../../assets/mock/section-3/Phone-3.svg';
import FilePreview from '../../assets/mock/section-3/file-peview.png';
import { motion } from 'framer-motion';
import { PhoneLayout } from './PhoneLayout';
import { stackFileVariant } from '../../data/motion.Data';

export const SectionBatchScanning = ({}) => {
  return (
    <PhoneLayout phoneImage={PhoneImage}>
      <motion.img
        src={FilePreview}
        alt="File Preview 1"
        key={0}
        variants={stackFileVariant}
        initial="hidden"
        animate="visible"
        custom={0}
        className="absolute bottom-6 md:bottom-10 h-auto min-w-[194px] px-16 md:px-20 transform z-10"
        style={{ transform: 'scale(0.9)' }}
      />
      <motion.img
        src={FilePreview}
        alt="File Preview 2"
        key={1}
        variants={stackFileVariant}
        initial="hidden"
        animate="visible"
        custom={1}
        className="absolute bottom-3 md:bottom-5 h-auto min-w-[194px] px-16 md:px-20 transform z-20"
        style={{ transform: 'scale(0.95)' }}
      />
      <motion.img
        src={FilePreview}
        alt="File Preview 3"
        key={2}
        variants={stackFileVariant}
        initial="hidden"
        animate="visible"
        custom={2}
        className="absolute bottom-0 h-auto min-w-[194px] px-16 md:px-20 transform z-30"
        style={{ transform: 'scale(1)' }}
      />
    </PhoneLayout>
  );
};
