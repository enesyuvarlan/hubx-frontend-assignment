export const motionPhoneAnimation = {
  initial: { y: 500 },
  animate: { y: 0 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  transition: {
    duration: 0.8,
    ease: 'easeOut',
  },
};

export const motionVariantsSignStampItem = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8 + custom * 0.3,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};
export const motionVariantsFilterItem = {
  hidden: {
    opacity: 0,
    scale: 1,
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8 + custom * 0.2,
      duration: 0.2,
      ease: 'easeOut',
    },
  }),
};

export const motionVariantsExportShareItem = {
  hidden: (custom: { xValue: number }) => ({
    scale: 1,
    x: custom.xValue,
    y: 200,
  }),
  visible: (custom: { id: number }) => ({
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.8 + custom.id * 0.2,
      duration: 0.2,
      ease: 'easeOut',
    },
  }),
};

export const stackFileVariant = {
  hidden: {
    y: 400,
    scale: 1,
  },
  visible: (custom: number) => ({
    y: 0,
    transition: {
      delay: 0.8 + custom * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};
