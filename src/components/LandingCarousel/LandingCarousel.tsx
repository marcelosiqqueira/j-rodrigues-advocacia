import React from 'react';
import Slider from "react-slick";

import { LandingCarouselProps } from './LandingCarousel.types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LandingCarousel.css';

export const LandingCarousel: React.FC<LandingCarouselProps> = ({
  slides,
  whatsappLink,
  moreLink,
  className
}) => {
  
  const settings: Slider['props'] = {
    dots: true,           // mostra os indicadores embaixo
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,         // setas de navegação lateral
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    // Você pode customizar setas criando seus próprios componentes e passando via nextArrow e prevArrow
    // nextArrow={<CustomNextArrow />}
    // prevArrow={<CustomPrevArrow />}
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
