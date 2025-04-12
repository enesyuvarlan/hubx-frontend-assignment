import { ReactComponent as PhoneImage } from '../../assets/mock/section-1/phone-1.svg';
import { PhoneImageIcon } from '../ui/PhoneImageIcon';

export const SectionDocumentScanner = ({}) => {
  return (
    <div className="relative flex justify-center flex-shrink-0">
      <PhoneImageIcon icon={PhoneImage}/>
      </div>
  );
};
