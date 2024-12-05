import React from 'react';
import { ForumReply } from '../../types/forum';
import { ThumbsUp } from 'lucide-react';
import ImageGallery from './ImageGallery';

interface ThreadReplyProps {
  reply: ForumReply;
}

const ThreadReply: React.FC<ThreadReplyProps> = ({ reply }) => {
  return (
    <div className={`p-4 rounded-lg mb-4 ${
      reply.isLawyer 
        ? 'bg-white border-[#7A0000] border-l-4' 
        : 'bg-gray-50 border border-gray-200'
    }`}>
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center">
          <span className={`font-semibold ${reply.isLawyer ? 'text-[#7A0000]' : 'text-gray-900'}`}>
            {reply.author}
          </span>
          {reply.isLawyer && (
            <span className="ml-2 px-2 py-1 bg-[#7A0000] text-white text-xs font-medium rounded">
              AAL
            </span>
          )}
        </div>
        <span className="text-sm text-gray-500">{reply.date}</span>
      </div>
      <p className="text-gray-700 mb-3">{reply.content}</p>
      {reply.images && <ImageGallery images={reply.images} />}
      <div className="flex items-center text-gray-500">
        <button className="flex items-center space-x-1 hover:text-[#7A0000]">
          <ThumbsUp className="w-4 h-4" />
          <span>{reply.likes}</span>
        </button>
      </div>
    </div>
  );
};

export default ThreadReply;