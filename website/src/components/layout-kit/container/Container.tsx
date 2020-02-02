import * as React from 'react';
import { classes } from '../Classes';
import { Gutter, GutterType } from '../flex-box/FlexProps';
import { container } from './Container.scss';

interface Props {
  children?: React.ReactNode;
  className?: string;
  gutter?: GutterType;
  style?: React.HTMLAttributes<HTMLElement>['style'];
}

export function Container(props: Props) {
  const { gutter = Gutter.large } = props;
  return (
    <div className={classes(container, props.className, String(gutter))} style={props.style}>
      {props.children}
    </div>
  );
}
