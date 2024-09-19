import React, { useState } from "react";
import styled from "styled-components";

const Card = ({ imageData }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };

  return (
    <StyledWrapper>
      <div className="main">
        {imageData.slice(0, 4).map((data, index) => (
          <div
            key={index}
            className="card"
            id={`c${index + 1}`}
            onClick={() => openModal(index)}
          >
            <img src={data.src} className="size-fit" alt={`Card ${index + 1}`} />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal>
          <div className="modal-content">
            <button className="close" onClick={closeModal}>
              &times;
            </button>
            <button className="prev" onClick={prevImage}>
              &#10094;
            </button>
            <div className="image-container">
              <img src={imageData[currentImage].src} alt={`Image ${currentImage + 1}`} />
              <p className="caption">{imageData[currentImage].caption}</p> {/* Exibindo a legenda */}
            </div>
            <button className="next" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </Modal>
      )}
    </StyledWrapper>
  );
};

// Estilizando o modal e os botões
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    position: relative;
    width: 80%;
    max-width: 1000px;
    background: transparent;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 30px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }

  .prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 30px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }

  .image-container {
    display: flex;
    flex-direction: column; /* Alinha a legenda embaixo da imagem */
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  img {
    max-width: 90%; /* Ajuste a largura máxima da imagem */
    max-height: 70vh; /* Ajuste a altura máxima da imagem */
    height: auto;
    object-fit: contain;
  }

  .caption {
    margin-top: 10px;
    font-size: 20px;
    color: white;
  }
`;

const StyledWrapper = styled.div`
  .card {
    width: 300px;
    height: 370px;
    background: rgba(211, 211, 211, 0.199);
    position: absolute;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }

  #c1 {
    background-color: white;
  }

  #c2 {
    background-color: white;
  }

  #c3 {
    background-color: white;
  }

  #c4 {
    background-color: white;
  }

  .main:hover #c1 {
    transform: translateX(-130px) rotate(-40deg);
  }

  .main:hover #c2 {
    transform: translateX(-50px) rotate(-30deg);
  }

  .main:hover #c3 {
    transform: translateX(0) rotate(-20deg);
  }

  .main:hover #c4 {
    transform: translateX(50px) rotate(-10deg);
  }

  #c1:hover {
    transform: translateX(-150px) rotate(0deg) scale(1.1) !important;
    z-index: 999 !important;
  }

  #c2:hover {
    transform: translateX(-100px) rotate(0deg) scale(1.1) !important;
    z-index: 999 !important;
  }

  #c3:hover {
    transform: translateX(-50px) rotate(0deg) scale(1.1) !important;
    z-index: 999 !important;
  }

  #c4:hover {
    transform: translateX(50px) rotate(0deg) scale(1.1) !important;
    z-index: 999 !important;
  }
`;

export default Card;
