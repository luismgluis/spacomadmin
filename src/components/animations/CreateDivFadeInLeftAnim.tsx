import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeInLeft } from "react-animations";

const bounceAnimation = keyframes`${fadeInLeft}`;

const CreateDivFadeInLeftAnim = (time: number) => {
  return styled.div`
    animation: ${time}s ${bounceAnimation};
  `;
};

export default CreateDivFadeInLeftAnim;
