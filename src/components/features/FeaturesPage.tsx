import { FeaturesSections } from './FeaturesSections';
import { sectionsData } from '../../data/sectionsData';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores/store';

export const FeaturesPage = () => {
  const activeSectionId = useSelector(
    (state: RootState) => state.activeSection.activeSection,
  );

  const activeSection = sectionsData.find(
    (section) => section.id === activeSectionId,
  );

  return (
    <>
      {activeSection && (
        <FeaturesSections key={activeSection.id}>
          <activeSection.section />
        </FeaturesSections>
      )}
    </>
  );
};
