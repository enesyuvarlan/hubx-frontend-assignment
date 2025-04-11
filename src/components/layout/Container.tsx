import { ContainerProps } from '../../types/props';

export const ContainerOuter = ({ children, ...props }: ContainerProps) => {
  return (
    <div {...props}>
      <div className="mx-auto w-full max-w-[1440px]">{children}</div>
    </div>
  );
};

export const ContainerInner = ({ children, ...props }: ContainerProps) => {
  return (
    <div {...props}>
      <div>{children}</div>
    </div>
  );
};

export const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <ContainerOuter {...props}>
      <ContainerInner>{children}</ContainerInner>
    </ContainerOuter>
  );
};
