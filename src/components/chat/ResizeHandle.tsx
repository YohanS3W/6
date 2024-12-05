import React, { useEffect, useRef } from 'react';

interface ResizeHandleProps {
  onResize: (width: number, height: number) => void;
  onResizing: (isResizing: boolean) => void;
}

const ResizeHandle: React.FC<ResizeHandleProps> = ({ onResize, onResizing }) => {
  const isResizing = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const startSize = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;

      const deltaX = e.clientX - startPos.current.x;
      const deltaY = e.clientY - startPos.current.y;

      const newWidth = Math.max(300, startSize.current.width - deltaX);
      const newHeight = Math.max(400, startSize.current.height - deltaY);

      onResize(newWidth, newHeight);
    };

    const handleMouseUp = () => {
      if (isResizing.current) {
        isResizing.current = false;
        onResizing(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [onResize, onResizing]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isResizing.current = true;
    onResizing(true);
    
    const chatWindow = (e.target as HTMLElement).closest('.chat-window');
    if (chatWindow) {
      startPos.current = { x: e.clientX, y: e.clientY };
      startSize.current = {
        width: chatWindow.clientWidth,
        height: chatWindow.clientHeight
      };
    }
  };

  return (
    <div
      className="absolute left-0 top-0 w-4 h-4 cursor-nw-resize"
      onMouseDown={handleMouseDown}
    >
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-gray-400 rounded-full" />
    </div>
  );
};

export default ResizeHandle;