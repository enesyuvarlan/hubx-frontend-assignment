import React, { SVGProps } from 'react';

type Props = { icon: React.ComponentType<SVGProps<SVGSVGElement>> };

export const PhoneImageIcon = ({ icon }: Props) => {
  const Icon = icon;
  return <Icon className="h-[230px] sm:h-[320px] md:h-[471px] w-auto mx-10" />;
};
