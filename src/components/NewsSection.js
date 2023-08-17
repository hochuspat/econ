import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '@/styles/NewsSection.module.css';

const NewsSection = () => {
  const newsData = [
    {
      index: 0,
      image: '/rectangle-2.png',
      title: 'Заголовок новости 1',
      info: 'Информация о новости 1…',
    },
    {
      index: 1,
      image: '/rectangle-3.png',
      title: 'Заголовок новости 2',
      info: 'Информация о новости 2…',
    },
    {
      index: 2,
      image: '/rectangle-4.png',
      title: 'Заголовок новости 3',
      info: 'Информация о новости 3…',
    },
    {
      index: 3,
      image: '/rectangle-5.png',
      title: 'Заголовок новости 4',
      info: 'Информация о новости 4…',
    },
    {
      index: 4,
      image: '/rectangle-2.png',
      title: 'Заголовок новости 5',
      info: 'Информация о новости 5…',
    },
    {
      index: 5,
      image: '/rectangle-4.png',
      title: 'Заголовок новости 6',
      info: 'Информация о новости 6...',
    },
    {
      index: 6,
      image: '/rectangle-4.png',
      title: 'Заголовок новости 7',
      info: 'Информация о новости 7...',
    },
    {
      index: 7,
      image: '/rectangle-4.png',
      title: 'Заголовок новости 8',
      info: 'Информация о новости 8...',
    },
  ];
  


  const itemsPerPage = 4;
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedNewsIndex, setSelectedNewsIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setSelectedNewsIndex(null);
    setIsModalOpen(false);
  };

  const handleNewsClick = (newsIndex) => {
    setSelectedNewsIndex(newsIndex);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedNewsIndex(null);
    setIsModalOpen(false);
  };
  const handleLargeCardClick = (newsIndex) => {
    setSelectedNewsIndex(newsIndex);
    setIsModalOpen(true);
  };
  return (
    <div className={styles.newsSection}>
      <Carousel
        showStatus={false}
        showIndicators={false}
        selectedItem={currentPage}
        emulateTouch
      >
        {Array.from({ length: totalPages }, (_, pageIndex) => (
          <div key={pageIndex} className={styles.cardContainer}>
<div className={styles.largeCard} onClick={() => handleLargeCardClick(pageIndex * itemsPerPage + currentPage)}>
  <img
    src={newsData[pageIndex * itemsPerPage + currentPage]?.image}
    alt={newsData[pageIndex * itemsPerPage + currentPage]?.title}
  />
  <h2>{newsData[pageIndex * itemsPerPage + currentPage]?.title}</h2>
</div>
            <div className={styles.smallCards}>
  {newsData
    .slice(
      pageIndex * itemsPerPage,
      pageIndex * itemsPerPage + itemsPerPage
    )
    .map((news) => {
      const smallNewsIndex = news.index;
      if (
        smallNewsIndex !== pageIndex * itemsPerPage + currentPage &&
        smallNewsIndex !== selectedNewsIndex
      ) {
        return (
          <div
            key={news.index}
            className={styles.smallCard}
            onClick={() => handleNewsClick(smallNewsIndex)}
          >
            <img src={news.image} alt={news.title} />
            <h2>{news.title}</h2>
          </div>
        );
      }
      return null;
    })}
</div>

          </div>
        ))}
      </Carousel>
      {totalPages > 1 && (
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            {Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index}
                className={
                  currentPage === index ? styles.activeDot : styles.dot
                }
                onClick={() => handlePageChange(index)}
              />
            ))}
          </div>
        </div>
      )}
{isModalOpen && selectedNewsIndex !== null && (
  <div className={styles.modal}>
    <div className={styles.modalContent}>
      <span className={styles.closeModal} onClick={handleCloseModal}>
        &times;
      </span>
      <img
        src={newsData[selectedNewsIndex]?.image}
        alt={newsData[selectedNewsIndex]?.title}
        className={styles.modalImage}
      />
      <h2>{newsData[selectedNewsIndex]?.title}</h2>
      <p>{newsData[selectedNewsIndex]?.info}</p>
    </div>
  </div>
)}
    </div>
  );
};

export default NewsSection;