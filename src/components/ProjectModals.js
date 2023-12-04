import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
  title,
  description,
  tech,
  modalImg,
  liveDemoLink,
  githubSourceLink,
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
      // width: 'min-content',
      // maxHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      width: '80%',
      // gap: '2rem',
      // height: '60vh',
    },
    closeButton: {
      position: 'absolute',
      top: '30px',
      right: '20px',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      fontSize: '18px',
    },
    // modalImage: {
    //   width: '80%',
    //   // maxHeight: '300px',
    //   // height: '100%',
    //   borderRadius: '8px',
    //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    //   margin: '20px 0',
    //   // flex: '2',
    // },
    // textModal: {
    //   // flex: '3',
    // },
    modalContainer: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '20px',
      alignItems: 'center',
      // width: '80%',
      // margin: '0 auto',
    },
    modalImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      // gridColumn: '1 / span 2',
    },
    textModal: {
      textAlign: 'center',
      margin: '20px',
      // gridColumn: '2 / span 1',
    },
  };

  const Button = styled.a`
    display: inline-block;
    margin-right: 10px;
    padding: 8px 8px;
    border-radius: 10px;
    text-decoration: none;
    color: white;
    background-color: #333;
    transition: background-color 0.3s ease;
    // margin: 10px auto;

    &:hover {
      background-color: #555;
    }
  `;
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
        <div className="modal-container" style={modalStyles.modalContainer}>
          <div className="title-img" style={{ width: '100%' }}>
            <h2>{title}</h2>
            <p>{tech}</p>
            <img src={modalImg} alt={title} style={modalStyles.modalImage} />
          </div>
          <div className="text-modal" style={modalStyles.textModal}>
            <p>{description}</p>
            <div
              className="buttons-container"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Button
                href={liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
              >
                <FontAwesomeIcon icon={faEye} />
                {' '}
                Live Demo
              </Button>
              <Button
                href={githubSourceLink}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
              >
                <FontAwesomeIcon icon={faGithub} />
                {' '}
                GitHub Source
              </Button>
            </div>
          </div>
        </div>
        <button
          type="button"
          style={modalStyles.closeButton}
          onClick={closeModal}
        >
          X
        </button>
      </Modal>
    </div>
  );
};

ProjectModals.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  modalImg: PropTypes.string.isRequired,
  liveDemoLink: PropTypes.string.isRequired,
  githubSourceLink: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
};

export default ProjectModals;
