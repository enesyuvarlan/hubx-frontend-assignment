import { FeaturesPage } from './features/FeaturesPage';
import { FeaturesSlider } from './features/FeaturesSlider';
import { Container } from './layout/Container';
import { SectionContainer } from './layout/SectionContainer';
import { ReactComponent as Hubx } from '../assets/icons/hubx.svg';
import { motion } from 'framer-motion';

import { useState, useEffect } from 'react';

export const HubXApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 850);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-col">
      {loading ? (
        <motion.div
          className="flex justify-center items-center h-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Hubx className="p-12 w-1/6" />
        </motion.div>
      ) : (
        <Container>
          <SectionContainer>
            <FeaturesPage />
          </SectionContainer>
          <FeaturesSlider />
        </Container>
      )}
    </div>
  );
};
