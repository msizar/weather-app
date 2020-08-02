import React, { ReactNode } from 'react';
import Slider from 'react-slick';

type Props = {
  isMobile?: boolean;
  children?: ReactNode;
  settingProps?: any;
};
export const Carousel: React.FC<Props> = ({
  children,
  settingProps,
}) => {
  return (
    <Slider
      dots={true}
      infinite={true}
      speed={500}
      arrows={false}
      swipeToSlide={true}
      {...settingProps}
    >
      {children}
    </Slider>
  );
};

export default Carousel;
