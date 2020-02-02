import * as React from 'react';
import Router from '../navigation/Router';
import { Logger } from '../utils/Logger';
import { Heading1 } from '../components/ui-kit/typography/Typography';
import { Container } from '../components/layout-kit/container/Container';

export default function App() {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
}
interface IErrorBoundaryState {
  crashed: boolean;
  error: string;
  stack: string;
}

const logger = new Logger('ErrorBoundary');

class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  state = {
    crashed: false,
    error: '',
    stack: '',
  };

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { crashed: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    logger.error('Error caught in Error Boundary', error);
    this.setState({ stack: info.componentStack });
  }

  render() {
    if (this.state.crashed) {
      return (
        <Container>
          <Heading1 center>Something went wrong</Heading1>
        </Container>
      );
    }
    return this.props.children;
  }
}
