export interface LegislationDocument {
  id: string;
  title: string;
  description: string;
  pdfUrl: string;
}

export const legislationDocuments: LegislationDocument[] = [
  {
    id: 'constitution-1978',
    title: 'Constitution 1978',
    description: 'The Constitution of the Democratic Socialist Republic of Sri Lanka (As amended up to 2023)',
    pdfUrl: '/pdfs/constitution-revised-2023.pdf'
  },
  {
    id: 'penal-code',
    title: 'Penal Code',
    description: 'The Penal Code of Sri Lanka',
    pdfUrl: '/pdfs/4c03e2af2.pdf'
  }
];