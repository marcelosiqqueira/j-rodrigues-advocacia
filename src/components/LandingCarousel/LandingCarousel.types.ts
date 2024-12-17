export interface Slide {
    imageUrl: string;
    title: string;
    subtitle: string;
  }
  
  export interface LandingCarouselProps {
    slides: Slide[];
    whatsappLink: string;
    moreLink: string;
    className?: string;
  }
  