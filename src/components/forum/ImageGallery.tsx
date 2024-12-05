import React from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square">
          <img
            src={image}
            alt={`Forum image ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;