import React, { useState } from 'react';

function createImage(imageKey, scale) {
  const originalWidth = 800;
  const originalHeight = 450;

  return (
    <img
      key={imageKey}
      src="lviv.jpg"
      alt="Фото Львову"
      width={originalWidth * scale}
      height={originalHeight * scale}
      style={{ transition: 'width 0.25s, height 0.25s' }}
    />
  );
}

function Image() {
  const [images, setImages] = useState([]);

  function addImage() {
    setImages((prevImages) => [
      ...prevImages,
      { key: prevImages.length, scale: 1.0 },
    ]);
  }

  function removeImage() {
    if (images.length === 0) {
      alert('Немає фото для видалення!');
    } else {
      setImages((prevImages) => prevImages.slice(0, -1));
    }
  }

  function zoomImage(scale) {
    if (images.length === 0) {
      alert('Немає фото для зміни розміру!');
    } else {
      setImages((prevImages) =>
        prevImages.map((image) => ({
          ...image,
          scale: image.scale * scale,
        }))
      );
    }
  }

  const zoomInImage = () => {
    zoomImage(1.25);
  };

  const zoomOutImage = () => {
    zoomImage(1 / 1.25);
  };

  return (
    <>
      <div id="photos">
        {images.map((image) => createImage(image.key, image.scale))}
      </div>
      <div id="buttons">
        <button onClick={addImage}>Додати</button>
        <button onClick={zoomInImage}>Зібльшити</button>
        <button onClick={zoomOutImage}>Зменшити</button>
        <button onClick={removeImage}>Видалити</button>
      </div>
    </>
  );
}

export default Image;
