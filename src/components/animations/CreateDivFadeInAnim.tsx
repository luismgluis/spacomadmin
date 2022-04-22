import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const bounceAnimation = keyframes`${fadeIn}`;

const CreateDivFadeInAnim = (time: number) => {
  return styled.div`
    animation: ${time}s ${bounceAnimation};
  `;
};

export default CreateDivFadeInAnim;
