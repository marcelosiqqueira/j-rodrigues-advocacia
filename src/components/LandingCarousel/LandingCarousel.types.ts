export interface Slide {
    imageUrl: string;
    title: string;
    subtitle: string;
  }
  
  export interface LandingCarouselProps {
    slides: Slide[];
    moreLink: string;
    className?: string;
  }
  