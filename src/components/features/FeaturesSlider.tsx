import { SliderButton } from '../ui/SliderButton';
import { sliderData } from '../../data/sliderData';
import { useDispatch } from 'react-redux';
import { setActiveSection } from '../../stores/sectionSlice';

interface FeaturesSliderProps {}

export const FeaturesSlider = ({}: FeaturesSliderProps) => {
  const dispatch = useDispatch();

  const handleClick = (id: number) => {
    dispatch(setActiveSection(id));
  };

  return (
    <div className="bg-background flex flex-col mx-auto">
      <div className="flex overflow-x-auto no-scrollbar gap-[1px]">
        {sliderData.map((item) => (
          <SliderButton
            id={item.id}
            icon={item.icon}
            title={item.title}
            onClick={() => handleClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
};
