import { FeaturesSectionsProps } from '../../types/props';
import { FeaturesTitlesCard } from './FeaturesTitlesCard';

export const FeaturesSections = ({
  children,
  title,
  cap,
  description,
}: FeaturesSectionsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-14">
      <div className="order-2 lg:order-1">{children}</div>
      <div className="order-1 lg:order-2 w-full my-auto pb-5 mx-auto lg:ml-auto max-w-[556px]">
        <FeaturesTitlesCard title={title} cap={cap} description={description} />
      </div>
    </div>
  );
};
