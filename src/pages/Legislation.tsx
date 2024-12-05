import React, { useState } from 'react';
import Header from '../components/Header';
import LegislationSearch from '../components/legislation/LegislationSearch';
import PDFViewer from '../components/legislation/PDFViewer';
import { legislationDocuments } from '../data/legislationData';

const Legislation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

  const filteredDocuments = legislationDocuments.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedPdf = legislationDocuments.find(doc => doc.id === selectedDocument)?.pdfUrl;

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed"
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80)`,
         }}>
      <Header />
      <main className="pt-20 container mx-auto px-4 pb-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Legislation Documents</h1>
        
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex gap-4">
            <div className="w-1/4 bg-white bg-opacity-90 rounded-lg shadow-lg p-4 h-fit">
              <LegislationSearch onSearch={setSearchTerm} />
              <div className="mt-4 space-y-2">
                {filteredDocuments.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => setSelectedDocument(doc.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors text-sm ${
                      selectedDocument === doc.id
                        ? 'bg-[#7A0000] text-white'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <h3 className="font-medium">{doc.title}</h3>
                    <p className={`text-xs mt-1 line-clamp-2 ${
                      selectedDocument === doc.id ? 'text-gray-200' : 'text-gray-600'
                    }`}>
                      {doc.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-3/4">
              {selectedPdf ? (
                <PDFViewer pdfUrl={selectedPdf} />
              ) : (
                <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 text-center">
                  <p className="text-gray-600">Select a document from the list to view its contents</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Legislation;