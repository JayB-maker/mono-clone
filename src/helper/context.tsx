import { createContext } from "react";

interface ContextState {
  carouselState: number;
  setCarouselState: any;
}

interface TestimonialContextState {
  isControllerClicked: boolean;
  setIsControllerClicked: any;
}

export const BusinessBuildingContext = createContext({} as ContextState);
export const TestimonialContext = createContext({} as TestimonialContextState);
