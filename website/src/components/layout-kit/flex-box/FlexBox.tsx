import * as React from 'react';
import { FlexProps } from './FlexProps';
import { classes } from '../Classes';

export function FlexBox(props: FlexProps) {
  const { ref, children, gutter, style, id, className, ...flexProps } = props;
  return (
    <div
      ref={ref}
      id={id}
      className={classes(className, String(gutter))}
      style={{
        display: 'flex',
        ...style,
        ...flexProps,
      }}
    >
      {children}
    </div>
  );
}
