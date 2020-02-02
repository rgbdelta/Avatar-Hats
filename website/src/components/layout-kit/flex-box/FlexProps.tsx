import { CSSProperties } from 'react';
import { gutterSmall, gutterMedium, gutterLarge } from './FlexBox.scss';

export interface GutterType {
  small: string;
  medium: string;
  large: string;
}

export const Gutter: GutterType = {
  small: gutterSmall,
  medium: gutterMedium,
  large: gutterLarge,
};

export interface FlexProps {
  children?: React.ReactNode;
  id?: React.HTMLAttributes<HTMLElement>['id'];
  className?: React.HTMLAttributes<HTMLElement>['className'];
  style?: React.HTMLAttributes<HTMLElement>['style'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  flexBasis?: CSSProperties['flexBasis'];
  flexGrow?: CSSProperties['flexGrow'];
  flexShrink?: CSSProperties['flexShrink'];
  flexDirection?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
  gutter?: GutterType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: React.RefObject<any>;
}
