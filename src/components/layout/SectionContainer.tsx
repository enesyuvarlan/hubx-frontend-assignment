import { ContainerProps } from '../../types/props';

export const ContainerOuter = ({ children, ...props }: ContainerProps) => {
  return (
    <div {...props}>
      <div className="mx-auto w-full mt-0 lg:mt-24">{children}</div>
    </div>
  );
};

export const ContainerInner = ({ children, ...props }: ContainerProps) => {
  return (
    <div {...props}>
      <div className="pt-14 lg:pt-[130px]">{children}</div>
    </div>
  );
};

export const SectionContainer = ({ children, ...props }: ContainerProps) => {
  return (
    <ContainerOuter {...props}>
      <ContainerInner>{children}</ContainerInner>
    </ContainerOuter>
  );
};
