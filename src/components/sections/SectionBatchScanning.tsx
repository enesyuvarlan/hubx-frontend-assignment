import { ReactComponent as PhoneImage } from '../../assets/mock/section-3/Phone-3.svg';
import FilePreview from '../../assets/mock/section-3/file-peview.svg';
import { motion } from 'framer-motion';
import { stackFileVariant } from '../../data/motion.Data';

export const SectionBatchScanning = ({}) => {
  const files = [
    {
      bottom: 'bottom-6 md:bottom-10',
      scale: 0.9,
      zIndex: 10,
      custom: 0,
      alt: 'File Preview 1',
    },
    {
      bottom: 'bottom-3 md:bottom-5',
      scale: 0.95,
      zIndex: 20,
      custom: 1,
      alt: 'File Preview 2',
    },
    {
      bottom: 'bottom-0',
      scale: 1,
      zIndex: 30,
      custom: 2,
      alt: 'File Preview 3',
    },
  ];

  return (
    <div className="relative flex justify-center flex-shrink-0">
      <PhoneImage className="w-[230px] sm:w-[300px] md:w-[366px] h-auto mx-10" />
      {files.map(({ bottom, scale, zIndex, custom, alt }, index) => (
        <motion.div
          key={index}
          className={`absolute ${bottom} h-auto min-w-[194px] px-16 z-${zIndex}`}
          style={{ transform: `scale(${scale})` }}
        >
          <motion.img
            src={FilePreview}
            alt={alt}
            variants={stackFileVariant}
            initial="hidden"
            animate="visible"
            custom={custom}
          />
        </motion.div>
      ))}
    </div>
  );
};
