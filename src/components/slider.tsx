import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import Switch from './switch';
import Timecard from './timecard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const cards = [
  {
    year: 2015,
    description:
      '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
  },
  {
    year: 2016,
    description:
      '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
  },
  {
    year: 2017,
    description:
      '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
  },
  {
    year: 2018,
    description:
      '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
  },
  {
    year: 2019,
    description:
      '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
  },
  {
    year: 2020,
    description:
      '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
  }
];

const SliderContainer = styled.div`
  position: relative;
`;

const SliderSwiper = styled(Swiper)`
  width: 100%;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SliderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 20px);
  right: -20px;
  box-shadow: 0 0 2px 0px black;
`;

const params = {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 3,
  simulateTouch: true,
  touchRatio: 1,
  grabCursor: true,
  spaceBetween: 80
};

const Slider = (): React.JSX.Element => {
  return (
    <SliderContainer>
      <Switch />
      <SliderSwiper {...params}>
        <SliderContent>
          {cards.map((card, index) => {
            return (
              <SwiperSlide key={index}>
                <Timecard year={card.year} description={card.description} />
              </SwiperSlide>
            );
          })}
        </SliderContent>
      </SliderSwiper>
      <Button>{'>'}</Button>
    </SliderContainer>
  );
};

export default Slider;
