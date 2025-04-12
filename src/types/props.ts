import { ReactNode, SVGProps } from 'react';

// Features
export type PhoneLayoutProps = {
  phoneImage: React.ComponentType<SVGProps<SVGSVGElement>>;
  children?: React.ReactNode;
};
export type FeaturesSectionsProps = {
  children: ReactNode;
  title: string;
  cap: string;
  description: string;
};
export type FeaturesTitlesCardProps = {
  title: string;
  cap: string;
  description: string;
};

// Container
export type ContainerProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

// Section

//UI
export type CircularProgressBarProps = {
  size?: number;
  thickness?: number;
  strokeClassName?: string;
  pathClassName?: string;
  strokeColor?: string;
  pathColor?: string;
  duration?: number;
  isActive?: boolean;
  children?: React.ReactNode;
};

export interface SliderButtonProps {
  id: number;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  isActive?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
