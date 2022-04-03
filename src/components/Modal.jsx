import { useEffect } from "react";
import styled from "styled-components";

import close from "../images/icons/close.svg";

const Backdrop = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;

  background-color: rgba(0, 0, 0, 0.25);
`;
const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 80px;
  border-radius: 20px;

  background-color: #ffffff;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  padding: 0;

  cursor: pointer;
`;
const CloseIcon = styled.img``;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 400;
  margin: 0 0 40px 0;

  text-align: center;
`;

export const Modal = ({ children, isOpen, setIsOpen, title }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Backdrop onClick={handleClose} isOpen={isOpen}>
      <ModalWrap onClick={(e) => e.stopPropagation()} tabIndex="0">
        <CloseButton onClick={handleClose}>
          <CloseIcon src={close} />
        </CloseButton>
        {title && <Title>{title}</Title>}
        {children}
      </ModalWrap>
    </Backdrop>
  );
};
