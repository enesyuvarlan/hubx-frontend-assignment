import { useSelector } from 'react-redux';
import { RootState } from '../../stores/store';
import { SliderButtonProps } from '../../types/props';
import { CircularProgressBar } from './CircularProgressBar';

export const SliderButton = ({
  id,
  icon: Icon,
  title,
  onClick,
}: SliderButtonProps) => {
  const activeSectionId = useSelector(
    (state: RootState) => state.activeSection.activeSection,
  );

  const activeButton = activeSectionId === id;

  return (
    <button
      onClick={onClick}
      className={`flex group items-center justify-center min-w-[300px] md:w-full border h-[124px] bg-backgroundWhite snap-center ${
        activeButton ? 'bg-primaryHover border-none' : 'border-transparent'
      } focus:bg-primaryHover hover:border hover:border-primary transition-colors`}
    >
      <div className="flex items-center justify-center w-full">
        <div className="h-14 w-14 bg-white rounded-full">
          <CircularProgressBar
            size={56}
            thickness={2}
            duration={0.5}
            strokeColor="rgba(0, 0, 0, 0.08)"
            pathColor="rgba(3, 129, 255, 1)"
            isActive={activeButton}
          >
            <Icon
              className={`w-8 h-8 transition-colors ${
                activeButton ? 'text-primary' : 'text-iconColor'
              }`}
            />
          </CircularProgressBar>
        </div>
        <span className={'font-medium ml-4 text-[20px]'}>{title}</span>
      </div>
    </button>
  );
};
