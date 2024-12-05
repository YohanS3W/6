import { ForumThread } from '../types/forum';

export const forumThreads: ForumThread[] = [
  {
    id: 1,
    title: "Need advice regarding property inheritance dispute",
    content: "My father passed away recently without leaving a will. There's a dispute between my siblings regarding the distribution of his property. What are my legal rights in this situation?",
    author: "Sarah_M",
    date: "2024-03-15",
    category: "Property Law",
    views: 156,
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&w=800&q=80"
    ],
    replies: [
      {
        id: 1,
        content: "Under Sri Lankan law, when a person dies intestate (without a will), the distribution of property is governed by personal laws depending on the deceased's religion and ethnicity. I would need more information about your specific situation to provide detailed advice.",
        author: "Rajitha Perera",
        isLawyer: true,
        date: "2024-03-15",
        likes: 12,
        images: ["https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: 2,
        content: "I went through a similar situation last year. The best approach is to get all siblings to sit together with a lawyer and discuss the matter openly.",
        author: "Kumar123",
        isLawyer: false,
        date: "2024-03-15",
        likes: 5
      }
    ]
  },
  {
    id: 2,
    title: "Workplace discrimination question",
    content: "I believe I'm being discriminated against at my workplace due to my ethnicity. What legal actions can I take?",
    author: "concerned_employee",
    date: "2024-03-14",
    category: "Employment Law",
    views: 234,
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    ],
    replies: [
      {
        id: 1,
        content: "Document everything - dates, times, incidents, and witnesses. This will be crucial for your case. You can file a complaint with the Human Rights Commission of Sri Lanka.",
        author: "Amali Silva",
        isLawyer: true,
        date: "2024-03-14",
        likes: 15,
        images: ["https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"]
      }
    ]
  }
];