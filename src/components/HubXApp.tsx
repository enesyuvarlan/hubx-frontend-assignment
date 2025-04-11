import { FeaturesPage } from './features/FeaturesPage';
import { FeaturesSlider } from './features/FeaturesSlider';
import { Container } from './layout/Container';
import { SectionContainer } from './layout/SectionContainer';

export const HubXApp = () => {
  return (
    <div className="flex-col">
      <Container>
        <SectionContainer>
          <FeaturesPage />
        </SectionContainer>
        <FeaturesSlider />
      </Container>
    </div>
  );
};
