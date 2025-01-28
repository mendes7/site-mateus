import React, { useState, useEffect } from "react";
import '../styles/cards.css'; // CSS personalizado

const Card = ({ imageData, textOverlay }: { imageData: any[]; textOverlay?: string }) => {
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

  // Unir as imagens visíveis e extras para a navegação no modal
  const allImages = [...visibleImages, ...extraImages];
  if (textOverlay) {
    allImages.push({ isText: true, content: textOverlay });
  }

  const caption = imageData.length > 0 ? imageData[0].caption : "";

  // Navegação para a próxima imagem (incluindo texto no final da sequência)
  const nextImage = () => {
    setCurrentImage((prevIndex) => {
      // Se estiver na última imagem (texto), volta para a primeira
      if (prevIndex === allImages.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  // Navegação para a imagem anterior (voltar do texto para a última imagem)
  const prevImage = () => {
    setCurrentImage((prevIndex) => {
      // Se estiver na primeira imagem, vai para a última (última imagem de todas, antes do texto)
      if (prevIndex === 0) {
        return allImages.length - 1;
      }
      return prevIndex - 1;
    });
  };

  // Ativa e remove o listener de teclas
  useEffect(() => {
    // Manipulador de teclas
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
      if (event.key === "Escape") closeModal();
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);
  
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

  const renderTextWithLineBreaks = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

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

          {index === 0 && (
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
            {allImages[currentImage]?.isText ? (
              <div className="flex items-center justify-center h-full w-96">
                <p className="text-white text-lg font-bold text-justify">
                  {renderTextWithLineBreaks(allImages[currentImage].content)}
                </p>
              </div>
            ) : (
              <>
                <img
                  src={allImages[currentImage].src}
                  alt={`Image ${currentImage + 1}`}
                  className="size-fit"
                />
                <p className="caption">{allImages[currentImage].caption}</p>
                <div className="image-indicator text-white text-center mt-12">
                  {currentImage + 1} / {allImages.length}
                </div>
              </>
            )}
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