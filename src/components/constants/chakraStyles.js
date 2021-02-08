import { theme } from "@chakra-ui/react"
const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
const colors = {
  primary: {
    100: "#1e3888",
    200: "#0077b6",
    300: "#6118de"
  },
  footer: {
    100: "#212529"
  },
  header: {
    100: "rgba(252,252,252)"
  },
  highlighter: {
    100: "#073b4c"
  },
  boxColor: "#e5ecf23d",
  purple: {
    100: "#e5ecf23d",
    600: "#686ade"
  },
  text:{
    100:"#33415c"
  }
}
export const newTheme = {
  ...theme,
  breakpoints,
  colors
};