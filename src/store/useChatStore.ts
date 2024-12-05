import { create } from 'zustand';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatStore {
  messages: Message[];
  apiKey: string | null;
  isOpen: boolean;
  isSettingsOpen: boolean;
  windowSize: { width: number; height: number };
  setApiKey: (key: string) => void;
  addMessage: (message: Message) => void;
  toggleChat: () => void;
  toggleSettings: () => void;
  setWindowSize: (size: { width: number; height: number }) => void;
  sendMessage: (content: string) => Promise<void>;
}

const useChatStore = create<ChatStore>((set, get) => ({
  messages: [],
  apiKey: null,
  isOpen: false,
  isSettingsOpen: false,
  windowSize: { width: 400, height: 600 },
  
  setApiKey: (key) => set({ apiKey: key, isSettingsOpen: false }),
  
  addMessage: (message) => set((state) => ({
    messages: [...state.messages, message]
  })),
  
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  
  toggleSettings: () => set((state) => ({ isSettingsOpen: !state.isSettingsOpen })),
  
  setWindowSize: (size) => set({ windowSize: size }),
  
  sendMessage: async (content) => {
    const { apiKey, addMessage } = get();
    
    if (!apiKey) {
      addMessage({
        role: 'assistant',
        content: 'Please set your Gemini API key in settings first.'
      });
      return;
    }

    addMessage({ role: 'user', content });

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      
      const result = await model.generateContent(content);
      const response = await result.response;
      const text = response.text();
      
      addMessage({
        role: 'assistant',
        content: text
      });
    } catch (error) {
      addMessage({
        role: 'assistant',
        content: 'Sorry, there was an error processing your request. Please check your API key and try again.'
      });
    }
  }
}));

export default useChatStore;