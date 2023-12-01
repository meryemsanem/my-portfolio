import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled from 'styled-components';
import '../styles.css';

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

// const ModalButton = styled.button`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   padding: 10px 20px;
//   background-color: rgba(255, 255, 255, 0.8);
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: opacity 0.3s ease;
//   opacity: 0;
// `;

const ProjectModals = ({
  title, description, tech, imageUrl,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '8px',
      padding: '20px',
      width: 'min-content',
      // maxHeight: '80vh',
    },
  };

  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="ProjectModals">
      <ImageContainer>
        <button type="button" className="ModalButton" onClick={openModal}>
          See
          {' '}
          {title}
        </button>
      </ImageContainer>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="ProjectModals Details"
        style={modalStyles}
      >
        <h2>{title}</h2>
        <img src={imageUrl} alt={title} />
        <p>{tech}</p>
        <p>{description}</p>
        <button type="button" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

ProjectModals.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
};

export default ProjectModals;
