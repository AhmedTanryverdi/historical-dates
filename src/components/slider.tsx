import React, { useRef } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import styled from 'styled-components';
import Switch from './switch';
import Timecard from './timecard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SceneProps } from '@/shared/types';

const CARDS = [
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

const Slider = ({ useRefWheel }: SceneProps): React.JSX.Element => {
  const swiperRef = useRef<SwiperRef | null>(null);
  return (
    <SliderContainer>
      <Switch useRefWheel={useRefWheel} />
      <SliderSwiper {...params} ref={swiperRef}>
        <SliderContent>
          {CARDS.map((card, index) => {
            return (
              <SwiperSlide key={index}>
                <Timecard year={card.year} description={card.description} />
              </SwiperSlide>
            );
          })}
        </SliderContent>
      </SliderSwiper>
      <Button
        onClick={() => {
          if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
          }
        }}
      >
        {'>'}
      </Button>
    </SliderContainer>
  );
};

export default Slider;
