import { ReactNode } from 'react';

// Features
export type PhoneLayoutProps = {
  phoneImage: string;
  children?: React.ReactNode;
};
export type FeaturesSectionsProps = {
  children: ReactNode;
};

//Container
export type ContainerProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

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
  icon: string;
  title: string;
  isActive?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
