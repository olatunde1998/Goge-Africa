import styled from "styled-components";

const defaultStyle = (theme) => `
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.tertiary};
    font-size: ${theme.fontSizes.h1};
`;
const headings = (theme) => `
    font-size: ${theme.fontSizes.h1};
    font-weight: ${theme.fontWeights.bold};
    line-height: 40px;
    color: ${theme.colors.primary};
`;

const bodyLarge = (theme) => `
    font-size: ${theme.fontSizes.h1};
    font-weight: ${theme.fontWeights.bold};
    color: white;
    
`;
const bodyMedium = (theme) => `
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.h2};
    color: ${theme.colors.primary};
    text-align: left;
`;
const bodySmall = (theme) => `
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.h3};
    color: ${theme.colors.primary};
`;
const bodySmallTwo = (theme) => `
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.h3};
    color: ${theme.colors.tertiary};
`;
const bodySmallThree = (theme) => `
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.h3};
    color: ${theme.colors.secondary};
    text-align: left;
`;

const footerHeading = (theme) => `
  font-size: ${theme.fontSizes.h3};
  font-weight: ${theme.fontWeights.bold};
  text-align: left;
  color: ${theme.colors.tertiary};
`;

const footerSmall = (theme) => `
  font-size: ${theme.fontSizes.h3};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.tertiary};
  text-align: left;
`;

const variants = {
  defaultStyle,
  bodySmall,
  bodySmallTwo,
  bodySmallThree,
  bodyMedium,
  bodyLarge,
  headings,
  footerSmall,
  footerHeading,
};

export const Typography = styled.p`
  ${({ theme }) => defaultStyle(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Typography.defaultProps = {
  variant: "defaultStyle",
};
