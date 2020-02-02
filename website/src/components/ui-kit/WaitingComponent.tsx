import React from 'react';

export function WaitingComponent(LazyComponent: React.LazyExoticComponent<() => JSX.Element>) {
  return () => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}
