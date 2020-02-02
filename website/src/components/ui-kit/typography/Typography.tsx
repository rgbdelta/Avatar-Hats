import React, { CSSProperties } from 'react';
import {
  typography,
  h1,
  h2,
  h3,
  pSmall,
  light,
  dark,
  muted,
  primary,
  success,
  info,
  warning,
  danger,
  bold,
  bolder,
} from './Tyopgraphy.scss';
import { classes } from '../../layout-kit/Classes';

type FontSize = 'h1' | 'h2' | 'h3' | 'p' | 'p-small';
type FontColor = 'light' | 'dark' | 'muted' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
type FontWeight = 'bold' | 'bolder' | 'normal';

interface TypographyProps {
  children: React.ReactNode;
  intent?: FontColor;
  allCaps?: boolean;
  italic?: boolean;
  weight?: FontWeight;
  center?: boolean;
  style?: CSSProperties;
  href?: string;
  className?: string;
}

interface IProps extends TypographyProps {
  size: FontSize;
}

const getSizeClass = (style: FontSize) => {
  switch (style) {
    case 'h1':
      return h1;
    case 'h2':
      return h2;
    case 'h3':
      return h3;
    case 'p-small':
      return pSmall;
    default:
      return '';
  }
};

const getIntentClass = (color: FontColor) => {
  switch (color) {
    case 'light':
      return light;
    case 'dark':
      return dark;
    case 'muted':
      return muted;
    case 'primary':
      return primary;
    case 'success':
      return success;
    case 'info':
      return info;
    case 'warning':
      return warning;
    case 'danger':
      return danger;
    default:
      return '';
  }
};

const getWeightClass = (color: FontWeight) => {
  switch (color) {
    case 'bolder':
      return bolder;
    case 'bold':
      return bold;
    default:
      return '';
  }
};

export const Typography = (props: IProps) => {
  const {
    size,
    style,
    weight = 'normal',
    allCaps = false,
    italic = false,
    intent = 'dark',
    center = false,
    href,
    children,
    className,
  } = props;

  return (
    <div
      className={classes(
        ...[
          typography,
          getSizeClass(size),
          getIntentClass(intent),
          getWeightClass(weight),
          className,
        ],
      )}
      style={{
        textTransform: allCaps ? 'uppercase' : 'none',
        fontStyle: italic ? 'italic' : undefined,
        textAlign: center ? 'center' : undefined,
        ...style,
      }}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
};

export const Heading1 = (props: TypographyProps) => {
  return <Typography size="h1" {...props} />;
};

export const Heading2 = (props: TypographyProps) => {
  return <Typography size="h2" {...props} />;
};

export const Heading3 = (props: TypographyProps) => {
  return <Typography size="h3" {...props} />;
};

export const Paragraph = (props: TypographyProps) => {
  return <Typography size="p" {...props} />;
};

export const ParagraphSmall = (props: TypographyProps) => {
  return <Typography size="p-small" {...props} />;
};
