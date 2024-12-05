import React from 'react';

interface ThreadPreviewImageProps {
  images?: string[];
}

const ThreadPreviewImage: React.FC<ThreadPreviewImageProps> = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
      <img
        src={images[0]}
        alt="Thread preview"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ThreadPreviewImage;