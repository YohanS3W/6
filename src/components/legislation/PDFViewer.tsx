import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, AlertCircle, Loader } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error: Error) => {
    setError('Unable to load the PDF document. Please try again later.');
    setLoading(false);
  };

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => Math.min(Math.max(1, prevPageNumber + offset), numPages || 1));
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-red-500" />
        <p className="text-gray-700">{error}</p>
        <p className="text-sm text-gray-500">
          Please ensure the PDF file is properly uploaded to the server.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg">
      {loading && (
        <div className="flex flex-col items-center justify-center p-8 space-y-4">
          <Loader className="w-8 h-8 animate-spin text-[#7A0000]" />
          <p className="text-gray-600">Loading document...</p>
        </div>
      )}
      
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={
          <div className="flex flex-col items-center justify-center p-8 space-y-4">
            <Loader className="w-8 h-8 animate-spin text-[#7A0000]" />
            <p className="text-gray-600">Loading document...</p>
          </div>
        }
        className="max-w-full"
      >
        <Page 
          pageNumber={pageNumber} 
          renderTextLayer={true}
          renderAnnotationLayer={true}
          className="max-w-full"
          scale={1.2}
          loading={
            <div className="flex items-center justify-center p-8">
              <Loader className="w-8 h-8 animate-spin text-[#7A0000]" />
            </div>
          }
        />
      </Document>
      
      {!loading && !error && (
        <div className="flex items-center justify-center mt-4 space-x-4">
          <button
            onClick={() => changePage(-1)}
            disabled={pageNumber <= 1}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <p className="text-gray-700">
            Page {pageNumber} of {numPages}
          </p>
          
          <button
            onClick={() => changePage(1)}
            disabled={pageNumber >= (numPages || 1)}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;