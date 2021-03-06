import React from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components';
import Gallery from '../Gallery/GalleryComp';
import NotFound from '../NotFound/stockphotos/no_img.jpg';
// import RenderGraphPage from './RenderGraphPage';

import { GraphPage } from '../Graph';
const StyledCard = styled(Card)`
  width: 90%;
  /* height: 27.5vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 10% 0 0 10%;
`;

const ImageBox = selectedBridge => {
  console.log(selectedBridge.selectedBridge.properties.after_img, 'HERE');

  const props = selectedBridge.selectedBridge.properties;
  const beforeImg = selectedBridge.selectedBridge.properties.before_img;
  const afterImg = selectedBridge.selectedBridge.properties.after_img;
  console.log({ beforeImg, afterImg });
  const images = [
    {
      // src: selectedBridge.selectedBridge.properties.after_img || NotFound,
      src: () => (beforeImg === undefined ? NotFound : beforeImg),

      width: 4,
      height: 3,
    },
    {
      // src: selectedBridge.selectedBridge.properties.before_img || NotFound,

      src: () => (afterImg === undefined ? NotFound : afterImg),

      width: 4,
      height: 3,
    },
  ];

  return (
    <StyledCard>
      <Gallery photos={images} />

      <GraphPage props={props} />
    </StyledCard>
  );
};

export default ImageBox;
// testing
