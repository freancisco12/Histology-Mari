import React from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText: string;
  caption?: string;
  subtitle?: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  imageUrl,
  altText,
  caption,
  subtitle
}) => {
  const [scale, setScale] = React.useState<number>(1);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      setScale(1);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div>
            <h3 className="text-white text-base font-semibold truncate max-w-md">
              {altText}
            </h3>
            {subtitle && (
              <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setScale((prev) => Math.max(0.75, prev - 0.25))}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Diminuir Zoom"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-400 font-mono w-12 text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={() => setScale((prev) => Math.min(2.5, prev + 0.25))}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Aumentar Zoom"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setScale(1)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Resetar Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <div className="w-px h-5 bg-slate-800 mx-1" />
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Fechar (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image viewport */}
        <div className="flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center bg-slate-950 min-h-[350px]">
          <img
            src={imageUrl}
            alt={altText}
            referrerPolicy="no-referrer"
            style={{ transform: `scale(${scale})`, transition: 'transform 0.15s ease-out' }}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-md cursor-grab active:cursor-grabbing origin-center"
            onError={(e) => {
              // Graceful fallback if external host is blocked
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.fallback-msg')) {
                const div = document.createElement('div');
                div.className = 'fallback-msg text-center p-8 text-slate-400';
                div.innerHTML = `<div class="text-teal-400 text-3xl mb-2">🔬</div><p class="font-medium text-white">${altText}</p><p class="text-xs mt-1">Imagem original preservada no relatório e disponível na mentoria ao vivo.</p>`;
                parent.appendChild(div);
              }
            }}
          />
        </div>

        {/* Caption */}
        {caption && (
          <div className="px-6 py-3 bg-slate-900 border-t border-slate-800 text-xs text-slate-300">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
};
