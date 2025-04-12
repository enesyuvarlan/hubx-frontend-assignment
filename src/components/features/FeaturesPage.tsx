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
      {activeSection ? (
        <FeaturesSections
          key={activeSection.id}
          title={activeSection.title}
          cap={activeSection.cap}
          description={activeSection.description}
        >
          <activeSection.section />
        </FeaturesSections>
      ) : (
        <div>
          <p>Bir hata oluştu! Aktif bölüm bulunamadı.</p>
        </div>
      )}
    </>
  );
};
