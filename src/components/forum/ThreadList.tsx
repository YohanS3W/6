import React from 'react';
import { Link } from 'react-router-dom';
import { ForumThread } from '../../types/forum';
import { MessageSquare, Eye } from 'lucide-react';
import ThreadPreviewImage from './ThreadPreviewImage';

interface ThreadListProps {
  threads: ForumThread[];
}

const ThreadList: React.FC<ThreadListProps> = ({ threads }) => {
  return (
    <div className="space-y-4">
      {threads.map((thread) => (
        <Link
          key={thread.id}
          to={`/forum/thread/${thread.id}`}
          className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4"
        >
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {thread.title}
            </h3>
            <ThreadPreviewImage images={thread.images} />
            <p className="text-gray-600 mb-2 line-clamp-2">{thread.content}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm text-gray-500">
                <span>Posted by {thread.author}</span>
                <span className="mx-2">•</span>
                <span>{thread.date}</span>
                <span className="mx-2">•</span>
                <span className="bg-gray-100 px-2 py-1 rounded">
                  {thread.category}
                </span>
              </div>
              <div className="flex items-center space-x-4 text-gray-500">
                <div className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  <span>{thread.replies.length}</span>
                </div>
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  <span>{thread.views}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ThreadList;