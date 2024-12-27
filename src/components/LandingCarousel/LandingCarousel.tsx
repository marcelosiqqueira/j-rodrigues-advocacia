import React from 'react';
import Slider from "react-slick";

import { LandingCarouselProps } from './LandingCarousel.types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LandingCarousel.css';
import CustomArrow from '../CustomArrow/CustomArrow';

export const LandingCarousel: React.FC<LandingCarouselProps> = ({
  slides,
  moreLink,
  className
}) => {

  const whatsappLink = "https://wa.me/5534991610712?text=Olá%2C%20entrei%20em%20contato%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20seu%20escritório%20de%20advocacia.";
  
  const settings: Slider['props'] = {
    dots: true,     
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,       
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,

  };

  return (
    <div className={`hero-carousel ${className || ''}`}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-carousel__slide">
            <div 
              className="hero-carousel__background" 
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
              role="img" 
              aria-label={`Slide ${index + 1}: ${slide.title}`}
            >
              <div className="hero-carousel__overlay">
                <h1 className="hero-carousel__title">{slide.title}</h1>
                <h2 className="hero-carousel__subtitle">{slide.subtitle}</h2>
                <div className="hero-carousel__actions">
                  <a 
                    href={whatsappLink} 
                    className="hero-carousel__btn hero-carousel__btn--whatsapp"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Chamar no WhatsApp
                  </a>
                  <a 
                    href={moreLink} 
                    className="hero-carousel__btn hero-carousel__btn--more"
                  >
                    Veja Mais
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
