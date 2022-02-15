import { Box, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import Footer from '../../app/components/Footer';

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <React.Fragment>
      <Slider {...settings}>
        <div>
          <img
            src="/images/products/imac27__evbw33241ouq_large.jpg"
            alt="hero"
            style={{
              display: 'block',
              width: '65%',
              maxHeight: 500,
              margin: 'auto',
            }}
          />
        </div>
        <div>
          <img
            src="/images/products/product_4_20180409144850_5acb0cd2459a2.png"
            alt="hero"
            style={{
              display: 'block',
              width: '65%',
              maxHeight: 500,
              margin: 'auto',
            }}
          />
        </div>
        <div>
          <img
            src="/images/products/product_1606361872db9d1d807e75b0f58f01eae5b3ded9fc.png"
            alt="hero"
            style={{
              display: 'block',
              width: '65%',
              maxHeight: 500,
              margin: 'auto',
            }}
          />
        </div>
      </Slider>
      <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
        <Typography variant="h2">Welcome to the Gothenburg Computer</Typography>
      </Box>
      <Footer />
    </React.Fragment>
  );
}
