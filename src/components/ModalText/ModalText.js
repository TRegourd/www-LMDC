import React, { useContext } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import { device } from "../../utils";
import { Title } from "../Core";

const ModalStyled = styled(Modal)`
  .modal-dialog {
    width: 100vw;
    height: 100vh;
    max-width: initial;
    max-height: initial;
    margin: 0;
  }
  .modal-content {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0;
    padding-top: 15px;
    background: rgba(0, 0, 0, 0.75);
    @media ${device.lg} {
      padding-top: 30px;
    }
  }
`;

const CloseWrapper = styled.div`
  cursor: pointer;
  top: 10rem;
  right: 1rem;
  position: absolute;
  height: 1.5rem;
  width: 1.5rem;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  z-index: 10;
  color: #fff;
  @media ${device.md} {
    right: 2rem;
  }
`;

const CloseButton = (props) => (
  <CloseWrapper {...props}>
    <svg
      role="img"
      viewBox="0 0 24 24"
      css={`
        fill: white;
        vertical-align: middle;
        height: 1rem;
        width: 1rem;
      `}
    >
      <path
        d="M9.82 12L0 2.18 2.18 0 12 9.82 21.82 0 24 2.18 14.18 12 24 21.82 21.82 24 12 14.18 2.18 24 0 21.82z"
        fill="currentColor"
      ></path>
    </svg>
  </CloseWrapper>
);

const ModalText = (props) => {
  const gContext = useContext(GlobalContext);

  const handleClose = () => {
    gContext.toggleTextModal();
  };

  return (
    <ModalStyled
      {...props}
      size="lg"
      centered
      show={gContext.textModalVisible}
      // onHide={gContext.toggleVideoModal}
    >
      <Modal.Body className="text-center position-relative">
        <CloseButton onClick={handleClose} />
        <div className={`h-100 d-flex align-items-center w-100`}>
          <a href="https://www.freepik.com/free-vector/crypto-portfolio-concept-illustration_12463623.htm#query=crypto%20smartphone&position=36&from_view=search">
            Image by storyset
          </a>{" "}
          on Freepik
        </div>
      </Modal.Body>
    </ModalStyled>
  );
};

export default ModalText;
