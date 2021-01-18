import {theme} from "@chakra-ui/react"
const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
const colors={
  primary:{
    100:"#1e3888"
  } 
}
export const newTheme = {
  ...theme,
  breakpoints,
  colors
};