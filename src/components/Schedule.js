import React, { useState, useEffect } from 'react';

const DocumentViewer = () => {
  const [iframeSrc, setIframeSrc] = useState(""); 

  useEffect(() => {
    fetch('http://192.168.10.105:8000/BakiURL')
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при получении данных');
        }
        return response.json(); 
      })
      .then(data => {
        setIframeSrc(data.iframeSrc); 
      })
      .catch(error => {
        console.error('Ошибка при получении ссылки:', error);
      });
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ marginBottom: '1rem' }}>Расписание</h1>
      <iframe
        src={iframeSrc}
        title="Document Viewer"
        style={{ width: '80%', height: '80%' }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DocumentViewer;
