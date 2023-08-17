import React, { useState } from 'react';

const PhotoGallery = ({ albums }) => {
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(0);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const handleAlbumClick = (index) => {
    setSelectedAlbumIndex(index);
    setSelectedPhotoIndex(null); 
  };

  const handlePhotoClick = (photoIndex) => {
    setSelectedPhotoIndex(photoIndex);
  };

  const handleFullScreenClick = () => {
    setSelectedPhotoIndex(null);
  };

  return (
    <div className="photo-gallery">
      <div className="album-list">
        {albums.map((album, index) => (
          <div
            key={index}
            className={`album-card ${selectedAlbumIndex === index ? 'selected' : ''}`}
            onClick={() => handleAlbumClick(index)}
          >
            {album.title}
          </div>
        ))}
      </div>

      <div className="content">
        <div className="photos">
          {albums[selectedAlbumIndex].photos.map((photo, photoIndex) => (
            <div
              key={photoIndex}
              className={`photo-card ${selectedPhotoIndex === photoIndex ? 'selected' : ''}`}
              onClick={() => handlePhotoClick(photoIndex)}
            >
              <img src={photo} alt={`Photo ${photoIndex}`} />
            </div>
          ))}
        </div>

        {selectedPhotoIndex !== null && (
          <div className="fullscreen-overlay" onClick={handleFullScreenClick}>
            <img src={albums[selectedAlbumIndex].photos[selectedPhotoIndex]} alt={`Photo ${selectedPhotoIndex}`} />
          </div>
        )}
      </div>

      <style jsx>{`
        .photo-gallery {
          display: flex;
        }
        .content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .album-list {
          width: 20%;
          background-color: #f0f0f0;
          padding: 10px;
        }

        .album-card {
          padding: 10px;
          margin-bottom: 10px;
          background-color: #f0f0f0;
          border-radius: 10px;
          cursor: pointer;
        }

        .album-card.selected {
          background-color: #CB1517;
          color: white;
        }

        .photos {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding: 10px;
        }

        .photo-card {
          width: 150px;
          height: 150px;
          margin: 10px;
          overflow: hidden;
          border-radius: 10px;
          cursor: pointer;
          transition: transform 0.3s;
        }

        .photo-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .fullscreen-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          cursor: pointer;
        }

        .fullscreen-overlay img {
          max-width: 90%;
          max-height: 90%;
        }
        /* Add more styles as needed */
      `}</style>
    </div>
  );
};

export default PhotoGallery;