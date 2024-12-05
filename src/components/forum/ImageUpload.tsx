import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  onImagesSelected: (urls: string[]) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImagesSelected }) => {
  const handleImageChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    // In a real application, you would upload these files to a server
    // For demo purposes, we'll create object URLs
    const imageUrls = Array.from(files).map(file => URL.createObjectURL(file));
    onImagesSelected(imageUrls);
  }, [onImagesSelected]);

  return (
    <div className="mt-4">
      <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-[#7A0000] transition-colors">
        <Upload className="w-4 h-4" />
        <span>Add Images</span>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default ImageUpload;