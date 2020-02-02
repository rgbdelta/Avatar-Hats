export function classes(...cssClassNames: Array<string | undefined>) {
  return cssClassNames.filter((className) => className !== undefined).join(' ');
}
