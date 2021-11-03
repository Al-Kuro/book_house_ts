export const propsMediaQuery = (
  maxWidth: number
): ((props: string) => string) => {
  return (props: string): string => {
    return `@media (max-width: ${maxWidth}px) {
        ${props}
    }`;
  };
};

const media = {
  desktop: propsMediaQuery(922),
  tablet: propsMediaQuery(768),
  mobile: propsMediaQuery(380),
};

export default media;
