import { theme } from "./theme.ts";

export const imageBorderGradientStyle = {
  borderImage: `linear-gradient(to bottom right, ${theme.colors.red[6]} 0%, ${theme.colors.orange[6]} 100%) 1`,
  borderWidth: 4,
  borderStyle: "solid",
  padding: 5,
} as const;

export const textGradientStyle = {
  backgroundImage: `linear-gradient(to right, ${theme.colors.red[6]} 0%, ${theme.colors.orange[6]} 100%)`,
  color: "transparent",
  backgroundClip: "text",
};
