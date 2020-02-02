import * as React from 'react';
import { Container } from '../../components/layout-kit/container/Container';
import { Heading1, Paragraph } from '../../components/ui-kit/typography/Typography';
import { environment } from '../../utils/Environment';

export default () => {
  return (
    <Container>
      <Heading1>Test</Heading1>

      <Paragraph center>Git Tag - {environment.version}</Paragraph>
    </Container>
  );
};
