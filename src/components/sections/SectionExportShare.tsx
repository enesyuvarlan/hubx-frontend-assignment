import React from 'react';
import { ReactComponent as PhoneImage } from '../../assets/mock/section-5/phone-5.svg';
import BackButton from '../../assets/mock/section-5/back-button.svg';
import PdfIcon from '../../assets/mock/section-5/pdf.svg';
import JpgIcon from '../../assets/mock/section-5/jpg.svg';
import TxtIcon from '../../assets/mock/section-5/txt.svg';
import { motion } from 'framer-motion';
import { PhoneLayout } from './PhoneLayout';
import { motionVariantsExportShareItem } from '../../data/motion.Data';

type ExportShareItem = {
  id: number;
  x: number;
  src: string;
  alt: string;
};

const items: ExportShareItem[] = [
  { id: 1, x: 200, src: PdfIcon, alt: 'PDF Icon' },
  { id: 2, x: 0, src: JpgIcon, alt: 'JPG Icon' },
  { id: 3, x: -200, src: TxtIcon, alt: 'TXT Icon' },
];

export const SectionExportShare = ({}) => {
  return (
    <PhoneLayout phoneImage={PhoneImage}>
      <div className="absolute bottom-0 max-w-[420px]">
        <div className="relative flex justify-between">
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={motionVariantsExportShareItem}
              initial="hidden"
              animate="visible"
              custom={{ id: item.id, xValue: item.x }}
            >
              <img src={item.src} alt={item.alt} />
            </motion.div>
          ))}
        </div>
        <div className="absolute bottom-7">
          <motion.div
            variants={motionVariantsExportShareItem}
            initial="hidden"
            animate="visible"
            custom={{ id: 0, xValue: 300 }}
          >
            <img
              src={BackButton}
              alt="Back Button"
              className="w-5 md:w-6 h-auto"
            />
          </motion.div>
        </div>
      </div>
    </PhoneLayout>
  );
};
