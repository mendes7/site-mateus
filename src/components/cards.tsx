import React, { useState, useEffect } from "react";
import '../styles/cards.css'; // CSS personalizado

const Card = ({ imageData }: { imageData: any[] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dividir as imagens em duas partes: as primeiras 4 para visualização e o resto como extras
  const visibleImages = imageData.slice(0, 4); // Primeiras 4 imagens
  const extraImages = imageData.slice(4); // Imagens extras

  const openModal = (index: number) => {
    setCurrentImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? (visibleImages.length + extraImages.length) - 1 : prevIndex - 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % (visibleImages.length + extraImages.length));
  };

  // Manipulador de teclas
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") nextImage();
    if (event.key === "ArrowLeft") prevImage();
    if (event.key === "Escape") closeModal();
  };

  // Ativa e remove o listener de teclas
  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Unir as imagens visíveis e extras para a navegação no modal
  const allImages = [...visibleImages, ...extraImages];
  const caption = imageData.length > 0 ? imageData[0].caption : "";
  
  const [resolvedSrc, setResolvedSrc] = useState<string[]>(new Array(imageData.length).fill(''));
  const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(imageData.length).fill(false));

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const newLoadedState = [...prev];
      newLoadedState[index] = true;
      return newLoadedState;
    });
  };

  // Função para pré-carregar as imagens extras com a API Image
  const preloadImage = (src: string) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      // As imagens são carregadas em segundo plano
    };
  };
  
  // Carregar as imagens dinamicamente assim que o componente for montado
  useEffect(() => {
    imageData.forEach((data, index) => {
      setResolvedSrc((prev) => {
        const newResolvedSrc = [...prev];
        newResolvedSrc[index] = data.src;
        return newResolvedSrc;
      });
      preloadImage(data.src); // Pré-carrega as imagens visíveis
    });

    // Pré-carregar as imagens extras
    extraImages.forEach((data) => {
      preloadImage(data.src); // Carrega as imagens extras em segundo plano
    });
  }, [imageData]);

  return (
    <div className="main">
      {visibleImages.map((data, index) => (
        <div key={index} className="card" id={`c${index + 1}`} onClick={() => openModal(index)}>
          <div className="relative">
            {!loadedImages[index] && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-500"></div>
            )}
            <img
              src={resolvedSrc[index]}
              className={`size-fit transition-opacity duration-500 ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
              alt={`Card ${index + 1}`}
              onLoad={() => handleImageLoad(index)}
              loading="lazy"
            />
          </div>

          {(index === 3 || index === Math.max(...visibleImages.map((_, i) => i))) && (
            <p className="card-caption">{caption}</p>
          )}
        </div>
      ))}
      
      {isModalOpen && (
        <div className="modal-content">
          <button className="close" onClick={closeModal}>
            &times;
          </button>
          <button className="prev" onClick={prevImage}>
            &#10094;
          </button>

          <div className="image-container">
            <img src={allImages[currentImage].src} alt={`Image ${currentImage + 1}`} />
            <p className="caption">{allImages[currentImage].caption}</p> {/* Exibindo a legenda */}
          </div>
          <button className="next" onClick={nextImage}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;