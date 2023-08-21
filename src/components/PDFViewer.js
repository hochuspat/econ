import React from 'react';
import { Document, Page } from 'react-pdf';

export default function PDFViewer({ pdfUrl }) {
  return (
    <div>
      <h3>PDF Viewer</h3>
      <Document file={pdfUrl} onLoadSuccess={console.log}>
        <Page pageNumber={1} width={600} />
      </Document>
    </div>
  );
}
