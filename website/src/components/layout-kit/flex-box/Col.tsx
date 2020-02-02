import * as React from 'react';
import { FlexProps } from './FlexProps';
import { FlexBox } from './FlexBox';

export function Col(props: FlexProps) {
  return <FlexBox {...props} flexDirection="column" />;
}
