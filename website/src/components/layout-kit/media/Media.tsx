import * as React from 'react';
import { useState } from 'react';

export enum MediaQuery {
  SmallDown = '(max-width: 575px)',
  MediumDown = '(max-width: 767px)',
}

interface Props {
  query: MediaQuery;
  children: React.ReactNode;
}

export const Media = (props: Props) => {
  const [matches, setMatches] = useState(false);

  const onMediaChange = (matches: boolean) => {
    setMatches(matches);
  };

  React.useEffect(() => {
    const disposer = addMediaListener(props.query, onMediaChange);
    return () => {
      disposer();
    };
  }, []);

  if (matches) {
    return props.children;
  }
  return null;
};

/**
 * The `window.matchMedia` API has some deprecated methods.
 * This function just wraps up the interface to ensure cross browser
 * support as well as simplifying the interface by returning a disposer.
 */
function addMediaListener(query: MediaQuery, callback: (matches: boolean) => void) {
  // create the matchMedia watcher
  const matcher = window.matchMedia(query);

  // add event listeners for the media match changing
  const eventHandler = (event: MediaQueryListEvent) => callback(event.matches);
  if (matcher.hasOwnProperty('addEventListener')) {
    matcher.addEventListener('change', eventHandler);
  } else {
    // tslint:disable-next-line deprecation
    matcher.addListener(eventHandler);
  }

  // call the users callback with the initial state of the matcher
  callback(matcher.matches);

  // return a disposer that can be called to remove all the event listeners
  return () => {
    if (matcher.hasOwnProperty('addEventListener')) {
      matcher.removeEventListener('change', eventHandler);
    } else {
      // tslint:disable-next-line deprecation
      matcher.removeListener(eventHandler as EventListener);
    }
  };
}
