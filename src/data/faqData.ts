interface FAQ {
  question: string;
  answer: string;
  category: string;
  image?: string;
}

export const faqData: FAQ[] = [
  {
    question: "What are my fundamental rights as a Sri Lankan?",
    answer: "According to the 1978 Constitution of Sri Lanka, your constitutional rights are as follows:\n\nArticle 10 - Freedom of thought, conscience and religion\nArticle 11 - Freedom from torture\nArticle 12 - Right to equality\nArticle 13 - Freedom from arbitrary arrest, detention and punishment, and prohibition of retrospective penal legislation\nArticle 14 - Freedom of speech, assembly, association, occupation, movement, & etc...\nArticle 14A - Right of access to information",
    category: "Fundamental Rights"
  },
  {
    question: "What is the minimum wage in Sri Lanka?",
    answer: "As of 2024, the minimum wage for private sector workers in Sri Lanka is Rs. 12,500 per month according to the National Minimum Wage Act. However, specific industries may have different minimum wage requirements set by wage boards.",
    category: "Employment Law"
  },
  {
    question: "What are the requirements to register a private company in Sri Lanka?",
    answer: "To register a private company in Sri Lanka, you need:\n\n1. At least one director\n2. A company secretary\n3. A registered office address\n4. Minimum one shareholder\n5. Articles of Association\n6. Form 1 - Company Registration\n7. Name approval from the Registrar of Companies",
    category: "Company Law"
  }
];