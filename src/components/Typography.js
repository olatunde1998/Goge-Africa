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
    font-size: ${theme.fontSizes.h3};
    font-weight: ${theme.fontWeights.regular}
    
`;
const bodyMedium = (theme) => `
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.h3}
    color: ${theme.colors.secondary}

`;
const bodySmall = (theme) => `
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.h3};
`;

const footerHeading = (theme) =>`
  font-size: ${theme.fontSizes.h3};
  font-weight: ${theme.fontWeights.medium};
  text-align: left;
`;

const footerSmall = (theme) =>`
  font-size: ${theme.fontSizes.h3};
  font-weight: ${theme.fontWeights.regular};
  text-align: left;
`;

const variants = {
  defaultStyle,
  bodySmall,
  bodyMedium,
  bodyLarge,
  headings,
  footerSmall,
  footerHeading,
};

export const Typography = styled.p`
  ${({ theme }) => defaultStyle(theme)}
  ${({variant, theme}) => variants[variant](theme)}
`;

Typography.defaultProps = {
  variant: "defaultStyle",
};
